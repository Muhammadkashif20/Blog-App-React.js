import React, { useEffect, useState } from "react";
import AddBlog from "./Components/AddBlog";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AllBlogs from "./Components/AllBlogs";
import About from "./Components/About";
import { Spin } from "antd";
const App = () => {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div className="font-sans">
      <Header />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/add-blog" element={<AddBlog/>}></Route>
      <Route path="/all-blogs" element={<AllBlogs/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </div>
  );
};

export default App;
