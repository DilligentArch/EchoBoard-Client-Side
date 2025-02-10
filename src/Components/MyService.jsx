import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyServiceCard from "./MyServiceCard";

const MyService = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter services based on the search term
  const filteredData = data.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 mb-44 max-w-screen-2xl mx-auto">
      {/* Page Title */}
      <h2 className="text-2xl font-bold text-center mb-6">My Services</h2>

      {/* Search Field */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or company name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price(BDT)</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((service) => (
                <MyServiceCard key={service._id} service={service} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-4">
                  No services found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyService;
