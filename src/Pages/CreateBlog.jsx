import React, { useEffect, useState } from "react";
import axios from "axios";
import baseurl from "../API/baseUrl"; // e.g., http://localhost:3001/
import endpoint from "../API/endPoint"; // e.g., blogs
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/createBlog.css"; // Ensure you have this CSS file for styles

const CreateBlog = () => {
    const formapi = baseurl + endpoint;
    const [formData, setFormData] = useState({
        username: "",
        location: "",
        blog: "",
    });
    const [message, setMessage] = useState({ type: "", text: "" });
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

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
        setMessage({ type: "danger", text: "Username must be at least 3 characters long." });
    } else if (location.trim().length < 2) {
        setMessage({ type: "danger", text: "Please enter a valid location." });
    } else if (blog.trim().length < 10) {
        setMessage({ type: "danger", text: "Blog must be at least 10 characters long." });
    } else {
        // 👇 Capture current date and time from the machine
        const currentDateTime = new Date().toLocaleString(); // e.g., "26/5/2025, 3:47:15 pm"

        // 👇 Add date field to the submission data
        const dataToSubmit = {
            ...formData,
            date: currentDateTime,
        };

        axios.post(formapi, dataToSubmit)
            .then((response) => {
                console.log("Blog saved:", response.data);
                setMessage({ type: "success", text: "Blog created successfully!" });
                setTimeout(() => {
                    navigate("/AllBlogs");
                }, 1000);
            })
            .catch((error) => {
                console.error("Submission error:", error);
                setMessage({ type: "danger", text: "Something went wrong. Try again." });
            });
    }
};

    return (
    <>
        <div className="blog-background" />

        <div className="fullscreen-form-container" data-aos="zoom-in">
            <div className="form-card">
                <h3 className="text-center mb-4">Share your stories here</h3>

                {message.text && (
                    <Alert variant={message.type} onClose={() => setMessage({ type: "", text: "" })} dismissible>
                        {message.text}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Enter your name"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="location"
                            placeholder="Where are you from?"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBlog">
                        <Form.Label>Your Blog</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            name="blog"
                            placeholder="Write your thoughts about RCB here..."
                            value={formData.blog}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Button variant="danger" type="submit" className="w-100">
                        Submit Blog
                    </Button>
                </Form>
            </div>
        </div>
    </>
);

};

export default CreateBlog;
