import React from "react";
import AddBlog from "./components/AddBlog";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AllBlogs from "./Components/AllBlogs";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/add-blog" element={<AddBlog/>}></Route>
      <Route path="/all-blogs" element={<AllBlogs/>}></Route>
    </Routes>
    </div>
  );
};

export default App;
