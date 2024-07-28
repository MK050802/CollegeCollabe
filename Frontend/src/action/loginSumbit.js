import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../Slices/loginReducer.js";
import axios from "axios";

export const loginSubmit = (email, password) => async (dispatch) => {
  try {

    dispatch(loginStart());
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password },
      { withCredentials: true },
      config
    );

    console.log(data);
    dispatch(loginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};