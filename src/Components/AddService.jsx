import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, Toaster } from "react-hot-toast";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const addedDate = new Date().toLocaleString(); // Format the added date

  const handleAddService = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const title = form.get("title");
    const description = form.get("description");
    const category = form.get("category");
    const price = parseFloat(form.get("price"));
    const image = form.get("image");
    const companyName = form.get("companyName");
    const website = form.get("website");

    if (!title || !description || !category || !price || !image || !companyName || !website) {
      toast.error("Please fill out all required fields!");
      return;
    }

    const newService = {
      title,
      description,
      category,
      price,
      image,
      companyName,
      website,
      addedBy: user?.email,
      addedDate,
    };

    // Mock API request to add the service
    console.log("Adding Service:", newService);
    toast.success("Service added successfully!");
    navigate("/services");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-50 my-1">
      <Toaster />
      <div className="w-full max-w-lg bg-indigo-600 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Add a New Service
        </h2>
        <form onSubmit={handleAddService} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-white"
            >
              Service Title
            </label>
            <input
              name="title"
              type="text"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter the service title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-white"
            >
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter a detailed description"
              required
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-white"
            >
              Category
            </label>
            <input
              name="category"
              type="text"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter the category (e.g., IT, Transport)"
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-white"
            >
              Price (in BDT)
            </label>
            <input
              name="price"
              type="number"
              step="0.01"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter the price"
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-white"
            >
              Image URL
            </label>
            <input
              name="image"
              type="url"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter the image URL"
              required
            />
          </div>
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-white"
            >
              Company Name
            </label>
            <input
              name="companyName"
              type="text"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter the company name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block text-sm font-medium text-white"
            >
              Company Website
            </label>
            <input
              name="website"
              type="url"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Enter the company website"
              required
            />
          </div>
          <div className="mt-4 text-sm text-white">
            <strong>Added Date:</strong> {addedDate}
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 transition"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
