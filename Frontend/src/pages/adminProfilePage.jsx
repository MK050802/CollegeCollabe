import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { userLogOut } from "../Slices/loginReducer";

const AdminProfilePage = () => {
  const navigate = useNavigate();
  const dispatch  = useDispatch();

  const logoutAdmin = ()=> {
     dispatch(userLogOut());
     localStorage.removeItem("userInfo");
     navigate("/");
  }

  return (
    <div className="bg-white flex flex-col mt-28 ml-28  m-10 h-[580px] w-[1250px] items-center ">
     <header className="flex flex-row text-orange-600 font-bold  p-6 mt-5">
        <div className="ml-96 text-3xl">
           Admin Dashboard
        </div>
        <button className="ml-96 text-white bg-orange-500 p-2 text-2xl border rounded" onClick={logoutAdmin}>
          logout
        </button>
      </header>
      <section className="flex-grow flex justify-center items-center mr-24">
        <button
          className="bg-orange-500 px-2 py-2 border rounded text-white"
          onClick={() => {
            navigate("/JobAndInternForm");
          }}
        >
          Job/Intern Upload
        </button>
      </section>
    </div>
  );
};

export default AdminProfilePage; 
