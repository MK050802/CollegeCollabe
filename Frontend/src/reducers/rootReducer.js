import { combineReducers } from "redux";
import userRegistrationReducer from "../Slices/registerReducer.js"
import userLoginReducer from "../Slices/loginReducer.js"

const rootReducer = combineReducers(
  {
   userRegistration : userRegistrationReducer,
   userLogin :  userLoginReducer
  }
);

export default rootReducer;
