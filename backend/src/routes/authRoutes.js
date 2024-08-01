import express from "express";
import { registerUser, loginUser,logoutUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/",registerUser);
router.post("/login", loginUser);
router.post("/logout",logoutUser);

export default router;