import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSubmit } from "../../action/loginSumbit";


const AdminLogin = () => { 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, error, userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const onLoginChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      loginSubmit(formData.email,formData.password)
    );
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/"); // Redirect on successful login
    }
  }, [userInfo, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm border-black">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">
          Login as Admin 😎
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onLoginChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onLoginChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={submitHandler}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;