import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-gray-900 opacity-95 text-white shadow-md z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide hover:text-indigo-400 cursor-pointer">
          My<span className="text-indigo-500">Blogs</span>
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link
            to={"/"}
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to={"/all-blogs"}
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            Blogs
          </Link>
           <Link
            to={"/add-blog"}
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            Add Blogs
          </Link>
          <Link
            to={"/about"}
            className="hover:text-indigo-400 transition-colors duration-200"
          >
            About
          </Link>
        </nav>

        {/* Button */}
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
