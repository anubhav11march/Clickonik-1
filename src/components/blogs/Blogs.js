import React from "react";
import "./Blogs.css";
import BlogList from "../common/BlogList";
import Cards from "../common/Cards";
import MajorCards from "../common/MajorCards";
import Navbarr from "../common/Navbarr";
import Footer from "../common/Footer";

function Blogs() {
  return (
    <>
      <Navbarr />
      <div className="blogs-main">
        <MajorCards />
        <BlogList />
        <Cards />
        <BlogList />
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
