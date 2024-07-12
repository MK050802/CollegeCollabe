// ReviewDetails.js
import { useLocation, useNavigate } from "react-router-dom";

const ReviewDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, img, review } = location.state;

  return (
    <div className="w-[800px] m-auto mt-24 bg-white p-4 rounded-lg shadow-lg ">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
      >
        Back
      </button>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center  p-10  ">
          <img
            src={img || "https://via.placeholder.com/150"}
            alt={name}
            className="h-32 w-32 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
