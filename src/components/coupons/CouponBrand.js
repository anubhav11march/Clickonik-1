import React, { useState, useEffect } from "react";
import "./CouponBrand.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CouponCard from "../common/CouponCard";
import Flag from "../../assets/images/flag.svg";
import {
  Col,
  Container,
  Row,
  Modal,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Navbarr from "../common/Navbarr";
import Footer from "../common/Footer";
import { useLocation } from "react-router-dom";
import axios from "../../utils/axios";
function CouponBrand() {
  const [data, setData] = useState();
  const [getCoupon, setGetCoupon] = useState();
  const [show, setShow] = useState(false);
  const [updatestate, setState] = useState(false);
  const { state } = useLocation();
  const { Brand } = state;
  const GetData = () => {
    try {
      axios
        .get(`api/user/coupon?couponIndex=0&brand=${Brand}`)
        .then((response) => {
          setData(response.data.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetData();
  }, []);
  const CopyText = (e) => {
    navigator.clipboard.writeText(e);
    toast.success(
      <div className="Toast-success-copy">Coupon Copied To ClipBoard!!</div>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  const handleShow = (e) => {
    try {
      axios.get(`api/user/coupon/${e}`).then((response) => {
        setGetCoupon(response.data.data);
      });
    } catch (err) {
      console.log(err);
    }
    setState(true);
  };

  useEffect(() => {
    if (updatestate === true) {
      setShow(true);
      show === true ? setShow(false) : setShow(true);
    }
    setState(false);
  }, [updatestate]);

  return (
    <>
      <Navbarr />
      <Container className="Brand-main">
        <Row>
          <Col lg={4}>
            <div className="brand-left-1-cards">{Brand}</div>

            <div className="brand-left-3-cards">
              Check out offers in other countries
              <div className="brand-left-3-flag">
                <Row>
                  <Col>
                    <div className="brand-coupon-flag">
                      <img src={Flag} alt="flag" />
                      <span>USA</span>
                    </div>
                  </Col>
                  <Col>
                    <div className="brand-coupon-flag">
                      <img src={Flag} alt="flag" />
                      <span>USA</span>
                    </div>
                  </Col>
                  <Col>
                    <div className="brand-coupon-flag">
                      <img src={Flag} alt="flag" />
                      <span>USA</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <h2 className="brand-right-1-cards">
              <b>
                {Brand} discount offers and discount codes &nbsp; December 2021
              </b>
              <br />
              Find the latest {Brand} discount codes and discount coupons here.
              Buy for less!
            </h2>
            {data?.flat()?.map((data, id) => {
              return (
                <>
                  <div className="brand-right-2-cards" key={id}>
                    <div className="brand-right-2-header-grid">
                      <div className="brand-right-2-header-item-0">
                        <div className="brand-right-2-header-box">
                          <div className="brand-right-2_coupon_code_">
                            {data?.deal.slice(0, 3)}
                          </div>
                          <div className="brand-right-2-header-inner-border">
                            CODE
                          </div>
                        </div>
                      </div>
                      <div className="brand-right-2-header-item-1">
                        <b>{data?.title.slice(0, 55)}</b>
                        <br />
                        <p className="brand-right-2-para">
                          {data?.bio.slice(0, 200)}
                        </p>
                      </div>

                      <div className="brand-deal-btn">
                        <button
                          className="brand-deal-coupon-btn"
                          onClick={() => handleShow(data._id)}
                        >
                          Get the deal
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Col>
          <Modal
            show={show}
            onHide={handleShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal_body"
            dialogClassName="modal-90w"
          >
            <Modal.Header>
              <Modal.Title>
                <div className="Modal-header-grid">
                  <div className="Modal-header-item-0">
                    <div className="Modal-header-box">
                      <div className="modal_coupon_code_">
                        {getCoupon?.deal.slice(0, 3)}
                      </div>
                      <div className="Modal-header-inner-border"> CODE</div>
                    </div>
                  </div>
                  <div className="Modal-header-item-1">
                    <b>{getCoupon?.title.slice(0, 55)}</b>
                    <br />
                    {getCoupon?.bio.slice(0, 200)}

                    <br />
                    <div className="verify-modal">Verified</div>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="Modal-Body-main">
                <div className="Modal-Body-goto">
                  Go to{" "}
                  <a
                    href={getCoupon?.websiteLink}
                    style={{ textDecoration: "none" }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {getCoupon?.brandName}&nbsp;
                  </a>
                  and paste the code at checkout
                </div>
                <div className="Modal-Body-Form-control">
                  <InputGroup className="Modal-Body-input">
                    <FormControl
                      className="Modal-Body-form"
                      value={getCoupon?.couponCode}
                      style={{ fontWeight: "bold", fontSize: "14px" }}
                    />
                    <Button
                      size="lg"
                      variant="dark"
                      className="modal-body-copy"
                      onClick={() => CopyText(getCoupon?.couponCode)}
                      style={{ boxShadow: "none", width: "80px" }}
                    >
                      COPY
                    </Button>
                    <ToastContainer />
                  </InputGroup>
                </div>
                <div className="Modal-Body-save">
                  <button className="Modal-Body-Website">
                    <a
                      href={getCoupon?.websiteLink}
                      style={{ textDecoration: "none", color: "white" }}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {" "}
                      Go to {getCoupon?.brandName} Website
                    </a>
                  </button>
                </div>
              </div>
            </Modal.Body>
            <div className="modal-footer-main">
              <Modal.Footer>
                <h4>Use the code and let us know if it works</h4>

                <Button variant="success" size="lg" onClick={handleShow}>
                  Yes
                </Button>
                <Button variant="danger" size="lg" onClick={handleShow}>
                  No
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </Row>
        <Row>
          <div className="Row2-brand-similarcard">
            <div className="similarpromo-card-brand">
              Similar <a style={{ color: "#4468e2" }}>Promo Codes</a>
            </div>

            <CouponCard />
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default CouponBrand;