import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BlogList.css";
import ListImg from "../../assets/images/list.svg";
import { NavLink} from "react-router-dom";

const ListItem = () => {
  return (
    <Row className="list-row">
      <Col lg={2}>
        <img src={ListImg} alt="list" className="list-img" />
      </Col>
      <Col lg={10}>
      <NavLink  className="navlink-css"to="/particular-blog">
        
        <div className="list-content">
          <div className="list-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            amet facilisis elit
          </div>
          <div className="list-subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nibh
            ullamcorper nullam morbi eu fusce cursus. Felis commodo auctor
            tempus torto.
          </div>
        </div>
            </NavLink>
      </Col>
    </Row>
  );
};

function BlogList() {
  return (
    <Container className="list-main">
      <div className="list-explore">
        Explore from <span>India</span>
      </div>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Container>
  );
}

export default BlogList;
