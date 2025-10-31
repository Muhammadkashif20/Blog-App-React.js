import React from "react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    image: "https://source.unsplash.com/800x600/?coding,developer",
    title: "Mastering React Hooks",
    description: "Learn how to use React Hooks like a pro and build dynamic apps.",
    author: "Kashif Ahmed",
  },
  {
    image: "https://source.unsplash.com/800x600/?design,ui",
    title: "UI/UX Tips for Beginners",
    description: "Simple yet powerful design principles every developer should know.",
    author: "Zeeshan Malik",
  },
  {
    image: "https://source.unsplash.com/800x600/?javascript,web",
    title: "The Future of JavaScript",
    description: "Explore modern trends and frameworks shaping the web in 2025.",
    author: "Wajid Ullah",
  },
];

const BlogList = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Latest <span className="text-indigo-500">Blogs</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
