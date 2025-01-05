import React, { useState } from "react";
import MyReviewsCard from "./MyReviewsCard";
import { useLoaderData } from "react-router-dom";

const MyReviews = () => {
  const data = useLoaderData();
  const [reviews, setReviews] = useState(data); // Initialize state with the fetched reviews

  return (
    <div className="container mx-auto px-4 py-8 mb-44">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
        My Reviews
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {reviews.length > 0 ? (
          reviews.map((item) => (
            <MyReviewsCard
              key={item._id}
              item={item}
              reviews={reviews}
              setReviews={setReviews} // Pass the state updater function
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews found.</p>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
