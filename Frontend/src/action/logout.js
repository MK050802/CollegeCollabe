import { userLogOut } from "../Slices/loginReducer.js";
import axios from "axios";

export const logout = () => async (dispatch) => {
  try {
    await axios.post(
      "http://localhost:5001/api/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );

    localStorage.removeItem("userInfo");
    dispatch(userLogOut());
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
