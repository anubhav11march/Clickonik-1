import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import ContactImg from "../../assets/images/contact.svg";
import Navbarr from "../common/Navbarr";
import Footer from "../common/Footer";

function Contact() {
  return (
    <>
      <Navbarr />
      <Container className="contact-main">
        <Row>
          <Col lg={4} className="order-lg-2">
            <img src={ContactImg} alt="contact" className="contact-img" />
          </Col>
          <Col lg={8} className="order-lg-1">
            <div className="contact-form">
              <form>
                <input
                  type="text"
                  placeholder="Enter Name"
                  required
                  className="contact-input"
                />
                <input
                  type="text"
                  placeholder="Enter Email id"
                  required
                  className="contact-input"
                />
                <input
                  type="text"
                  placeholder="Enter Subject"
                  required
                  className="contact-input"
                />
                <textarea
                  rows="10"
                  placeholder="Message"
                  required
                  className="contact-input"
                />
                <button type="submit" className="contact-btn">
                  Submit
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
