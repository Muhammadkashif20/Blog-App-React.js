import React from "react";

const BlogCard = ({ image, title, description, author }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <span className="text-xs text-gray-500">By {author}</span>
      </div>
    </div>
  );
};

export default BlogCard;
