import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Simulate data fetching or page loading
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second data fetch

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [location.pathname]);

  // Set dynamic page titles
  useEffect(() => {
    const titles = {
      "/": "EchoBoard | Home",
      "/services": "EchoBoard | Services",
      "/add-service": "EchoBoard | Add Service",
      "/auth/login": "EchoBoard | Login",
      "/auth/register": "EchoBoard | Register",
      "/my-reviews/:email": "EchoBoard | My Reviews",
      "/my-service/:email": "EchoBoard | My Services",
      "/services/:id": "EchoBoard | Service Details",
    };
    document.title = titles[location.pathname] || "EchoBoard";
  }, [location.pathname]);

  const handleLogout = () => {
    setLoading(true);
    logOut()
      .then(() => {
        toast.success("Successfully logged out!");
        navigate("/");
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-indigo-50">
      <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
    );
  }

  return (
    <nav className="bg-blue-800 text-white w-full fixed top-0 left-0 right-0 z-50 shadow-lg">
      
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Left Side */}
        <div className="flex items-center">
          {/* Logo */}
          <NavLink to="/">
            <img src="/complaint.png" alt="EchoBoard" className="w-12 h-12" />
          </NavLink>
          <NavLink
            to="/"
            className="ml-3 text-2xl font-bold text-cyan-300 hover:text-cyan-400 transition duration-300"
          >
            EchoBoard
          </NavLink>
        </div>

        {/* Center - Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-300 font-bold"
                : "text-white hover:text-cyan-300 transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-300 font-bold"
                : "text-white hover:text-cyan-300 transition duration-300"
            }
          >
            Services
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/add-service"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-300 font-bold"
                    : "text-white hover:text-cyan-300 transition duration-300"
                }
              >
                Add Service
              </NavLink>
              <NavLink
                to={`/my-reviews/${user.email}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-300 font-bold"
                    : "text-white hover:text-cyan-300 transition duration-300"
                }
              >
                My Reviews
              </NavLink>
              <NavLink
                to={`my-service/${user.email}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-300 font-bold"
                    : "text-white hover:text-cyan-300 transition duration-300"
                }
              >
                My Services
              </NavLink>
              <NavLink
                to={`about-us`}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-300 font-bold"
                    : "text-white hover:text-cyan-300 transition duration-300"
                }
              >
                About Us
              </NavLink>
            </>
          )}
        </div>

        {/* Right Side - User Actions */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* User Avatar */}
              <div className="relative group">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                  src={user.photoURL || "/user.png"}
                  alt="User Avatar"
                  title={user.displayName || "User"}
                />
                <div className="absolute left-0 bottom-[-40px] w-max bg-white text-blue-800 text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName || "Guest"}
                </div>
              </div>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-white text-blue-800 rounded-full hover:bg-blue-800 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/auth/login"
                className="btn btn-sm bg-white text-blue-800 rounded-full hover:bg-blue-800 hover:text-white"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                className="btn btn-sm bg-white text-blue-800 rounded-full hover:bg-blue-800 hover:text-white"
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="lg:hidden">
          <div className="dropdown">
            <button
              tabIndex="0"
              className="btn btn-ghost text-white"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-50 w-52 rounded-box bg-white p-2 shadow text-blue-800"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink to="/add-service">Add Service</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/my-reviews/${user.email}`}>My Reviews</NavLink>
                  </li>
                  <li>
                    <NavLink to={`my-service/${user.email}`}>My Services</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
