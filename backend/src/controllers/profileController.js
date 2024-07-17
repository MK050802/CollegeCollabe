import asyncHandler from "express-async-handler";
import Profile from "../models/profileModel.js";

const profileController = asyncHandler(async (req,res) =>{
       try{
           const { name, college, address, batch, branch, skills, aboutMe } =
             req.body;

           if (!name && !college && !address && !batch && !skills && !aboutMe) {
            res.status(400);
            throw new Error(
              "At least one field (name, college, address, batch, skills, aboutMe) must be provided for update"
            );
          }

          const profile = await Profile.create({
            name,
            branch,
            college,
            address,
            batch,
            skills,
            aboutMe,
            user: req.user._id,
          });

          await profile.save();

         res.status(201).json({ message: "Profile has been created Successfully" });

       }catch (error){
            res.status(500).json({
                message: "Server Error",
            });
       }

});

export default profileController;