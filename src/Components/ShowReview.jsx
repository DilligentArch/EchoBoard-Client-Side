import React from 'react';

const ShowReview = ({ review }) => {
  const { review: userReview, rating, userName, userImage, addedDate } = review;

  return (
    <div className="p-6 md:w-2/3  max-w-screen-2xl mx-auto    rounded-lg max-w-screen-2xl mx-auto ">
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={userImage || 'https://via.placeholder.com/50'}
          alt={`${userName}'s profile`}
          className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
        />
        <div>
          <h3 className="text-lg font-semibold text-blue-800">{userName || 'Anonymous'}</h3>
          <p className="text-sm text-gray-600">Reviewed on: {addedDate}</p>
        </div>
      </div>
      {/* Rating */}
      <div className="flex items-center">
        <span className="text-blue-800 font-medium mr-2">Rating:</span>
        <div className="flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                index < rating ? 'text-yellow-500' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.977 2.889a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.89a1 1 0 00-1.176 0l-3.978 2.89c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.392 9.101c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
            </svg>
          ))}
        </div>
        <span className="text-sm text-gray-600 ml-2">{rating} / 5</span>
      </div>
      {/* Review Text */}
      <p className="text-gray-800 mb-4">
        <span className="font-medium">Review: </span>{userReview}
      </p>

      
    </div>
  );
};

export default ShowReview;
