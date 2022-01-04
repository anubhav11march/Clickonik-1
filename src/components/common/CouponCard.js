import React from "react";
import "./CouponCard.css";
import { Col } from "react-bootstrap";
import Brush from "../../assets/images/brush.svg";

function CouponCard() {
  return (
    <Col lg={4}>
      <div className="cc-cards">
        <img src={Brush} alt="brush" />
        <div className="cc-cdh">
          Up to Rs.750+ Off SUGAR Cosmetics Black Friday Sale
        </div>
        <div className="cc-cdsh">
          Head over to the SUGAR Cosmetics website and score up to Rs.750 off
          this Black Friday
        </div>
        <button className="cc-btn">Get the deal</button>
      </div>
    </Col>
  );
}

export default CouponCard;
