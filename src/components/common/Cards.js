import React from "react";
import "./Cards.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../assets/images/card.svg";

function Cards() {
  return (
    <Container className="card-main">
      <Row>
        <Col lg={3} className="card-col">
          <img src={Card} alt="scene1" className="card-img" />
          <span className="card-category">Category</span>
          <div className="card-div">
            <div className="card-heading">Lorem ipsum dolor sit</div>
            <div className="card-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh
              ullamcorper
            </div>
          </div>
        </Col>
        <Col lg={3} className="card-col">
          <img src={Card} alt="scene1" className="card-img" />
          <span className="card-category">Category</span>
          <div className="card-div">
            <div className="card-heading">Lorem ipsum dolor sit</div>
            <div className="card-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh
              ullamcorper
            </div>
          </div>
        </Col>
        <Col lg={3} className="card-col">
          <img src={Card} alt="scene1" className="card-img" />
          <span className="card-category">Category</span>
          <div className="card-div">
            <div className="card-heading">Lorem ipsum dolor sit</div>
            <div className="card-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh
              ullamcorper
            </div>
          </div>
        </Col>
        <Col lg={3} className="card-col">
          <img src={Card} alt="scene1" className="card-img" />
          <span className="card-category">Category</span>
          <div className="card-div">
            <div className="card-heading">Lorem ipsum dolor sit</div>
            <div className="card-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh
              ullamcorper
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
