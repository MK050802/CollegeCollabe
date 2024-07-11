import express from "express";
import upload from "../storage.js";
import NotesController from "../controllers/NotesController.js";
import protect from "../middlewares/authMiddleware.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs"
const router = express.Router();

router.post("/CreateNotes", protect, upload.single("file"), (req, res) => {
  NotesController(req, res);
});

export default router;

