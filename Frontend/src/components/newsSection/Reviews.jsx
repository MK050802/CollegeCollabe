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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const addReview = (newReview) => {
    console.log("Adding review:", newReview);
    setReviews([...reviews, newReview]);
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
              className="bg-white h-[420px] text-black  mx-2 flex flex-row rounded-xl"
            >
              <div className="flex flex-row justify-between">
                <div>
                  <img
                    src={d.img || "https://via.placeholder.com/150"}
                    alt={d.name}
                    className="h-[400px] w-[750px] p-8 rounded-xl border-r-8 mt-2"
                  />
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-center items-center ">
                  <p className="font-bold">{d.name}</p>
                  <p className="text-left">
                    {d.review.length > 100
                      ? d.review.substring(0, 100) + "..."
                      : d.review}
                  </p>
                </div>
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
          Button
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
    name: "John Doe",
    img: "https://img.freepik.com/free-photo/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg?size=626&ext=jpg&ga=GA1.1.754238451.1720722874&semt=ais_user",
    review:
      "I found my dream internship through this website! The user interface is intuitive, and the application process was straightforward. ",
  },
  {
    name: "Jane Smith",
    img: "https://img.freepik.com/free-photo/reflection-lights-mountain-lake-captured-parco-ciani-lugano-switzerland_181624-24209.jpg?size=626&ext=jpg&ga=GA1.1.754238451.1720722874&semt=ais_user",
    review:
      "Excellent resource for job seekers. The job alerts feature helped me stay updated on the latest opening, it is highly recommended.",
  },
  {
    name: "Alice Johnson",
    img: "https://img.freepik.com/free-photo/beautiful-wooden-pathway-going-breathtaking-colorful-trees-forest_181624-5840.jpg?size=626&ext=jpg&ga=GA1.1.754238451.1720722874&semt=ais_user",
    review:
      "You can tailor your search based on location, industry, job type, and more, making it easier to find relevant opportunities.",
  },
  {
    name: "Michael Brown",
    img: "https://img.freepik.com/free-photo/tranquility-horizon-rock-light-sea-summer_1417-1138.jpg?size=626&ext=jpg&ga=GA1.1.754238451.1720722874&semt=ais_user",
    review:
      "Not very user-friendly. The navigation is confusing, and the search functionality is lacking. I expected more from such a reputed site",
  },
];

export default Reviews;
