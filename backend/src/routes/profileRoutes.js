import express from "express";
import profileController from "../controllers/profileController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create",protect,profileController);

export default router; 