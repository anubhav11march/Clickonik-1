import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="footer-main">
      <Container>
        <Row className="footer-row">
          <Col md={5}>
            <div className="footer-div1">Logo</div>
          </Col>
          <Col md={3}>
            <div className="footer-div2">
              <h3>Quick Links</h3>
              <ul>
                <li onClick={() => handleClick("/home")}>Home</li>
                <li onClick={() => handleClick("/blogs")}>Blogs</li>
                <li onClick={() => handleClick("/categories")}>Categories</li>
                <li onClick={() => handleClick("/coupons")}>Coupons</li>
                <li onClick={() => handleClick("/contact")}>Contact Us</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-div3">
              <button
                className="footer-button"
                onClick={() => handleClick("/submit")}
              >
                Submit Blog
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
