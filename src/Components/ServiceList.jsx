import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  const data = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("All");

 
  const categories = ["All", ...new Set(data.map((item) => item.category))];


  const filteredData = selectedCategory === "All" ? data : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Explore Our Services
      </h2>

      {/* Category Filter Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((singleData) => (
            <ServiceCard key={singleData._id} singleData={singleData} />
          ))
        ) : (
          <p className="text-center text-gray-500">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceList;
