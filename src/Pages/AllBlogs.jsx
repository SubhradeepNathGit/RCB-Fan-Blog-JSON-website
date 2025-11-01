import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import baseurl from "../API/baseUrl";
import endpoint from "../API/endPoint";
import {
  Container,
  Card,
  Button,
  Dropdown,
  Row,
  Col,
  Spinner,
  Alert,
} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/allBlogs.css";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(baseurl + endpoint);
      const data = response.data;
      const reversedData = [...data].reverse(); // ✅ Fix: reverse copy once
      setBlogs(reversedData);
      setFilteredBlogs(reversedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setMessage("Failed to load blogs.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    AOS.init({ duration: 800 });
  }, []);

  const handleFilter = (type) => {
    setSearchTerm("");
    switch (type) {
      case "recent":
        setFilteredBlogs([...blogs]);
        break;
      case "old":
        setFilteredBlogs([...blogs].sort((a, b) => new Date(a.date) - new Date(b.date)));
        break;
      case "short":
        setFilteredBlogs([...blogs].filter((b) => b.blog.length <= 300));
        break;
      case "long":
        setFilteredBlogs([...blogs].filter((b) => b.blog.length > 300));
        break;
      default:
        setFilteredBlogs(blogs);
    }
  };

  const handleSearch = (input = searchTerm) => {
    if (input.trim() === "") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) =>
        blog.username.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <Container fluid className="all-blogs-container mt-4 px-3">
      <Row>
        {/* Sidebar Filter - hidden on small screens */}
        <Col md={3} lg={2} className="d-none d-md-block filter-sidebar p-3">
          <h5>For you</h5>
          <Dropdown onSelect={handleFilter}>
            <Dropdown.Toggle variant="dark" className="w-100">
              Filter Options
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="recent">Most Recent</Dropdown.Item>
              <Dropdown.Item eventKey="old">Older</Dropdown.Item>
              <Dropdown.Item eventKey="short">Short Blogs</Dropdown.Item>
              <Dropdown.Item eventKey="long">Long Blogs</Dropdown.Item>
              <Dropdown.Item eventKey="all">Show All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Main Content */}
        <Col xs={12} md={9} lg={10}>
          {/* Search Bar */}
          <div
            className="d-flex gap-2 mb-3"
            style={{
              justifyContent: "flex-end",
              width: "31.5%",
              marginLeft: "auto",
              minWidth: "250px"
            }}
          >
            <input
              type="text"
              placeholder="Search by username"
              style={{ color: "whitesmoke" }}
              className="form-control form-control-sm search-input"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button
              variant="danger"
              size="sm"
              className="search-button"
              onClick={() => handleSearch()}
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>

          {/* Blog Cards */}
          {loading ? (
            <div className="d-flex justify-content-center mt-5">
              <Spinner animation="border" variant="danger" />
            </div>
          ) : message ? (
            <Alert variant="danger">{message}</Alert>
          ) : filteredBlogs.length === 0 ? (
            <p>No blogs found.</p>
          ) : (
            <Row className="g-4">
              {filteredBlogs.map((blog, index) => (
                <Col xs={12} md={6} lg={4} key={index} data-aos="fade-up">
                  <Card className="shadow-lg border-0 blog-card h-100">
                    <Card.Body>
                      <Card.Title className="fw-bold">{blog.username}</Card.Title>
                      <Card.Subtitle className="mb-2 text-white-50">
                        {blog.location} — <small>{blog.date}</small>
                      </Card.Subtitle>
                      <Card.Text>
                        {blog.blog && blog.blog.length > 100
                          ? blog.blog.slice(0, 100) + "..."
                          : blog.blog || "No blog content available."}
                      </Card.Text>
                      <div className="d-flex justify-content-start mt-3">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => navigate(`/BlogDetails/${blog.id}`)}
                        >
                          Read More
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AllBlogs;
