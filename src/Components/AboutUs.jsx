import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-indigo-50 py-12 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto pt-20">
      {/* Header Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-6">
        About <span className="text-cyan-300">EchoBoard</span>
      </h2>

      {/* Introduction */}
      <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
        EchoBoard is a dynamic Service Review Platform designed to empower users
        with the ability to explore, review, and manage services. Whether you're 
        a business showcasing your services or a customer sharing your experience, 
        EchoBoard provides a seamless and interactive space for trusted service 
        feedback.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            Add & Manage Services
          </h3>
          <p className="text-gray-600">
            Businesses and individuals can list their services, update details, and
            remove outdated listings with ease.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            Post & Explore Reviews
          </h3>
          <p className="text-gray-600">
            Users can share their experiences, rate services, and read detailed 
            reviews to make informed decisions.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">
            Secure & Seamless Access
          </h3>
          <p className="text-gray-600">
            With secure authentication, users can log in, manage their reviews, 
            and keep track of their interactions on the platform.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-indigo-800">
          Our Mission
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mt-3">
          EchoBoard aims to revolutionize service feedback by creating a transparent, 
          reliable, and user-friendly platform. Our mission is to connect service 
          providers and customers through authentic and insightful reviews.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
