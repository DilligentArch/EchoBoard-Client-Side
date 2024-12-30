import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Explore Our Services
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((singleData) => (
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
