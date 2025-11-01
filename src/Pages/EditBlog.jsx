import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/createBlog.css";
import baseurl from "../Api/baseurl";
import endpoint from "../Api/endpoint";

const EditBlog = () => {
  const { id } = useParams(); // Get blog ID from URL
  const navigate = useNavigate();
  const apiurl = `${baseurl}${endpoint}/${id}`;

  const [formData, setFormData] = useState({
    username: "",
    location: "",
    blog: "",
  });

  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    AOS.init({ duration: 800 });

    // Fetch blog data
    axios
      .get(apiurl)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setMessage({ type: "danger", text: "Failed to load blog details." });
      });
  }, [apiurl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, location, blog } = formData;

    if (username.trim().length < 3) {
      setMessage({ type: "danger", text: "Username must be at least 3 characters." });
    } else if (location.trim().length < 2) {
      setMessage({ type: "danger", text: "Enter a valid location." });
    } else if (blog.trim().length < 10) {
      setMessage({ type: "danger", text: "Blog must be at least 10 characters long." });
    } else {
      axios
        .put(apiurl, formData)
        .then(() => {
          setMessage({ type: "success", text: "Blog updated successfully!" });
          setTimeout(() => {
            navigate("/AllBlogs"); // Navigate to AllBlogs page after update
          }, 1000);
        })
        .catch(() => {
          setMessage({ type: "danger", text: "Failed to update blog." });
        });
    }
  };

  return (
    <>
      <div className="blog-background" />

      <div className="fullscreen-form-container" data-aos="zoom-in">
        <div className="form-card">
          <h3 className="text-center mb-4">Edit Your Story</h3>

          {message.text && (
            <Alert
              variant={message.type}
              onClose={() => setMessage({ type: "", text: "" })}
              dismissible
            >
              {message.text}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBlog">
              <Form.Label>Your Blog</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="blog"
                value={formData.blog}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              Update Blog
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default EditBlog;
