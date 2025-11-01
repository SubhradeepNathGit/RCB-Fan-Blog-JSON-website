import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import baseurl from "../Api/baseurl";
import endpoint from "../Api/endpoint";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/blogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${baseurl + endpoint}/${id}`);
      setBlog(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load blog.");
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`${baseurl + endpoint}/${id}`);
        alert("Blog deleted successfully.");
        navigate("/AllBlogs");
      } catch (err) {
        alert("Error deleting blog.");
      }
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="blog-details-loading" data-aos="fade">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="blog-details-error" data-aos="fade">{error}</div>;
  }

  return (
  <div className="blog-details-container" >
    <p className="blog-details-meta" data-aos="slide-left"> 
      <strong>Posted by:</strong> {blog.username || "Unknown Author"} —{" "}
      <small>{blog.date}</small>
    </p>

    <h2 className="blog-details-title" data-aos="zoom-in">{blog.title}</h2>

    <hr data-aos="fade" />

    <div className="blog-details-content" data-aos="fade-down">
      {blog.blog}
    </div>

    <div className="blog-details-buttons">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <span className="arrow-icon">←</span>Back
      </button>

      <button
        className="edit-btn"
        onClick={() => navigate(`/edit/${blog._id || blog.id || id}`)}
      >
        Edit
      </button>

      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  </div>
);

};

export default BlogDetails;
