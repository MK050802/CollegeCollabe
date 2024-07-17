import asyncHandler from "express-async-handler";
import generateToken from '../utils/generateToken.js';
import User from "../models/userModel.js";

const registerUser = asyncHandler(async (req,res) => {
     try{
          const { name, email, password, confirmPassword } = req.body;
          const user = await User.create({
          name,
          email,
          password,
          confirmPassword,
          });

          if (user) {
          res.status(201).json({
               _id: user._id,
               name: user.name,
               email: user.email,
               confirmPassword: user.confirmPassword,
               token: generateToken(user._id),
          });
          } else {
          res.status(400);
          throw new Error("Error Occured!");
          }
     }
     catch(err){
          res.status(500).json({
               message: "Server Error",
          });
     }

});

const loginUser = asyncHandler(async(req,res) => {
       const {email,password} = req.body;
       
       const user = await User.findOne({email});
           if (user && (await user.matchPassword(password))) {
             res.json({
               _id: user.id,
               name: user.name,
               email: user.email,
               token: generateToken(user._id),
             });
           } else {
             res.status(400);
             throw new Error("Invalid Email or Password!");
           }

});
 

export  {registerUser,loginUser}; 