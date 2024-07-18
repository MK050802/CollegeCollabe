import asyncHandler from "express-async-handler";
import News from "../models/News.js";

const NewsController = asyncHandler (async (req,res)=>{
     try{
        const {name,review} = req.body;
        const news= await News.create({
            name,
            review,
            imgURL: req.file.path,
     });
        await news.save();
        res.status(201).json({message:"news posted successfully"});
     } catch(error){
        console.error("Error during Uploading",error);
        res.status(500).json({message:"server error"});
     }
});

export default NewsController;