import React, { useState, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    toast.success("Successfully logged out!");
    logOut();
    navigate("/");
  };

  const handleNavLinkClick = () => {
    setIsLoading(true);
  };

  // if (isLoading || loading) {
  //   return (
  //     <div className="flex min-h-screen justify-center items-center">
  //       <span className="loading loading-bars loading-lg"></span>
  //     </div>
  //   );
  // }

  return (
    <nav className="navbar bg-indigo-600 text-white max-w-screen-2xl mx-auto shadow-md">
      <Toaster />
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex="0"
            className="btn btn-ghost lg:hidden"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-white p-2 shadow text-indigo-600"
          >
            <li>
              <NavLink to="/" onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleNavLinkClick}>
                Services
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/add-service" onClick={handleNavLinkClick}>
                    Add Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-reviews" onClick={handleNavLinkClick}>
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink   to={`my-services/${user.email}`} onClick={handleNavLinkClick}>
                    My Services
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-2xl font-bold text-white"
        >
          EchoBoard
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold"
                  : "text-white hover:text-yellow-300"
              }
              onClick={handleNavLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold"
                  : "text-white hover:text-yellow-300"
              }
              onClick={handleNavLinkClick}
            >
              Services
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/add-service"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-bold"
                      : "text-white hover:text-yellow-300"
                  }
                  onClick={handleNavLinkClick}
                >
                  Add Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-reviews"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-bold"
                      : "text-white hover:text-yellow-300"
                  }
                  onClick={handleNavLinkClick}
                >
                  My Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`my-service/${user.email}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-bold"
                      : "text-white hover:text-yellow-300"
                  }
                  onClick={handleNavLinkClick}
                >
                  My Services
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        {user ? (
          <>
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                src={user.photoURL || "/user.png"}
                alt="User Avatar"
                title={user.displayName || "User"}
              />
              <div className="absolute left-0 bottom-[-40px] w-max bg-white text-indigo-600 text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user.displayName || "Guest"}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-white text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/auth/login"
              className="btn btn-sm bg-white text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className="btn btn-sm bg-white text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
