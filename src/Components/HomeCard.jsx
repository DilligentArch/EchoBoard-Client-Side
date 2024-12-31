import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const MotionNavLink = motion(NavLink);

const HomeCard = ({ singleData }) => {
    const { image, title, description, category, price } = singleData;

    // Variants for the card container
    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-shadow duration-300"
        >
            {/* Image with animation */}
            <motion.img
                src={image}
                alt={title}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-36 h-36 mx-auto my-auto"
            />

            {/* Content */}
            <div className="p-4">
                {/* Category */}
                <motion.span
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full mb-2"
                >
                    {category}
                </motion.span>

                {/* Title */}
                <motion.h3
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg font-semibold text-gray-800 mb-2"
                >
                    {title}
                </motion.h3>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-600 text-sm mb-4"
                >
                    {description.length > 100
                        ? `${description.slice(0, 100)}...`
                        : description}
                </motion.p>

                {/* Price and Button */}
                <div className="flex justify-between items-center">
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-indigo-600 font-bold text-lg"
                    >
                        BDT {price.toFixed(2)}
                    </motion.p>
                    <MotionNavLink
                        to={`/services/${singleData._id}`}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-indigo-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-indigo-700 transition"
                    >
                        View Details
                    </MotionNavLink>
                </div>
            </div>
        </motion.div>
    );
};

export default HomeCard;
