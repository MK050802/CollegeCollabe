import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      const token = generateToken(user._id);

      // Set the cookie and send the response
     res.cookie("token", token, {
     httpOnly: true,
     secure: process.env.NODE_ENV === "production", 
     sameSite: "None", 
     maxAge: 24 * 60 * 60 * 1000, 
     });

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: token, 
      });
    } else {
      res.status(400);
      throw new Error("Error Occurred!");
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);

    // Set the cookie and send the response
     res.cookie("token", token, {
       httpOnly: true,
       secure: process.env.NODE_ENV === "production",
       sameSite: "None",
       maxAge: 24 * 60 * 60 * 1000,
     });

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: token, // Include the token in the response payload if needed
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});

const logoutUser = asyncHandler(async(req,res)=>{
          try {
            // Clear the authentication token from the client
            res.clearCookie("token");

            // Send a success response
            res.status(200).json({ message: "Logout successful" });
          } catch (error) {
            console.error("Logout error:", error);
            res.status(500).json({ message: "Internal Server Error" });
          }
})

export { registerUser, loginUser,logoutUser };
