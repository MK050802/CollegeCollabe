import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const ReviewDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { review } = location.state || {};

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i)
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      else if (rating >= i - 0.5)
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
    return stars;
  };

  const avatarUrl = review?.avatar
    ? review.avatar
    : `https://ui-avatars.com/api/?name=${
        review?.commenter || "User"
      }&background=random`;

  return (
    <div className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-3xl mx-auto bg-sky-500 p-10 rounded-2xl shadow-xl transition-transform transform hover:scale-[1.01] duration-300 text-white">
        {/* Reviewer info */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-6">
          <div className="flex items-center gap-4">
            <img
              src={avatarUrl}
              alt="avatar"
              className="w-14 h-14 rounded-full object-cover shadow-md"
            />
            <div>
              <h2 className="text-lg font-semibold">
                {review?.commenter || "Anonymous"}
              </h2>
              <p className="text-sm">
                College: {review?.college || "Not specified"}
              </p>
              <p className="text-xs mt-1">
                Reviewed on:{" "}
                {review?.createdAt
                  ? new Date(review.createdAt).toLocaleDateString()
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h1 className="text-2xl font-bold">
              {review?.company || "Company Name"}
            </h1>
            <div className="flex justify-center md:justify-end gap-1 mt-1">
              {renderStars(review?.rating || 0)}
            </div>
          </div>
        </div>

        {/* Review content */}
        <div className="border-t border-white pt-6 text-base leading-relaxed">
          {review?.text || "No review provided."}
        </div>

        {/* Tags */}
        {review?.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {review.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Feedback buttons */}
        <div className="mt-6 flex gap-6 text-sm">
          <button className="hover:text-yellow-300 transition">
            👍 Helpful
          </button>
          <button className="hover:text-red-300 transition">
            👎 Not Helpful
          </button>
        </div>

        {/* Go Back button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
