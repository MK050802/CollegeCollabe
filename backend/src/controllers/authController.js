
import asyncHandler from "express-async-handler";
import generateToken from '../utils/generateToken.js';
import User from "../models/userModel.js"

const registerUser= asyncHandler(async (req,res) => {
     const {name,email,password,confirmPassword}=req.body;
     const user = await User.create({
          name,
          email,
          password,
          confirmPassword
     });

     if(user){
          res.status(201).json({
              _id:user._id,
              name:user.name,
              email:user.email,
              confirmPassword:user.confirmPassword,
              token:generateToken(user._id)
          });
     }
     else{
          res.status(400);
          throw new Error("Error Occured!");
     }
});
 


export default registerUser;