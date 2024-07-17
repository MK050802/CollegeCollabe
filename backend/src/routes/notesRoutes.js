import express from "express";
import upload from "../storage.js";
import {
  NotesController,
  getAllNotesController,
} from "../controllers/NotesController.js";
import protect from "../middlewares/authMiddleware.js";


const router = express.Router();

router.post("/CreateNotes", protect, upload.single("file"),NotesController);

router.get("/GetAllNotes",protect,  getAllNotesController);

export default router;

