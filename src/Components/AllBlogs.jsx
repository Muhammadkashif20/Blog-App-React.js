import React from "react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    image: "https://source.unsplash.com/800x600/?coding,developer",
    title: "Building a Blog App with React & Tailwind",
    description:
      "Learn how to design and develop a modern blog application using React.js and Tailwind CSS.",
    author: "Kashif Ahmed",
    date: "September 2025",

  },
  {
    image: "https://source.unsplash.com/800x600/?ui,design",
    title: "The Art of Clean UI Design",
    description:
      "Discover simple tricks to make your web designs stand out and feel more professional.",
    author: "Zeeshan Malik",
    date: "September 2025",

  },
  {
    image: "https://source.unsplash.com/800x600/?javascript,web",
    title: "Top 5 Modern JavaScript Frameworks",
    description:
      "Explore the top frameworks reshaping frontend development in 2025.",
    author: "Wajid Ullah",
    date: "September 2025",

  },
  {
    image: "https://source.unsplash.com/800x600/?blog,writer",
    title: "Content Writing for Developers",
    description:
      "Learn why writing blogs can improve your understanding and career as a developer.",
    author: "Kashif Ahmed",
    date: "September 2025",

  },
];

const AllBlogs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
         <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Explore Our <span className="text-indigo-600">Latest Blogs</span>
        </h2>
        {/* Short Description */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Dive into a collection of insightful and creative blogs written by developers, 
          designers, and tech enthusiasts — covering everything from code to creativity.
        </p>

        {/* Blogs Grid */}
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

export default AllBlogs;
