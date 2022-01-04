import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MajorCards.css";
import MajorCard from "../../assets/images/majorCards.svg";

function MajorCards() {
  return (
    <Container className="major-main">
      <Row>
        <Col lg={6} className="major-col">
          <img src={MajorCard} alt="scene1" className="major-img" />
          <span className="major-category">Category</span>
          <div className="major-div">
            <div className="major-heading">Lorem ipsum dolor sit amet</div>
            <div className="major-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh
              ullamcorper nullam morbi eu fusce cursus. Felis commodo auctor
              tempus torto.
            </div>
          </div>
        </Col>
        <Col lg={6} className="major-col">
          <img src={MajorCard} alt="scene1" className="major-img" />
          <span className="major-category">Category</span>
          <div className="major-div">
            <div className="major-heading">Lorem ipsum dolor sit amet</div>
            <div className="major-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh
              ullamcorper nullam morbi eu fusce cursus. Felis commodo auctor
              tempus torto.
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MajorCards;
