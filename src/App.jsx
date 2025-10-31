import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import AddBlog from "./components/AddBlog";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="font-sans">
      {/* Landing Page */}
      <Header />
      <Hero />
      <BlogList />
      <Footer />
    <Routes>
      <Route path="/home" element={<App/>}></Route>
      <Route path="/add-blog" element={<AddBlog/>}></Route>
    </Routes>
    </div>
  );
};

export default App;
