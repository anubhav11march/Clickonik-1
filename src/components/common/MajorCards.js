import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "./MajorCards.css";
import Banner1 from "../../assets/images/adbanner1.png";
import Banner3 from "../../assets/images/adbanner3.png";
function MajorCards() {
  return (
  
     <Container>
  <Row>
<Carousel prevIcon="" nextIcon="" swipe={true} pause={false}>
      <Carousel.Item interval={4000}>
        <img
          className="major-img"
          src={Banner1}
          alt="First slide"
          title="First Banner"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="major-img"
          src={Banner3}
          alt="Second slide"
          title="Second Banner"
        />
      </Carousel.Item>

      {/* <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 h-100"
          src={Banner2}
          alt="Fourth slide"
          title="Fourth Banner"
        />
      </Carousel.Item> */}
    </Carousel>
    </Row>

    {/* //   <Row>
    //     <Col lg={6} className="major-col">
    //       <img src={MajorCard} alt="scene1" className="major-img" />
        

       
         
    //     </Col>
    //   </Row> */}
    </Container>

  );
}

export default MajorCards;
