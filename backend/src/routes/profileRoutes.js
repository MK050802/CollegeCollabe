import express from "express";
import profileController from "../controllers/profileController.js";
import protect from "../middlewares/authMiddleware.js";
import upload from "../storage.js";

const router = express.Router();

router.post("/create",protect,upload.single("imgURL"),(req,res)=>{
      profileController(req,res);
});

export default router; 