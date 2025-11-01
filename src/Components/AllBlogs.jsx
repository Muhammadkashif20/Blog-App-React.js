import React from "react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    image: "https://source.unsplash.com/800x600/?coding,developer",
    title: "Building a Blog App with React & Tailwind",
    description:
      "Learn how to design and develop a modern blog application using React.js and Tailwind CSS.",
    author: "Kashif Ahmed",
  },
  {
    image: "https://source.unsplash.com/800x600/?ui,design",
    title: "The Art of Clean UI Design",
    description:
      "Discover simple tricks to make your web designs stand out and feel more professional.",
    author: "Zeeshan Malik",
  },
  {
    image: "https://source.unsplash.com/800x600/?javascript,web",
    title: "Top 5 Modern JavaScript Frameworks",
    description:
      "Explore the top frameworks reshaping frontend development in 2025.",
    author: "Wajid Ullah",
  },
  {
    image: "https://source.unsplash.com/800x600/?blog,writer",
    title: "Content Writing for Developers",
    description:
      "Learn why writing blogs can improve your understanding and career as a developer.",
    author: "Kashif Ahmed",
  },
];

const AddBlog = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          All <span className="text-indigo-500">Blogs</span>
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

export default AddBlog;
