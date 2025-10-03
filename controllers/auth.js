import userSchema from '../models/user.js';
import bcrypt from "bcrypt"



async function registerUser(req, res, next) {
    const {name,email,password}=req.body;
    try{
        const user= await userSchema.findOne({email:email});
        if(!user===null){
            return res.status(400).json({message:"User already exists"})
        }
        const hashedPassword= await bcrypt.hash(password,10);
        await userSchema.create({name,email,password:hashedPassword});
        res.status(201).json({message:"User created successfully"})
    }   catch(err){
     next(err )

}


}
export { 
registerUser

}