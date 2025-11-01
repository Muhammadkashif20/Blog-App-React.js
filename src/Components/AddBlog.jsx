import React from "react";

const AddBlog = () => {
  return (
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
          {/* Blog Title */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Blog Title
            </label>
            <input
              type="text"
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
              placeholder="Write your amazing story here..."
              className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition resize-none"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Blog Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-8 hover:border-indigo-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-400 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 16l5-5m0 0l5 5m-5-5v12m6-10a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-500">Click to upload or drag an image here</p>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Category
            </label>
            <select className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition">
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
              type="button"
              className="px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Publish Blog 🚀
            </button>
          </div>
        </form>

        {/* Preview Section */}
        <div className="mt-14 border-t pt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 text-center">
            Live Preview ✨
          </h3>
          <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
            <h4 className="text-xl font-bold text-indigo-600 mb-2">
              Sample Blog Title
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae lorem vel libero aliquet ultricies. Integer tincidunt
              iaculis mi, sed eleifend justo.
            </p>
            <img
              src="https://via.placeholder.com/600x300"
              alt="Preview"
              className="rounded-xl w-full h-64 object-cover shadow-md"
            />
            <p className="mt-3 text-sm text-gray-500 text-right">
              Category: <span className="font-medium">Technology</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBlog;
