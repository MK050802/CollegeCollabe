import asyncHandler from "express-async-handler";
import Jobs from "../models/Jobs.js";

const jobController = asyncHandler(async (req, res) => {
  try {
    const {
      jobType,
      companyType,
      companyName,
      workMode,
      duration,
      stipend,
      link,
    } = req.body;

    // Validate required fields
    if (
      !jobType ||
      !companyType ||
      !companyName ||
      !workMode ||
      !duration ||
      !stipend ||
      !link
    ) {
      res.status(400);
      throw new Error("All fields are required");
    }

    const job = await Jobs.create({
      jobType,
      companyType,
      companyName,
      workMode,
      duration,
      stipend,
      link,
    });

    await job.save();

    res.status(201).json({ message: "Job has been created successfully", job });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

export default jobController;
