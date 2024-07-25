import React from "react";
import { useNavigate } from "react-router-dom";

const AdminProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col mt-28 ml-28  m-10 h-[580px] w-[1250px] items-center ">
      <header className="text-orange-600 font-bold text-4xl p-6 mt-5">
        Admin Dashboard
      </header>
      <section className="flex-grow flex justify-center items-center">
        <button
          className="bg-orange-500 px-2 py-2 border rounded text-white"
          onClick={() => {
            navigate('/JobAndInternForm');
          }}
        >
         Job/Intern Upload
        </button>
      </section>
    </div>
  );
};

export default AdminProfilePage; 
