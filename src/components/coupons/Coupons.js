import React from "react";
import "./Coupons.css";
import Shoes from "../../assets/images/shoes.svg";
import Flag from "../../assets/images/flag.svg";
import { Container, Row, Col } from "react-bootstrap";
import CouponCard from "../common/CouponCard";
import Navbarr from "../common/Navbarr";
import Footer from "../common/Footer";

function Coupons() {
  return (
    <>
      <Navbarr />
      <Container className="coupon-main">
        <div className="coupon-banner">
          <div>
            <div className="coupon-bh">
              Best Deals of 2021—all discounts in one place!
            </div>
            <div className="coupon-bsh">
              Best Deals everyday so collect all the best coupons and deals!
              You’ll find all of them here!
            </div>
          </div>
        </div>
        <div className="coupon-heading">
          Top <span>Recommendations</span>
        </div>
        <Row className="coupon-rmd">
          <Col lg={4}>
            <img src={Shoes} alt="rmd" className="coupon-img" />
            <div className="coupon-ch">Topic</div>
            <div className="coupon-cb">
              Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. Tellus
              pretium mauris, at blandit massa....more
            </div>
          </Col>
          <Col lg={4}>
            <img src={Shoes} alt="rmd" className="coupon-img" />
            <div className="coupon-ch">Topic</div>
            <div className="coupon-cb">
              Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. Tellus
              pretium mauris, at blandit massa....more
            </div>
          </Col>
          <Col lg={4}>
            <img src={Shoes} alt="rmd" className="coupon-img" />
            <div className="coupon-ch">Topic</div>
            <div className="coupon-cb">
              Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. Tellus
              pretium mauris, at blandit massa....more
            </div>
          </Col>
        </Row>
        <div className="coupon-heading">
          Selection of <span>the best 2021 offers</span>
        </div>
        <Row>
          <CouponCard />
         

        </Row>
        <div className="coupon-heading">
          Popular stores and brands you can
          <span> save money on with Clickonik</span>
        </div>
        <Row>
          <Col lg={4}>
            <div className="coupon-brand">Brand</div>
          </Col>
          <Col lg={4}>
            <div className="coupon-brand">Brand</div>
          </Col>
          <Col lg={4}>
            <div className="coupon-brand">Brand</div>
          </Col>
          <Col lg={4}>
            <div className="coupon-brand">Brand</div>
          </Col>
          <Col lg={4}>
            <div className="coupon-brand">Brand</div>
          </Col>
          <Col lg={4}>
            <div className="coupon-brand">Brand</div>
          </Col>
        </Row>
        <div className="coupon-heading">
          <span>Clickonik</span> helps people buy stuff cheaper
          <span> in XX countries</span> around the world!
        </div>
        <Row>
          <Col md={6} lg={3}>
            <div className="coupon-flag">
              <img src={Flag} alt="flag" />
              <span>United States</span>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="coupon-flag">
              <img src={Flag} alt="flag" />
              <span>United States</span>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="coupon-flag">
              <img src={Flag} alt="flag" />
              <span>United States</span>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="coupon-flag">
              <img src={Flag} alt="flag" />
              <span>United States</span>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="coupon-flag">
              <img src={Flag} alt="flag" />
              <span>United States</span>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="coupon-flag">
              <img src={Flag} alt="flag" />
              <span>United States</span>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="coupon-flag">
              <img src={Flag} alt="flag" />
              <span>United States</span>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="coupon-flag">
              <img src={Flag} alt="flag" />
              <span>United States</span>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Coupons;
