import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  const data = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Get unique categories
  const categories = ["All", ...new Set(data.map((item) => item.category))];

  // Filter services by category
  let filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  // Sort services by price
  if (sortOrder === "lowToHigh") {
    filteredData = [...filteredData].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredData = [...filteredData].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container px-4 py-8 max-w-screen-2xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Explore Our Services
      </h2>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        {/* Category Filter */}
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

        {/* Sort by Price Filter */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="default">Sort by Price</option>
          <option value="lowToHigh">Lowest to Highest</option>
          <option value="highToLow">Highest to Lowest</option>
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
