// src/pages/ProfilePage.js
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const ProfileDetails = () => {
  const [profile, setProfile] = useState({
    name: "",
    college: "",
    branch: "",
    address: "",
    skills: "",
  });

  const [editMode, setEditMode] = useState({
    name: false,
    college: false,
    branch: false,
    address: false,
    skills: false,
  });

  const handleEditClick = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async (field) => {
    setEditMode({ ...editMode, [field]: false });
    try {
      const response = await fetch("http://localhost:5000/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-36 p-5 border rounded-lg shadow-lg">
      {["name", "college", "branch", "address", "skills"].map((field) => (
        <div key={field} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          {editMode[field] ? (
            <div className="flex items-center">
              <input
                type="text"
                name={field}
                value={profile[field]}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                onClick={() => handleSave(field)}
                className="ml-2 text-green-500"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <span className="text-gray-700">{profile[field]}</span>
              <button
                onClick={() => handleEditClick(field)}
                className="ml-2 text-blue-500"
              >
                <FaEdit />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfileDetails;
