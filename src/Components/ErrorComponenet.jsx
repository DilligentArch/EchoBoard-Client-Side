import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorComponent = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
      {/* Error Icon */}
      <div className="flex items-center justify-center w-20 h-20 bg-blue-200 rounded-full">
        <span className="text-4xl font-bold text-blue-600">!</span>
      </div>

      {/* Error Message */}
      <h1 className="text-3xl font-bold mt-6 text-blue-800">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-gray-600 mt-2 text-center">
        We couldn’t find the page you were looking for. Please try again or go back to the homepage.
      </p>

      {/* Back to Home Button */}
      <button
        onClick={handleBackToHome}
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorComponent;
