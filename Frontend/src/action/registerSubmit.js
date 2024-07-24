import { registrationStart, registrationSuccess, registrationFailure } from "../Slices/registerReducer.js";
import { loginSuccess } from "../Slices/loginReducer.js";
import axios from "axios"; 

export const registerSubmit =
  (name, email, password,confirmPassword) => async (dispatch) => {
    try {
      dispatch(registrationStart());

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/auth",
        { name, email, password, confirmPassword },
        config
      );

      dispatch(registrationSuccess(data));
      dispatch(loginSuccess(data));
      localStorage.setItem("userInfo", JSON.stringify(data));

    } catch (error){
      dispatch(registrationFailure(error.message));
    }
  };