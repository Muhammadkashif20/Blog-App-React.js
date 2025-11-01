import React from "react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    image: "https://source.unsplash.com/800x600/?coding,developer",
    title: "Mastering React Hooks",
    description:
      "Unlock the full power of React Hooks and create cleaner, more efficient components.",
    author: "Kashif Ahmed",
    date: "October 2025",
  },
  {
    image: "https://source.unsplash.com/800x600/?design,ui",
    title: "UI/UX Tips for Beginners",
    description:
      "Discover simple yet impactful design rules to make your interfaces stand out.",
    author: "Zeeshan Malik",
    date: "September 2025",
  },
  {
    image: "https://source.unsplash.com/800x600/?javascript,web",
    title: "The Future of JavaScript",
    description:
      "Explore upcoming features, tools, and frameworks redefining web development in 2025.",
    author: "Wajid Ullah",
    date: "August 2025",
  },
];

const BlogList = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Explore Our <span className="text-indigo-600">Latest Blogs</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Stay updated with modern web trends, design ideas, and coding
          techniques crafted by our community experts.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden hover:-translate-y-2"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {blog.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>✍️ {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
