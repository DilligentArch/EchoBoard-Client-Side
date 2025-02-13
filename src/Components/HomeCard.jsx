import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const MotionNavLink = motion(NavLink);

const HomeCard = ({ singleData }) => {
    const { image, title, description, category, price } = singleData;

   
    return (
        <div
            
            className="bg-white shadow-md rounded-lg overflow-hidden transition-shadow duration-300 max-w-screen-2xl mx-auto"
        >
            {/* Image with animation */}
            <img
                src={image}
                alt={title}
              
                className="w-36 h-36 mx-auto my-auto"
            />

            {/* Content */}
            <div className="p-4">
                {/* Category */}
                <span
                   
                    className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full mb-2"
                >
                    {category}
                </span>

                {/* Title */}
                <h3
                    
                    className="text-lg font-semibold text-gray-800 mb-2"
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                   
                    className="text-gray-600 text-sm mb-4"
                >
                    {description.length > 100
                        ? `${description.slice(0, 100)}...`
                        : description}
                </p>

                {/* Price and Button */}
                <div className="flex justify-between items-center">
                    <p
                        
                        className="text-indigo-600 font-bold text-lg"
                    >
                        BDT {price.toFixed(2)}
                    </p>
                    <NavLink
                        to={`/services/${singleData._id}`}
                       
                        className="bg-indigo-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-indigo-700 transition"
                    >
                        View Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
