import React, { useState } from "react";

const JobUploadForm = () => {
  const [formData, setFormData] = useState({
    jobType: "",
    companyType: "",
    companyName: "",
    workMode: "",
    duration: "",
    stipend: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-sky-600 flex items-center justify-center p-6 mt-10">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Upload Job/Intern Details
        </h2>

        <div className="mb-4 py-1">
          <input
            type="text"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter job/intern type"
          />
        </div>

        <div className="mb-4 py-1">
          <input
            type="text"
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter type of company"
          />
        </div>

        <div className="mb-4 py-1">
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter company name"
          />
        </div>

        <div className="mb-4 py-1">
          <input
            type="text"
            name="workMode"
            value={formData.workMode}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter work mode (e.g., remote, onsite)"
          />
        </div>

        <div className="mb-4 py-1">
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter duration"
          />
        </div>

        <div className="mb-4 py-1">
          <input
            type="text"
            name="stipend"
            value={formData.stipend}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            placeholder="Enter stipend amount"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobUploadForm;
