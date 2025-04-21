import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const CompanyReview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [reviews, setReviews] = useState([
    {
      id: 1,
      company: "Google",
      college: "MIT",
      text: "Amazing company with great opportunities! The work environment is very supportive, and the projects are challenging yet rewarding. I highly recommend it to anyone looking for growth.",
      rating: 5,
    },
    {
      id: 2,
      company: "Microsoft",
      college: "Stanford",
      text: "Great work culture and learning experience. The team is very collaborative, and there are plenty of opportunities to learn new technologies and grow professionally.",
      rating: 4,
    },
    {
      id: 3,
      company: "Google",
      college: "Harvard",
      text: "Challenging but rewarding experience. The workload can be intense at times, but the learning opportunities and career growth make it worthwhile.",
      rating: 5,
    },
    {
      id: 4,
      company: "Google",
      college: "Harvard",
      text: "Challenging but rewarding experience. The workload can be intense at times, but the learning opportunities and career growth make it worthwhile.",
      rating: 5,
    },
    {
      id: 5,
      company: "Google",
      college: "Harvard",
      text: "Challenging but rewarding experience. The workload can be intense at times, but the learning opportunities and career growth make it worthwhile.",
      rating: 4,
    },
    {
      id: 6,
      company: "Microsoft",
      college: "Stanford",
      text: "Great work culture and learning experience. The team is very collaborative, and there are plenty of opportunities to learn new technologies and grow professionally.",
      rating: 4,
    },
    {
      id: 7,
      company: "Microsoft",
      college: "Stanford",
      text: "Great work culture and learning experience. The team is very collaborative, and there are plenty of opportunities to learn new technologies and grow professionally.",
      rating: 4,
    },
  ]);

  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const navigate = useNavigate();

  const handleSearch = () => {
    const filtered = reviews.filter(
      (review) =>
        review.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.college.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredReviews(filtered);
  };

  const handleReadMore = (review) => {
    navigate(`/review/${review.id}`, { state: { review } });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-8 md:px-16 lg:px-24">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Company Reviews
      </h1>
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 w-full max-w-md">
          <input
            type="text"
            placeholder="Search by company or college..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-gray-800">
                  {review.company}
                </h2>
                <p className="text-yellow-500 font-semibold">
                  {"⭐".repeat(review.rating)}
                </p>
              </div>
              <h3 className="text-md text-gray-600 mb-4">
                College: {review.college}
              </h3>
              <p className="text-gray-700 mb-4">
                {`${review.text.slice(0, 100)}...`}
              </p>
              <button
                onClick={() => handleReadMore(review)}
                className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Read More
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No reviews found for your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default CompanyReview;
