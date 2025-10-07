import User from '../models/user.js';
import bcrypt from "bcrypt"; 
import jwt from 'jsonwebtoken';

const ACCESS_EXPIRES = "1h";
const REFRESH_EXPIRES = "7d";

// === створення токенів
function generateTokens(user) {
  const accessToken = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: ACCESS_EXPIRES }
  );

  const refreshToken = jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  return { accessToken, refreshToken };
}




async function registerUser(req, res, next) {
    const {name,email,password}=req.body;
    try{
        const user= await User.findOne({email:email}).exec();;
        if(!user===null){
            return res.status(400).json({message:"User already exists"})
        }
        const hashedPassword= await bcrypt.hash(password,10);
     await User.create({name,email,password: hashedPassword })
        res.status(201).json({message:"User created successfully"})
    }   catch(err){
     next(err )

}}

async function loginUser(req, res, next) {
    const {email,password}=req.body;
    try{
        const user= await User.findOne({email:email}).exec();;
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        const isPasswordValid= await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid password"})
        }
        const { accessToken, refreshToken } = generateTokens(user);
        await User.findByIdAndUpdate(user._id, { token: refreshToken }).exec();
        res.json({accessToken, refreshToken, user: { id: user._id, name: user.name, email: user.email }});  
    }   catch(err){
     next(err )

}}


async function logoutUser(req, res, next) {
    try{
        await User.findByIdAndUpdate(req.user.id, {token:null})
        res.status(200).json({message:"Logout successful"})
    }   catch(err){
     next(err )

}}  

async function getCurrent (req, res, next)  {
  try {
    const { name, email } = req.user;
    res.json({ name, email });
  } catch (error) {
    next(error);
  }
};

async function refresh (req, res, next) {
  try {
    const {refreshToken} = req.body;
    if (!refreshToken) 
      return res.status(401).json({ message: "No refresh token" });
const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
const user = await User.findById(decoded.id);
if (!user || user.token !== refreshToken)
  return res.status(403).json({ message: "Invalid refresh token" });
const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);
user.token = newRefreshToken;
await user.save();
res.json([{ accessToken, refreshToken: newRefreshToken }]);
  } catch (error) {
    next(error);
  }
};


export { 
registerUser,
loginUser, 
logoutUser,
getCurrent,
refresh
}