import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  jobType: {
    type: String,
    required: true,
    enum: ["Job", "Intern"],
  },
  companyType: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  workMode: {
    type: String,
    required: true,
    enum: ["Remote", "Onsite"],
  },
  duration: {
    type: String,
    required: true,
  },
  stipend: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Jobs = mongoose.model("Jobs", jobSchema);

export default Jobs;
