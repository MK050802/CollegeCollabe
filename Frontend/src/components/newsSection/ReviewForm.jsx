import { useState } from "react";

const ReviewForm = ({ addReview, closeForm }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const [review, setReview] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ name, img, review });
    closeForm();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4">Add a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Upload Image</label>
            <input
              type="file"
              name="imgURL"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {img && (
              <div className="mt-4">
                <img
                  src={img}
                  alt="Uploaded"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Content</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={closeForm}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
