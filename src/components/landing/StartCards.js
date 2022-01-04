import React from "react";
import "./StartCards.css";
import { Container, Row, Col } from "react-bootstrap";
import start1 from "../../assets/images/start1.svg";
import start2 from "../../assets/images/start2.svg";
import start3 from "../../assets/images/start3.svg";
import start4 from "../../assets/images/start4.svg";
import start5 from "../../assets/images/start5.svg";

function StartCards() {
  return (
    <Container className="start-main">
      <Row>
        <Col lg={7} className="start-col">
          <img src={start1} alt="scene1" className="start-img1" />
          <div className="start-div">
            <span className="start-category">Category</span>
            <div className="start-heading">Lorem ipsum dolor sit amet</div>
            <div className="start-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh
              ullamcorper nullam morbi eu fusce cursus. Felis commodo auctor
              tempus torto.
            </div>
          </div>
        </Col>
        <Col lg={5}>
          <Row>
            <Col md={6} className="start-col">
              <img src={start2} alt="scene2" className="start-img" />
              <div className="start-sdiv">
                <span className="start-scategory">Category</span>
                <div className="start-sheading">Lorem ipsum dolor sit</div>
                <div className="start-ssubheading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  nibh ullamcorper
                </div>
              </div>
            </Col>
            <Col md={6} className="start-col">
              <img src={start3} alt="scene3" className="start-img" />
              <div className="start-sdiv">
                <span className="start-scategory">Category</span>
                <div className="start-sheading">Lorem ipsum dolor sit </div>
                <div className="start-ssubheading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  nibh ullamcorper
                </div>
              </div>
            </Col>
            <Col md={6} className="start-col">
              <img src={start4} alt="scene4" className="start-img" />
              <div className="start-sdiv">
                <span className="start-scategory">Category</span>
                <div className="start-sheading">Lorem ipsum dolor sit </div>
                <div className="start-ssubheading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  nibh ullamcorper
                </div>
              </div>
            </Col>
            <Col md={6} className="start-col">
              <img src={start5} alt="scene5" className="start-img" />
              <div className="start-sdiv">
                <span className="start-scategory">Category</span>  
                <div className="start-sheading">Lorem ipsum dolor sit </div>
                <div className="start-ssubheading">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  nibh ullamcorper
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default StartCards;
