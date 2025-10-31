import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Inspiring <span className="text-indigo-500">Stories</span> & Ideas
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          A modern blogging platform where creativity meets clarity.  
          Explore trending articles from top creators every day.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-medium transition-all">
          Start Reading
        </button>
      </div>
    </section>
  );
};

export default Hero;
