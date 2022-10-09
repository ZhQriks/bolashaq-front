import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";

class NewsDetails extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div style={{ marginTop: "50px" }}>
          <BlogDetailsContent />
        </div>

        <Footer />
      </>
    );
  }
}

export default NewsDetails;
