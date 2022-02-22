import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import Navbarr from "../common/Navbarr";
import Footer from "../common/Footer";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
function AllStore() {
  const [Store, setStore] = useState();
  const navigate = useNavigate();

  const GetStore = () => {
    try {
      axios.get(`api/admin/getstores`).then((response) => {
        setStore(response.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetStore();
  }, []);

  const unique = [...new Set(Store?.flat().map((data) => data.name))];

  //   function firstN(item) {
  //     return item.toLowerCase().indexOf('a') === 0;
  //   }
  let A = unique.filter((data) => data?.toLowerCase().indexOf("a") === 0);
  let B = unique.filter((data) => data?.toLowerCase().indexOf("b") === 0);
  let C = unique.filter((data) => data?.toLowerCase().indexOf("c") === 0);
  let D = unique.filter((data) => data?.toLowerCase().indexOf("d") === 0);
  let E = unique.filter((data) => data?.toLowerCase().indexOf("e") === 0);
  let F = unique.filter((data) => data?.toLowerCase().indexOf("f") === 0);
  let G = unique.filter((data) => data?.toLowerCase().indexOf("g") === 0);
  let H = unique.filter((data) => data?.toLowerCase().indexOf("h") === 0);
  let I = unique.filter((data) => data?.toLowerCase().indexOf("i") === 0);
  let J = unique.filter((data) => data?.toLowerCase().indexOf("j") === 0);
  let K = unique.filter((data) => data?.toLowerCase().indexOf("k") === 0);
  let L = unique.filter((data) => data?.toLowerCase().indexOf("l") === 0);
  let M = unique.filter((data) => data?.toLowerCase().indexOf("m") === 0);
  let N = unique.filter((data) => data?.toLowerCase().indexOf("n") === 0);
  let O = unique.filter((data) => data?.toLowerCase().indexOf("o") === 0);
  let P = unique.filter((data) => data?.toLowerCase().indexOf("p") === 0);
  let Q = unique.filter((data) => data?.toLowerCase().indexOf("q") === 0);
  let R = unique.filter((data) => data?.toLowerCase().indexOf("r") === 0);
  let S = unique.filter((data) => data?.toLowerCase().indexOf("s") === 0);
  let T = unique.filter((data) => data?.toLowerCase().indexOf("t") === 0);
  let U = unique.filter((data) => data?.toLowerCase().indexOf("u") === 0);
  let V = unique.filter((data) => data?.toLowerCase().indexOf("v") === 0);
  let W = unique.filter((data) => data?.toLowerCase().indexOf("w") === 0);
  let X = unique.filter((data) => data?.toLowerCase().indexOf("x") === 0);
  let Y = unique.filter((data) => data?.toLowerCase().indexOf("y") === 0);
  let Z = unique.filter((data) => data?.toLowerCase().indexOf("z") === 0);



  return (
    <>
      <Navbarr />
      <Container className="coupon-main">
        <Form
          style={{
            display: "flex",
            justifyContent: "end",
            marginRight: "40px",
            marginBottom: "10px",
          }}
        >
          <FormControl
            type="search"
            placeholder="Search"
            className="search-input"
            aria-label="Search"
          />
          <div className="search-icon">
            {" "}
            <IoSearchOutline />
          </div>
        </Form>

        {/* <div className="coupon-heading">
          All Retailers
          <br />
          <span>List of all stores</span>
        </div> */}

        <div className="coupon-heading">
          Popular stores and brands you can
          <span> save money on with Clickonik</span>
        </div>
        <Row style={{ display: A?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; A</h2>
          {A?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: B?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; B</h2>
          {B?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: C?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; C</h2>
          {C?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: D?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; D</h2>
          {D?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: E?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; E</h2>
          {E?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: F?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; F</h2>
          {F?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: G?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; G</h2>
          {G?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: H?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; H</h2>
          {H?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: I?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; I</h2>
          {I?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: J?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; J</h2>
          {J?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: K?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; K</h2>
          {K?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: L?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; L</h2>
          {L?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: M?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; M</h2>
          {M?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: N?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; N</h2>
          {N?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: O?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; O</h2>
          {O?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: P?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; P</h2>
          {P?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: Q?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; Q</h2>
          {Q?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: R?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; R</h2>
          {R?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: S?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; S</h2>
          {S?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: T?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; T</h2>
          {T?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: U?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; U</h2>
          {U?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: V?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; V</h2>
          {V?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: W?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; W</h2>
          {W?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: X?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; X</h2>
          {X?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: Y?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; Y</h2>
          {Y?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <Row style={{ display: Z?.length === 0 ? "none" : "flex" }}>
          <h2> &nbsp; Z</h2>
          {Z?.map((Brand, id) => {
            return (
              <>
                <Col lg={2} key={id}>
                  <div
                    className="coupon-brand"
                    onClick={() =>
                      navigate(`/coupons/brand`, {
                        state: { Brand: Brand },
                      })
                    }
                  >
                    {Brand}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
      </Container>
      <Footer />
    </>
  );
}

export default AllStore;
