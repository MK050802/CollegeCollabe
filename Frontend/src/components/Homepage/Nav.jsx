import React, { useState, useEffect, useRef } from "react";
import "../../App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../action/logout";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(null); // Ref for the dropdown
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);

  const Links = [
    { name: "HOME", link: "/" },
    { name: "SEARCH PEOPLE", link: "/SearchPeople" },
    { name: "NOTES", link: "/NotesAndPyq" },
    { name: "SHARE NOTES", link: "/ShareNotes" },
    { name: "JOBS/INTERNSHIP", link: "/JobAndIntern" },
    { name: "COMPANY", link: "/CompanyReview" },
    { name: "ABOUT US", link: "/aboutUs" },
  ];

  const handleDropdownClick = (path) => {
    navigate(path);
    setOpen(false);
  };

  const profileLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="shadow-md w-full h-20 fixed top-0 left-0 z-10 rounded-2xl text-black border-b-2">
        <div className="md:flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-800 py-4 md:px-10 px-4 h-20">
          <div className="font-bold text-lg cursor-pointer flex items-center font-[Poppins] text-white">
            <span className="text-2xl text-white rounded-full mr-1 pt-1">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            CollegeCollabe
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
              <li key={link.name} className="md:ml-4 text-base md:my-0 my-4">
                <div className="px-2 py-2 hover:bg-orange-400 rounded-lg">
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
          {userInfo ? (
            userInfo.email === "yashishkumar996@gmai.com" ||
            userInfo.email === "megha834004@gmai.com" ? (
              <button
                className="bg-orange-500 px-2 py-2 border rounded text-white"
                onClick={() => {
                  navigate("/AdminPage");
                }}
              >
                Admin Dashboard
              </button>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <details
                  className="group"
                  open={dropdownOpen}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <summary className="flex items-center justify-center gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                    <span className="flex gap-2">
                      <img
                        className="w-14 h-14 rounded-full"
                        src={userInfo.profilePhoto}
                        alt="Profile"
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
                        <a href="/ProfilePage">Profile</a>
                      </li>
                      <li
                        className="flex gap-2 items-center"
                        onClick={profileLogOut}
                      >
                        <button>Logout</button>
                      </li>
                    </ul>
                  </article>
                </details>
              </div>
            )
          ) : (
            <div className="relative">
              <details className="group">
                <summary className="flex items-center justify-center gap-2 px-2 py-2 hover:bg-orange-400 rounded-lg text-white font-bold text-base cursor-pointer">
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
                      className="flex gap-2 items-center cursor-pointer px-2 py-2 hover:bg-orange-400 rounded-lg"
                      onClick={() => handleDropdownClick("/Registration")}
                    >
                      User
                    </li>
                    <li
                      className="flex gap-2 items-center cursor-pointer px-2 py-2 hover:bg-orange-400 rounded-lg"
                      onClick={() => handleDropdownClick("/AdminLogin")}
                    >
                      Admin
                    </li>
                  </ul>
                </article>
              </details>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
