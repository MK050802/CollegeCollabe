// ReviewFormPage.js
import { useNavigate } from "react-router-dom";
import ReviewForm from "./ReviewForm";

const currentUser = {
  name: "Logged In User",
  img: "https://example.com/path-to-user-image.jpg",
};

const ReviewFormPage = () => {
  const navigate = useNavigate();

  const addReview = (newReview) => {
    console.log("New review added:", newReview);

    navigate("/"); // Navigate back to home page after submitting the review
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ReviewForm
        addReview={addReview}
        closeForm={() => navigate("/")}
        user={currentUser}
      />
    </div>
  );
};

export default ReviewFormPage;
