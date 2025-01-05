import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyReviewsCard = ({ item, setReviews, reviews }) => {
  const { _id, review, rating, service } = item;
  const [updatedReview, setUpdatedReview] = useState(review);
  const [updatedRating, setUpdatedRating] = useState(rating);

  const handleSave = (reviewId) => {
    fetch(`https://echoboard-server-side.vercel.app/reviews/${reviewId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review: updatedReview,
        rating: updatedRating,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review updated successfully!");
          document.getElementById(`edit-modal-${reviewId}`).checked = false;

          
        
          const updatedReviews = reviews.map((r) =>
            r._id === reviewId
              ? { ...r, review: updatedReview, rating: updatedRating }
              : r
          );
          setReviews(updatedReviews); 
        } else {
          toast.error("Failed to update review.");
        }
      })
      
  };

 

const handleDelete = (reviewId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://echoboard-server-side.vercel.app/reviews/${reviewId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
            const remainingReviews = reviews.filter((r) => r._id !== reviewId);
            setReviews(remainingReviews); // Update the state to remove the deleted review
          } else {
            Swal.fire("Error!", "Failed to delete the review.", "error");
          }
        })
        .catch((error) => {
          Swal.fire("Error!", "Something went wrong. Please try again.", "error");
          console.error("Error deleting review:", error);
        });
    }
  });
};


  return (
    <>
      <div className="flex items-start bg-white shadow-md rounded-lg p-6">
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-indigo-700">{service}</h3>
          <p className="mt-2 text-gray-600">{review}</p>
          <Rating value={rating} readOnly style={{ maxWidth: 150 }} />
        </div>
        <div className="flex flex-col space-y-2 ml-4">
          <label
            htmlFor={`edit-modal-${_id}`}
            className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 cursor-pointer"
          >
            Edit
          </label>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Daisy UI Modal */}
      <input type="checkbox" id={`edit-modal-${_id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`edit-modal-${_id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-4">Edit Review</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Updated Review
              </label>
              <textarea
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                value={updatedReview}
                onChange={(e) => setUpdatedReview(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Updated Rating
              </label>
              <Rating
                value={updatedRating}
                onChange={setUpdatedRating}
                style={{ maxWidth: 150 }}
              />
            </div>
          </div>
          <div className="modal-action">
            <button
              onClick={() => handleSave(_id)}
              className="btn btn-primary w-full"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReviewsCard;
