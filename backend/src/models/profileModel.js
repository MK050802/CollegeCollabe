// src/models/profileModel.js
import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: String, required: true },
  branch: { type: String, required: true },
  address: { type: String, required: true },
  skills: { type: String, required: true },
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
