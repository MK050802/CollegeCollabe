import express from "express";
import protect from "../middlewares/authMiddleware.js";
import NewsController from "../controllers/NewsController.js";
const router =express.Router();

router.post("/",protect, upload.single("imgURL"),NewsController);

export default router;