import React from 'react'
import Hero from "./Hero";
import BlogList from "./BlogList";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
         {/* Landing Page */}
      <Hero />
      <BlogList />
      <Footer />
    </div>
  )
}

export default Home
