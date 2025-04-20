import { combineReducers } from "redux";
import userRegistrationReducer from "../Slices/registerReducer.js";
import userLoginReducer from "../Slices/loginReducer.js";
import AllNotes from "../Slices/notesReducer.js";
import uploadNote from "../Slices/uploadNoteReducer.js";

const rootReducer = combineReducers({
  userRegistration: userRegistrationReducer,
  userLogin: userLoginReducer,
  notes: AllNotes,
  noteUpload: uploadNote,
});

export default rootReducer;