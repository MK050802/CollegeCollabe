import asyncHandler from "express-async-handler";
import Note from "../models/Notes.js";

const NotesController = asyncHandler(async (req, res) => {
  try {
 
    const { college, branch, subjectCode } = req.body;
    const newNote = await Note.create({
      college,
      branch,
      subjectCode,
      user: req.user._id,
      filePath: req.file ? req.file.path : "No file uploaded",
    });
    await newNote.save();
    res.status(201).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

const getAllNotesController = asyncHandler(async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (error) {
    console.error("Error getting notes:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export { NotesController, getAllNotesController }; 
