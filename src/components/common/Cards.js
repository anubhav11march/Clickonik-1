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
          <span className="card-category">Technology</span>
          <div className="card-div">
            <div className="card-heading">Lorem ipsum dolor sit</div>
           
          </div>
        </Col>
        <Col lg={3} className="card-col">
          <img src={Card} alt="scene1" className="card-img" />
          <span className="card-category">Sci-Fi</span>
          <div className="card-div">
            <div className="card-heading">Lorem ipsum dolor sit</div>
           
          </div>
        </Col>
        <Col lg={3} className="card-col">
          <img src={Card} alt="scene1" className="card-img" />
          <span className="card-category">Educational</span>
          <div className="card-div">
            <div className="card-heading">Lorem ipsum dolor sit</div>
           
          </div>
        </Col>
        <Col lg={3} className="card-col">
          <img src={Card} alt="scene1" className="card-img" />
          <span className="card-category">Kids</span>
          <div className="card-div">
            <div className="card-heading">Lorem ipsum dolor sit</div>
           
          </div>
        </Col>
      </Row>
     

      <Row style={{justifyContent:'center'}}>
        <Col lg={3} className="card-col">
          <img src={Card} alt="scene1" className="card-img" />
          <span className="card-category">Horror</span>
          <div className="card-div">
            <div className="card-heading">Lorem ipsum dolor sit</div>
           
          </div>
        </Col>
       
        <Col lg={3} className="card-col">
          <img src={Card} alt="scene1" className="card-img" />
          <span className="card-category">Drama</span>
          <div className="card-div">
            <div className="card-heading">Lorem ipsum dolor sit</div>
           
          </div>
        </Col>
        
        
      </Row>
 
    

    </Container>
  );
}

export default Cards;
