// src/components/NoteSharePage.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Registration from "./Auth/Registration";
import { uploadNote } from "../action/getAllNotes";
import { useNavigate } from "react-router-dom";

function ShareNotes() {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading } = useSelector((state) => state.noteUpload);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    college: "",
    branch: "",
    subject: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const formDataToSend = {
    college: formData.college,
    branch: formData.branch,
    subject: formData.subject,
    file: formData.file,
  };

  dispatch(uploadNote(formDataToSend));
};

  return userInfo ? (
    <div className="min-h-screen bg-sky-600 flex items-center justify-center p-4 mt-6">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Share Your Notes
        </h2>
        <form encType="multipart/form-data">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="college"
            >
              College Name
            </label>
            <input
              type="text"
              name="college"
              id="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your college name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="branch"
            >
              Branch
            </label>
            <input
              type="text"
              name="branch"
              id="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your branch"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subject"
            >
              Subject Code
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter the subject code"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="file"
            >
              Notes File
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-indigo-200"
              onClick={handleSubmit}
            >
              Share Notes
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Registration />
  );
}

export default ShareNotes;
