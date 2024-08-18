import axios from "axios";
import {
  noteUploadStart,
  noteUploadSuccess,
  noteUploadFailure,
} from "../Slices/uploadNoteReducer.js";

const token = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")).token
  : null;

export const fetchAllNotes = () => async (dispatch) => {
  try {
    dispatch(getAllNotesStart());
    const { data } = await axios.get(
      "http://localhost:5000/api/notes/GetAllNotes"
    );
    dispatch(getAllNotesSuccess(data));
  } catch (error) {
    dispatch(getAllNotesFailure(error.message));
  }
};

export const uploadNote = (formData) => async (dispatch) => {
  try {
    dispatch(noteUploadStart());

const config = {
  headers: {
    "Content-Type": "multipart/form-data", // Set this to handle file uploads
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
};


    const data = new FormData();
    data.append("college", formData.college);
    data.append("branch", formData.branch);
    data.append("subjectCode", formData.subject);
    data.append("file", formData.file);

    const response = await axios.post(
      "http://localhost:5000/api/notes/CreateNotes",
      data,
      config
    );

    dispatch(noteUploadSuccess(response.data));
  } catch (error) {
    dispatch(noteUploadFailure(error.message));
  }
};
