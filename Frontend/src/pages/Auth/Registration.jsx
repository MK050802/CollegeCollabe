import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {registerSubmit} from "../../action/registerSubmit";
import { loginSubmit } from "../../action/loginSumbit";
import * as Components from "./RegiCSS";

function Registration() {
  const [signIn, toggle] = useState(true);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Extract state slices with unique names
  const {
    loading: registerLoading,
    error: registerError,
    userInfo: registerUserInfo,
  } = useSelector((state) => state.userRegistration);

  const {
    loading: loginLoading,
    error: loginError,
    userInfo: loginUserInfo,
  } = useSelector((state) => state.userLogin);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = registerData;

    if (password !== confirmPassword) {
      // Handle password mismatch error
      console.log("Passwords do not match");
      return;
    }

    dispatch(registerSubmit(name, email, password));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    dispatch(loginSubmit(email, password));
  };

  useEffect(() => {
    if ( loginUserInfo) {
      navigate("/");
    }
  }, [ loginUserInfo, navigate]);

  return (
    <div className="outerContainer">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleRegisterSubmit}>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              placeholder="Name"
              name="name"
              value={registerData.name}
              onChange={handleRegisterChange}
              required
            />
            <Components.Input
              type="email"
              placeholder="Email"
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
              required
            />
            <Components.Input
              type="password"
              placeholder="Password"
              name="password"
              value={registerData.password}
              onChange={handleRegisterChange}
              required
            />
            <Components.Input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleRegisterChange}
              required
            />
            <Components.Button type="submit" disabled={registerLoading}>
              Sign Up
            </Components.Button>
            {registerError && <p>{registerError}</p>}
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleLoginSubmit}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <Components.Input
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button type="submit" disabled={loginLoading}>
              Sign In
            </Components.Button>
            {loginError && <p>{loginError}</p>}
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default Registration;
