import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider, useDispatch } from "react-redux";
import { loginSuccess } from "./Slices/loginReducer.js";
import store from "./store";

const AppWithAuth = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      dispatch(loginSuccess(JSON.parse(userInfo)));
    }
  }, [dispatch]);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppWithAuth />
  </Provider>
);
