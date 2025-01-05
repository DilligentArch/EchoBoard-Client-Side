import React, { useContext } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Footer = () => {
   const { user } = useContext(AuthContext);
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Logo and Description */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-white">EchoBoard</h2>
          <p>
            EchoBoard is your trusted platform for discovering and sharing 
            reliable service reviews. Join us in building a community rooted in 
            transparency and trust.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col space-y-4 text-center">
          <h3 className="text-xl font-semibold text-white">Explore</h3>
          <ul className="space-y-2 ">
            <li>
              <a href="/" className="hover:text-cyan-300">Home</a>
            </li>
            <li>
              <a href="/services" className="hover:text-cyan-300">Services</a>
            </li>
            <li>
              <a href="/add-service" className="hover:text-cyan-300">Add Service</a>
            </li>
            <li>
              <a href={`/my-reviews/${user?.email}`} className="hover:text-cyan-300">My Reviews</a>
            </li>
            <li>
              <a href= {`/my-service/${user?.email}`} className="hover:text-cyan-300">My Services</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col space-y-4 items-center">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} EchoBoard. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
