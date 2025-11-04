import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Spin } from "antd";
import Footer from "./Footer";

const AllBlogs = () => {
  const [loading, setLoading] = useState(true);
  const storedData = localStorage.getItem("blogObj");
  const blogData = JSON.parse(storedData);
  console.log("blog-data=>", blogData);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  });
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Explore Our <span className="text-indigo-600">Latest Blogs</span>
          </h2>
          {/* Short Description */}
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Dive into a collection of insightful and creative blogs written by
            developers, designers, and tech enthusiasts — covering everything
            from code to creativity.
          </p>

          {/* Blogs Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {blogData?.map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden hover:-translate-y-2 border border-gray-100"
              >
                {/* Blog Image */}
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover"
                  />
                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {blog.category || "General"}
                  </span>
                </div>

                {/* Blog Content */}
                <div className="p-6 text-left">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Author + Date */}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      ✍️{" "}
                      <span className="font-medium text-gray-700">
                        {blog.author}
                      </span>
                    </span>
                    <span className="text-gray-400">{blog.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllBlogs;
