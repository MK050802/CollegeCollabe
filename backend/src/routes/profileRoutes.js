// src/routes/profileRoutes.js
import express from "express";
import Profile from "../models/profileModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
