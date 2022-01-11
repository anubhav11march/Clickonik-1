import React from "react";
import "./AdminCoupons.css";
import { Col, Row, Container } from "react-bootstrap";
import Brush from "../../assets/images/brush.svg";

const AdminCouponCard = () => {
  return (
    <Container>
      <Row lg={3} md={2}>
        <Col>
          <div className="cc-cards">
            <img src={Brush} alt="brush" />
            <div className="cc-cdh">
              Up to Rs.750+ Off SUGAR Cosmetics Black Friday Sale
            </div>
            <div className="cc-cdsh">
              Head over to the SUGAR Cosmetics website and score up to Rs.750
              off this Black Friday
            </div>
            <div className="web-font">
              <p className="text-visit">Visit Website</p>
              <p className="text-days">7 Days Left</p>
            </div>
            <div className="btn-edit-delete">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">delete</button>
            </div>
          </div>
        </Col>

        <Col>
          <div className="cc-cards">
            <img src={Brush} alt="brush" />
            <div className="cc-cdh">
              Up to Rs.750+ Off SUGAR Cosmetics Black Friday Sale
            </div>
            <div className="cc-cdsh">
              Head over to the SUGAR Cosmetics website and score up to Rs.750
              off this Black Friday
            </div>
            <div className="web-font">
              <p className="text-visit">Visit Website</p>
              <p className="text-days">7 Days Left</p>
            </div>
            <div className="btn-edit-delete">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">delete</button>
            </div>
          </div>
        </Col>
        <Col>
          <div className="cc-cards">
            <img src={Brush} alt="brush" />
            <div className="cc-cdh">
              Up to Rs.750+ Off SUGAR Cosmetics Black Friday Sale
            </div>
            <div className="cc-cdsh">
              Head over to the SUGAR Cosmetics website and score up to Rs.750
              off this Black Friday
            </div>
            <div className="web-font">
              <p className="text-visit">Visit Website</p>
              <p className="text-days">7 Days Left</p>
            </div>
            <div className="btn-edit-delete">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">delete</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminCouponCard;
