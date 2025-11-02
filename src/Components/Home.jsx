import React, { useEffect } from 'react'
import Hero from "./Hero";
import BlogList from "./BlogList";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
            {
        useEffect(()=>{
          console.log("Blog App Loaded");
        },[])
      }
      <Hero />
      <BlogList />
      <Footer />
    </div>
  )
}

export default Home
