import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register=async(req, res)=>{
    const {username, email, password}= req.body;
    const hashedPassword =await bcrypt.hash(password, 2);
    const user= await User.create({ username, email, password:hashedPassword});
    res.json(user);
}

export const login = async(req, res)=>{
    const { email, password}= req.body;
    const user = await User.findOne({email});
    if(!user){
        res.json({message: "mail not exist enter valid mail id"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        res.json({message: "incorrect password"});
    }

    const token=jwt.sign({ id:user._id}, process.env.JWT_SECRET);
    res.json({message: token});
}