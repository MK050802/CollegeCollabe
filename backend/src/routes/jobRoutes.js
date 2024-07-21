import express from "express";
import protect from "../middlewares/authMiddleware.js";
import jobController from "../controllers/jobInternController.js";

const router = express.Router();

router.post("/",protect,jobController);

export default router;