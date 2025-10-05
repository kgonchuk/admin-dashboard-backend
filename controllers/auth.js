import User from '../models/user.js';
import bcrypt from "bcrypt"; 


import jwt from 'jsonwebtoken';



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
        if(user===null){
            console.log("email", email);
            return res.status(400).json({message:"User not found"})
        }
        const isPasswordValid= await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            console.log("password", password);
            return res.status(400).json({message:"Invalid password"})
        }

        // res.status(200).json({message:"Login successful"})
        const token= jwt.sign({id:user._id, name:user.email}, process.env.JWT_SECRET, {expiresIn:"1h"})
        await User.findByIdAndUpdate(user._id, {token:token}).exec();
        res.send({token: token })
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
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer') {
      throw HttpError(401, 'Not authorized');
    }

    const result = await authService.refresh(token);
    res.json(result);
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