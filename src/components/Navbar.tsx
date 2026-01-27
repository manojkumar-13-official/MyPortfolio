import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative top-10 z-10 flex items-center justify-between h-[15vh] w-[90%] ml-[5%] text-white rounded-2xl px-5 sm:px-7 bg-gray-950">
      {/* Logo */}
      <h2 className="text-2xl sm:text-3xl font-bold">
        <a href="/">
          My<span className="text-purple-600">Folio</span>
        </a>
      </h2>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-8 lg:gap-12 text-sm lg:text-lg font-semibold">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `pb-1 transition-colors ${
                isActive
                  ? "text-purple-600 underline underline-offset-8"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `pb-1 transition-colors ${
                isActive
                  ? "text-purple-600 underline underline-offset-8"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/project"}
            className={({ isActive }) =>
              `pb-1 transition-colors ${
                isActive
                  ? "text-purple-600 underline underline-offset-8"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Project
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `pb-1 transition-colors ${
                isActive
                  ? "text-purple-600 underline underline-offset-8"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </ul>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile/Tablet Menu */}
      <div
        className={`absolute top-16 left-0 right-0 bg-black border border-purple-600 rounded-lg mx-5 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col text-sm font-semibold">
          <NavLink
            to={"/"}
            onClick={closeMenu}
            className={({ isActive }) =>
              `px-5 py-3 border-b border-gray-700 transition-colors ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:bg-gray-900 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            onClick={closeMenu}
            className={({ isActive }) =>
              `px-5 py-3 border-b border-gray-700 transition-colors ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:bg-gray-900 hover:text-white"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/project"}
            onClick={closeMenu}
            className={({ isActive }) =>
              `px-5 py-3 border-b border-gray-700 transition-colors ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:bg-gray-900 hover:text-white"
              }`
            }
          >
            Project
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={closeMenu}
            className={({ isActive }) =>
              `px-5 py-3 transition-colors ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:bg-gray-900 hover:text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
