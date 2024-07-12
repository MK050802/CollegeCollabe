// Reviews.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewStyle.css";
import ReviewForm from "./ReviewForm";

const Reviews = () => {
  const [reviews, setReviews] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const addReview = (newReview) => {
    console.log("Adding review:", newReview);
    setReviews([...reviews, newReview]);
  };

  const openReviewDetails = (review) => {
    navigate("/review-details", { state: review });
  };

  const handleAddReviewClick = () => {
    console.log("Add Review button clicked");
    setShowForm(true);
  };

  return (
    <div className="w-[1100px] m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {reviews.map((d, index) => (
            <div
              key={index}
              className="bg-white h-[420px] text-black rounded-xl mx-2"
            >
              <div className="h-44 rounded-t-xl bg-sky-800 flex justify-center items-center">
                <img
                  src={d.img || "https://via.placeholder.com/150"}
                  alt={d.name}
                  className="h-28 w-28 rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="font-bold">{d.name}</p>
                <p className="text-center">
                  {d.review.length > 100
                    ? d.review.substring(0, 100) + "..."
                    : d.review}
                </p>
                <button
                  onClick={() => openReviewDetails(d)}
                  className="bg-orange-500 text-white text-lg px-6 py-1"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center mt-10 p-3">
        <button
          onClick={handleAddReviewClick}
          className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add a Review
        </button>
      </div>
      {showForm && (
        <ReviewForm
          addReview={addReview}
          closeForm={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

const data = [
  {
    name: "Jane Smith",
    img: "",
    review:
      "I found my dream internship through this website! The user interface is intuitive, and the application process was straightforward. ",
  },
  {
    name: "Jane Smith",
    img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg&ga=GA1.1.28284446.1690382993&semt=sph",
    review:
      "Excellent resource for job seekers. The job alerts feature helped me stay updated on the latest opening ,it is highly recommended.",
  },
  {
    name: "Jane Smith",
    img: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "You can tailor your search based on location, industry, job type, and more, making it easier to find relevant opportunities.",
  },
  {
    name: "Jane Smith",
    img: "https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-curly-hair-brown-hat_1142-42780.jpg?size=626&ext=jpg&ga=GA1.1.28284446.1690382993&semt=sph",
    review:
      "Your profile is your first impression. Ensure it’s complete, with a professional photo, a compelling summary, and detailed work experience. ",
  },
  {
    name: "Alex Johnson",
    img: "https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1718569340~exp=1718572940~hmac=8d04181d5cde995ac3513347f1ad38dda864194d12709ea27b5fc1d47767ec0e&w=740",
    review:
      "Not very user-friendly. The navigation is confusing, and the search functionality is lacking. I expected more from such a reputed site",
  },
];

export default Reviews;
