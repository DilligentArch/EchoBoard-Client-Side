import React from 'react';
import { FaSearch, FaCommentDots, FaHandsHelping } from 'react-icons/fa'; // Import icons from React Icons

const HowItWorks = () => {
  const steps = [
    {
      title: 'Find a Service',
      description: 'Search for the best services based on honest user reviews.',
      icon: <FaSearch className="text-blue-500 text-4xl" />, // React Icon
    },
    {
      title: 'Share Your Feedback',
      description: 'Write reviews to help others make informed decisions.',
      icon: <FaCommentDots className="text-green-500 text-4xl" />, // React Icon
    },
    {
      title: 'Build Trust',
      description: 'Contribute to a transparent and reliable community.',
      icon: <FaHandsHelping className="text-yellow-500 text-4xl" />, // React Icon
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6 max-w-screen-2xl mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{step.icon}</div> {/* Render React Icon */}
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
