import { Spin } from "antd";
import React, { useEffect, useState } from "react";
const About = () => {
    const [loading , setLoading]=useState(true);
  useEffect(()=>{
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  })
      if(loading){
      return (
        <div className="flex items-center justify-center h-screen bg-white">
          <Spin size="large" />
        </div>  
      );
    }
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl bg-white shadow-xl rounded-2xl p-10 md:p-16">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          👋 About <span className="text-indigo-500">Our Blog</span>
        </h2>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Welcome to our blog — a space where creativity meets knowledge. We
          share stories, ideas, and insights from around the world to inspire
          curious minds like yours. Whether it’s tech, lifestyle, travel, or
          design — we believe every story has the power to make an impact.
        </p>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-277.jpg"
              alt="Our Mission"
              className="w-56 h-56 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower readers with authentic content that inspires, educates,
              and sparks meaningful conversations.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg"
              alt="Our Team"
              className="w-56 h-56 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Team
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A group of passionate writers, designers, and developers working
              together to bring creative thoughts to life.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-10"></div>

        {/* Vision Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision 🌍</h3>
          <p className="text-gray-600 leading-relaxed">
            We aim to create a digital space where ideas flow freely and
            knowledge knows no boundaries. Through our blogs, we want to connect
            dreamers, thinkers, and doers from every corner of the world.
          </p>
        </div>

        {/* Join Us Section */}
        <div className="text-center mt-12">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer">
            Join Our Community 🚀
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
