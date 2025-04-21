import { userLogOut } from "../Slices/loginReducer.js";
import axios from "axios";

export const logout = () => async (dispatch) => {
  try{
        const response = await axios.post(
        "http://localhost:5001/api/auth/logout",
        {},
        { withCredentials: true }
     );
   localStorage.removeItem("userInfo");
   dispatch(userLogOut());
  } catch(e){
   console.log("'guddu");
   console.error("Failed to logout");
  }
};
