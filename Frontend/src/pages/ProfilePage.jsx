import React, { useState } from "react";
import ProfileForm from "../components/profileForm";
import arya from "./images/arya.jpg";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Your Name",
    college: "College Name",
    location: "Your Address",
    department: "branch",
    batch: "academic year",
    skills: ["skills"],
    about:
      "here will be your about us part",
    profileImage: arya,
  });

  const handleSaveProfile = (newProfileData) => {
    setProfileData(newProfileData);
    setIsEditing(false);
  };

  return (
    <div className="relative mx-auto mt-12 rounded w-full overflow-hidden bg-sky-600">
      <div
        className="h-[150px] bg-gradient-to-r from-orange-500 to-orange-400 ml-36 mr-36"
        style={{ boxShadow: "2px 0px 16px black, -2px 0px 16px black" }}
      ></div>

      <div
        className="flex bg-gray-100 mr-36 ml-36"
        style={{ boxShadow: "2px 0px 16px black, -2px 0px 16px black" }}
      >
        <div className="px-12 py-2 flex flex-col pb-28 pl-20 bg-gray-100">
          <div className="h-[170px] shadow-md w-[170px] rounded-full border-4 overflow-hidden -mt-14 border-white mb-4">
            <img
              src={profileData.profileImage}
              className="w-full h-full rounded-full object-center object-cover"
            />
          </div>
          <div>
            <div>
              <h3 className="text-3xl text-slate-700 relative font-semibold leading-6">
                {profileData.name}
              </h3>
              <p className="text-xl text-gray-600 mt-2 mb-2">
                {profileData.college}
              </p>
              <p className="text-lg text-gray-600 mt-2 mb-2">
                {profileData.location}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-orange-500 px-3 py-2 text-sm font-medium text-white transition hover:border-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 mt-4 mb-6"
              >
                Send Message
              </button>
            </div>

            <div className="flex w-96 gap-4 flex-wrap mt-5">
              {profileData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="max-w-32 rounded-lg bg-indigo-100 px-4 py-2 h-8 text-xs font-medium text-indigo-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-12 mt-20 relative w-full">
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="p-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition duration-200 w-24 mb-5 ml-96"
          >
            Edit Profile
          </button>
          <div className="flex justify-between items-center">
            <h4 className="text-2xl font-medium leading-3 text-slate-700">
              About Me
            </h4>
          </div>
          <p className="text-sm text-stone-700 mt-4 pr-12">{profileData.about}</p>
        </div>
      </div>

      {isEditing && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ProfileForm initialData={profileData} onSave={handleSaveProfile} />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
