import React, { useState, useEffect } from "react";
import "../../App.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom"; 
import "./Button";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SEARCH PEOPLE", link: "/SearchPeople" },
    { name: "CHAT BOX", link: "/contact" },
    { name: "NOTES", link: "/NotesAndPyq" },
    { name: "SHARE NOTES", link: "/ShareNotes" },
    { name: "JOBS/INTERNSHIP", link: "/JobAndIntern" },
    { name: "ABOUT US", link: "/aboutUs" },
  ];

const handleDropdownClick = (path) => {
    navigate(path);
    setOpen(false); 
  };
  return (
    <>
      <div className="shadow-md w-full h-20 fixed top-0 left-0 z-10 rounded-2xl text-black border-b-2 ">
        <div className="md:flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-800 py-4 md:px-10 px-4 h-20">
          <div className="font-bold text-lg cursor-pointer flex items-center font-[Poppins] text-white">
            <span className="text-2xl text-white rounded-full mr-1 pt-1">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            ShareIT
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-customGray md:z-auto z-[-1] left-0 w-full bg-transparent md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in ${
              open ? "top-16 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-4 text-base md:my-0 my-4 ">
                <div className="px-2 py-2 hover:bg-orange-400 rounded-lg ">
                  <a
                    href={link.link}
                    className="text-white font-bold hover:text-white duration-600"
                  >
                    {link.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {/* Login/Signup Dropdown */}
          <div className="relative">
            <details className="group">
              <summary className="flex items-center justify-center gap-2 p-2 font-medium marker:content-none hover:cursor-pointer px-2 py-2 hover:bg-orange-400 rounded-lg  text-white">
                Login/Signup
                <svg
                  className="w-5 h-5 text-white transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </summary>
              <article className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                <ul className="flex flex-col gap-4 p-4">
                  <li
                    className="flex gap-2 items-center cursor-pointer px-2 py-2 hover:bg-orange-400  "
                    onClick={() => handleDropdownClick("/Registration")}
                  >
                    User
                  </li>
                  <li
                    className="flex gap-2 items-center cursor-pointer px-2 py-2 hover:bg-orange-400 rounded-lg "
                    // Add the path for admin later
                    onClick={() => handleDropdownClick("/AdminLogin")}
                  >
                    Admin
                  </li>
                </ul>
              </article>
            </details>
          </div>
          <button
            className="bg-orange-500 px-2 py-2 border rounded text-white"
            onClick={() => {
              navigate("/AdminPage");
            }}
          >
            Admin Dashboard
          </button>
          {/* User Profile Dropdown */}
          <div className="relative">
            <details className="group">
              <summary className="flex items-center justify-center gap-2 p-2 font-medium marker:content-none hover:cursor-pointer ">
                <span className="flex gap-2 ">
                  <img
                    className="w-14 h-14 rounded-full"
                    src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c"
                    alt=""
                  />
                </span>
                <svg
                  className="w-5 h-5 text-white transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </summary>
              <article className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                <ul className="flex flex-col gap-4 p-4">
                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      ></path>
                    </svg>

                    <a href="/ProfilePage">Profile</a>
                  </li>

                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      ></path>
                    </svg>
                    <a href="http://127.0.0.1:8000/user/notes">Notes</a>
                  </li>

                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25m0 0H12M15.75 5.25L19.5 9m-3.75-3.75L21 12m-1.5 0H15.75M9 15.75V19.5m0 0H5.25M9 19.5l-3.75-3.75M9 19.5L3 15.75m0 0V12"
                      ></path>
                    </svg>
                    <a href="http://127.0.0.1:8000/user/resources">Resources</a>
                  </li>

                  <li className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2.25m0 0v1.5m0-1.5h-1.5m1.5 0h1.5m3.75-8.25V7.5A2.25 2.25 0 0013.5 5.25h-3A2.25 2.25 0 008.25 7.5v.75m0 0H5.25A2.25 2.25 0 003 10.5v9A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75v-9a2.25 2.25 0 00-2.25-2.25h-3m-10.5 0v-.75m0 0A2.25 2.25 0 017.5 3h3a2.25 2.25 0 012.25 2.25v.75M6.75 9.75h10.5a.75.75 0 01.75.75v8.25a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75z"
                      ></path>
                    </svg>
                    <a href="http://127.0.0.1:8000/user/logout">Logout</a>
                  </li>
                </ul>
              </article>
            </details>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;