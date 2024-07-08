import React, { useState, useEffect } from "react";

const UserStats = () => {
  const [viewers, setViewers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [newUsers, setNewUsers] = useState(0);

  useEffect(() => {
    // Generate random numbers for viewers, active users, and new users
    const interval = setInterval(() => {
      setViewers(Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000); // Random number between 10000 and 100000 for viewers
      setActiveUsers(Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000); // Random number between 10000 and 100000 for active users
      setNewUsers(Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000); // Random number between 10000 and 100000 for new users
    }, 3000); // Update every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-14 bg-sky-600 rounded-lg shadow-md gap-4">
      <h2 className="text-6xl font-semibold mb-2 text-center  pl-28 text-white ">
        User Statistics
      </h2>
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-3 m-20 ml-24 pl-52  justify-center">
        <div className="p-4 pr-2 bg-sky-600  border-r-4">
          <h3 className="text-3xl font-semibold mb-2 text-gray-200">Viewers</h3>
          <p className="text-5xl font-bold text-gray-200">{viewers}</p>
        </div>
        <div className=" p-4 pl-10 bg-sky-600  border-r-4 ">
          <h3 className="text-3xl font-semibold mb-2 text-gray-200">
            Active Users
          </h3>
          <p className="text-5xl font-bold text-gray-200">{activeUsers}</p>
        </div>
        <div className="p-4 bg-sky-600  pl-8">
          <h3 className="text-3xl font-semibold mb-2 text-gray-200">
            New Users
          </h3>
          <p className="text-5xl font-bold text-gray-200">{newUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
