import React, { useEffect, useState } from "react";
import { message, Spin } from "antd";
import Footer from "./Footer";

const AddBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogTitle, setBlogTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  let blogHeading = blogTitle;
  let blogDesc = description;
  let blogImg = imageUrl;
  let blogCategory = category;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <Spin size="large" />
      </div>
    );
  }

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
    console.log("blog-author=>", author);
  };

  const handleTitle = (e) => {
    setBlogTitle(e.target.value);
    console.log("blog-title=>", blogTitle);
  };

  const handleDesc = (e) => {
    setDescription(e.target.value);
    console.log("blog-desc=>", description);
  };

  const handleImg = (e) => {
    setImageUrl(e.target.value);
    console.log("blog-img=>", imageUrl);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    console.log("blog-category=>", category);
  };

  // Funtionality to handle form submission
  let today=new Date();
  let NewDate=`${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;

  const blogObj = {
    title: blogHeading,
    description: blogDesc,
    image: blogImg,
    category: blogCategory,
    date: NewDate,
    author:author
  };

  const handleSubmit = () => {
    if(!blogHeading || !blogDesc || !blogImg || !blogCategory || !author){
      message.error("All fields are required!");
      return;
    }
    console.log("BlogObject=>", blogObj);

    const getBlogData = JSON.parse(localStorage.getItem("blogObj"));
    let newData = getBlogData.push(blogObj);

    const setBlogData = localStorage.setItem(
      "blogObj",
      JSON.stringify(getBlogData)
    );
    console.log("blog-data=>", getBlogData);
    // Clear Input's

    setBlogTitle("");
    setDescription("");
    setImageUrl("");
    setCategory("");
    setAuthor("");


  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 py-16 px-6 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-3xl border border-gray-200">
          {/* Header */}
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
            📝 Create Your <span className="text-indigo-600">Blog Post</span>
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Share your thoughts, inspire others, and make your voice heard.
          </p>

          {/* Form */}
          <form className="space-y-8">
             {/* Author Name */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Author Name
              </label>
              <input
                type="text"
                onChange={handleAuthor}
                required
                placeholder="Enter author name..."
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
              />
            </div>

            {/* Blog Title */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Blog Title
              </label>
              <input
                type="text"
                onChange={handleTitle}
                required
                placeholder="Enter your captivating blog title..."
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
              />
            </div>

            {/* Blog Description */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Description
              </label>
              <textarea
                rows="6"
                onChange={handleDesc}
                required
                placeholder="Write your amazing story here..."
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition resize-none"
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Blog Image URL
              </label>
              <input
                type="url"
                onChange={handleImg}
                required
                placeholder="Paste your image URL here (e.g., https://example.com/image.jpg)"
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
              />
              <p className="text-gray-400 text-sm mt-2">
                💡 Tip: Use Unsplash or Pexels for beautiful free images.
              </p>
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Category
              </label>
              <select
                onChange={handleCategory}
                required
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="design">Design</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="career">Career</option>
                <option value="travel">Travel</option>
              </select>
            </div>

            {/* Publish Button */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                Publish Blog 🚀
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AddBlog;
