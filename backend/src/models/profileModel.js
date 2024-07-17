// src/models/profileModel.js
import mongoose from "mongoose";
import { Schema} from "mongoose";

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  aboutMe: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
