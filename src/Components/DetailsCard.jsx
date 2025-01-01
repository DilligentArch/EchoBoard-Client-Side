import React from "react";

const DetailsCard = ({ data }) => {
  const { image, title, category, price, companyName, website, description } = data;

  return (
    <div className="space-y-8">
      {/* Main Card Section */}
      <div className="md:flex max-w-2xl mx-auto bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-1/3 mx-auto">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>

        {/* Content Section */}
        <div className="w-2/3 p-5 flex flex-col justify-center">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          {/* Category */}
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold">Category:</span> {category}
          </p>
          {/* Price */}
          {price && (
            <p className="text-lg font-semibold text-gray-800 mb-2">
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-indigo-600">{price} BDT</span>
            </p>
          )}
          {/* Company Info */}
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold">Provided by:</span> {companyName}
          </p>
          {/* Website Link */}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-600 font-medium hover:underline"
            >
              {website}
            </a>
          )}
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed text-justify">
          {description ||
            "We are committed to providing the best services, ensuring quality and trust at every step. Our mission is to create a platform where transparency meets excellence."}
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
