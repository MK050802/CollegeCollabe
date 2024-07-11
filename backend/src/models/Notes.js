import { Schema, model } from 'mongoose';

const NoteSchema = new Schema(
  {
    college: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    subjectCode: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Note= model("Note",NoteSchema);

export default Note;