import asyncHandler from "express-async-handler";
import Note from "../models/Notes.js";

const NotesController = asyncHandler(async (req, res) => {
  console.log(req.body);
  console.log(req.file); // This should contain the uploaded file
  try {
    const { college, branch, subjectCode } = req.body;
    const newNote = await Note.create({
      college,
      branch,
      subjectCode,
      user: req.user._id,
      filePath: req.file.path,
    });
    await newNote.save();
    res.status(201).json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default NotesController;
