import React, { useState, useRef } from "react";
import "../App.css";
import profile from "../pages/images/profile.png"

const ProfileForm = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      college: "",
      location: "",
      department: "",
      batch: "",
      skills: [],
      about: "",
      profileImage: null,
    }
  );

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: URL.createObjectURL(file) });
  };

  const handleSave = () => {
    onSave(formData);
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-5xl relative max-h-[80vh] overflow-y-hidden custom-scrollbar"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
    >
      <button
        type="button"
        onClick={() => onSave(initialData)}
        className="absolute right-4 p-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition duration-200"
      >
        X
      </button>
      <div className="space-y-4">
        <div className="flex justify-center">
          <div
            className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md cursor-pointer"
            onClick={handleAvatarClick}
          >
            {formData.profileImage ? (
              <img
                src={formData.profileImage}
                alt={profile}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          className="hidden"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="college"
              placeholder="College"
              value={formData.college}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="batch"
              placeholder="Batch"
              value={formData.batch}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="skills"
              placeholder="Skills (comma separated)"
              value={formData.skills.join(", ")}
              onChange={(e) =>
                setFormData({ ...formData, skills: e.target.value.split(", ") })
              }
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="col-span-2">
            <textarea
              name="about"
              placeholder="About Me"
              value={formData.about}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 pb-12"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="p-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
