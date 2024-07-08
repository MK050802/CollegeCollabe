import React from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaBook,
  FaStickyNote,
  FaComments,
  FaBlog,
} from "react-icons/fa";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaBriefcase />,
      title: "Jobs",
      description:
        "Find the latest job opportunities tailored to your skills and interests.",
      borderColor: "border-slate-50",
      link: "/job",
    },
    {
      icon: <FaGraduationCap />,
      title: "Internships",
      description: "Explore internships to gain valuable work experience.",
      borderColor: "border-slate-50",
      link: "/job",
    },
    {
      icon: <FaBlog />,
      title: "Search People",
      description: "Read and share blog posts on a variety of topics.",
      borderColor: "border-slate-50",
      link: "SearchPeople",
    },
    {
      icon: <FaComments />,
      title: "Chatting",
      description:
        "Engage in discussions with peers and experts in your field.",
      borderColor: "border-slate-50",
      link: "/Chatting",
    },

    {
      icon: <FaBook />,
      title: "Share Notes",
      description: "Share and access notes to help you study more effectively.",
      borderColor: "border-slate-50",
      link: "/Share Notes",
    },
    {
      icon: <FaStickyNote />,
      title: "Notes & PYQ",
      description: "Find previous year question papers for better preparation.",
      borderColor: "border-slate-50",
      link: "/NotesAndPyq",
    },
  ];

  return (
    <div className="min-h-screen flex items-center bg-sky-600 ">
      <div className="flex-1 max-w-4xl mx-auto p-10">
        <ul className="grid grid-cols-1 gap-10  sm:grid-cols-2 md:grid-cols-3 md:gap-14">
          {services.map((service, index) => (
            <li
              key={index}
              className="list-none "
              onClick={() => {
                navigate(service.link);
              }}
            >
              <button
                className="relative bg-white rounded-lg overflow-hidden group featureBox h-68 gap-10 w-full"
                style={{ border: "none", padding: 0 }}
              >
                <div
                  className={`h-64 ${service.borderColor} border-b-4 flex flex-col items-center p-4 transition-transform duration-300 transform group-hover:scale-105 `}
                >
                  <div className="text-4xl my-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-center px-4">{service.description}</p>
                  <div className="absolute inset-0 bg-white bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                </div>
              </button>
            </li>
          ))}{" "}
        </ul>
      </div>
    </div>
  );
};

export default Services;
