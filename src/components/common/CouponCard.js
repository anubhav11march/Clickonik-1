import React, { useState, useEffect } from "react";
import "./CouponCard.css";
import {
  Col,
  Container,
  Row,
  Modal,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Brush from "../../assets/images/brush.svg";
import axios from "../../utils/axios";
function CouponCard() {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const GetData = () => {
    try {
      axios
        .get(`api/user/coupon?couponIndex=0&isExpired=false`)
        .then((response) => {
          setData([response.data.data]);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  console.log(data);
  return (
    <Container>
      <Row lg={true}>
        {data?.flat()?.map((data, id) => {
          let coupon = data;
          return (
            <>
              <Col lg={4} md={12} key={id}>
                <div className="coupon-cards">
                  <div className="cccoupon-image">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="coupon-card-img"
                    />
                  </div>
                  <div className="coupon-cdh">{data.title.slice(0, 55)}</div>
                  <div className="coupon-cdsh">{data.bio.slice(0, 90)}...</div>
                  <div className="deal-btn">
                    <button className="deal-coupon-btn" onClick={handleShow}>
                      Get the deal
                    </button>
                  </div>
                </div>
              </Col>
              <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal_body"
                dialogClassName="modal-90w"
              >
                {console.log(data)}
                <Modal.Header>
                  <Modal.Title>
                    <div className="Modal-header-grid">
                      <div className="Modal-header-item-0">
                        <div className="Modal-header-box">
                          <div className="modal_coupon_code_">15%</div>
                          <div className="Modal-header-inner-border"> CODE</div>
                        </div>
                      </div>
                      <div className="Modal-header-item-1">
                        <b>{data.title.slice(0, 55)}</b>
                        <br />
                        {data.bio.slice(0, 200)}
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
                        href="http://wuwb.tech"
                        style={{ textDecoration: "none" }}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {data.brandName}&nbsp;
                      </a>
                      and paste the code at checkout
                    </div>
                    <div className="Modal-Body-Form-control">
                      <InputGroup className="Modal-Body-input">
                        <FormControl
                          className="Modal-Body-form"
                          value="MEGABUS"
                          style={{ fontWeight: "bold", fontSize: "14px" }}
                        />
                        <Button
                          size="lg"
                          variant="dark"
                          className="modal-body-copy"
                          style={{ boxShadow: "none", width: "80px" }}
                        >
                          COPY
                        </Button>
                      </InputGroup>
                    </div>
                    <div className="Modal-Body-save">
                      <button className="Modal-Body-Website">
                        <a
                          href="http://wuwb.tech"
                          style={{ textDecoration: "none", color: "white" }}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {" "}
                          Go to Makemytrip Website
                        </a>
                      </button>
                    </div>
                  </div>
                </Modal.Body>
                <div className="modal-footer-main">
                  <Modal.Footer>
                    <h4>Use the code and let us know if it works</h4>

                    <Button variant="success" size="lg" onClick={handleClose}>
                      Yes
                    </Button>
                    <Button variant="danger" size="lg" onClick={handleClose}>
                      No
                    </Button>
                  </Modal.Footer>
                </div>
              </Modal>
            </>
          );
        })}
      </Row>
    </Container>
  );
}

export default CouponCard;
