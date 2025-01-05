import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyServiceCard = ({ service }) => {
  const {user}=useContext(AuthContext);
  const { image, title, companyName, category, price, description, website, _id } = service;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image,
    title,
    companyName,
    category,
    price,
    description,
    website,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const updateNow = (e) => {
    e.preventDefault();
    // console.log("Updated Data:", formData);
    document.getElementById(`update-modal-${_id}`).checked = false; // Close the modal
    // Call the API to update the service

    fetch(`https://echoboard-server-side.vercel.app/services/${_id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
  })
      .then((res) => res.json())
      .then((data) => {
          if (data.modifiedCount > 0) {
              toast.success("Service updated successfully!");
              // navigate("/services"); 
              navigate(`/my-service/${user.email}?reload=` + new Date().getTime());
             
          } else {
              toast.error("Failed to update the service.");
          }
      });

  };

  const deleteNow = (id) => {
    console.log("Deleting service with ID:", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://echoboard-server-side.vercel.app/services/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The service has been removed .",
                icon: "success",
              });
              // Update state by removing the deleted movie
              navigate(`/my-service/${user.email}?reload=` + new Date().getTime());
            } else {
              Swal.fire("Error", "Failed to delete the service. Please try again.", "error");
            }
          })
          .catch((err) => {
            console.error("Error deleting movie:", err);
            Swal.fire("Error", "Failed to delete the movie. Please try again.", "error");
          });
      }
    });
    // Call the API to delete the service
  };

  return (
    <>
      <tr className="border-t">
        <td className="px-4 py-2">
          <img src={image} alt={title} className="w-16 h-16 rounded-lg object-cover" />
        </td>
        <td className="px-4  lg:pl-16 py-2">{title}</td>
        <td className="px-4  lg:pl-16 py-2">{companyName}</td>
        <td className="px-4  lg:pl-16 py-2">{category}</td>
        <td className="px-4  lg:pl-16 py-2"> {price.toFixed(2)}</td>
        <td className="px-4  lg:pl-16 py-2 space-x-2">
          <label
            htmlFor={`update-modal-${_id}`}
            className="bg-blue-500 text-white px-3 py-1   rounded-lg hover:bg-blue-600 cursor-pointer"
          >
            Update
          </label>
          <button
            onClick={()=>deleteNow(_id)}
            className="bg-red-500 text-white mt-4 lg:mt-0  px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </td>
      </tr>

      {/* Update Modal */}
      <input type="checkbox" id={`update-modal-${_id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-3xl">
          <h3 className="text-lg font-bold mb-4">Update Service</h3>
          <form onSubmit={updateNow} className="space-y-6">
            {/* Service Image */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Service Image URL
              </label>
              <input
                name="image"
                type="url"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Service Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Service Title
              </label>
              <input
                name="title"
                type="text"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Website */}
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                Company Website
              </label>
              <input
                name="website"
                type="url"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                name="category"
                type="text"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price (in BDT)
              </label>
              <input
                name="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Modal Actions */}
            <div className="modal-action">
              <label htmlFor={`update-modal-${_id}`} className="btn btn-outline">
                Cancel
              </label>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyServiceCard;
