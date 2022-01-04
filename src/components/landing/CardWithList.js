import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CardWithList.css";
import CardWithList1 from "../../assets/images/cardWithList1.svg";
import CardWithList2 from "../../assets/images/cardWithList2.svg";

const Item = () => {
  return (
    <Row className="item-row">
      <Col lg={3}>
        <img src={CardWithList2} alt="list" className="item-img" />
      </Col>
      <Col lg={9}>
        <div className="item-content">
          <div className="item-heading">Lorem ipsum dolor sit amet</div>
          <div className="item-subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </Col>
    </Row>
  );
};

function CardWithList() {
  return (
    <Container className="cwl-main">
      <Row>
        <Col lg={7} className="cwl-col">
          <img src={CardWithList1} alt="scene1" className="cwl-img" />
          <div className="cwl-div">
            <div className="cwl-heading">Lorem ipsum dolor sit amet</div>
            <div className="cwl-subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh
              ullamcorper nullam morbi eu fusce cursus. Felis commodo auctor
              tempus torto.
            </div>
          </div>
        </Col>
        <Col lg={5}>
          <Item />
          <Item />
          <Item />
          <Item />
        </Col>
      </Row>
    </Container>
  );
}

export default CardWithList;
