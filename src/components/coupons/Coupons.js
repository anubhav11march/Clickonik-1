import React, { useState, useEffect } from "react";
import "./Coupons.css";
// import Shoes from "../../assets/images/shoes.svg";
import Flag from "../../assets/images/flag.svg";
import { Container, Row, Col,Form,FormControl } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import CouponCard from "../common/CouponCard";
import Navbarr from "../common/Navbarr";
import Footer from "../common/Footer";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
function Coupons() {

  // const [index, setIndex] = useState(0);
  const[Store, setStore] = useState()
  const navigate = useNavigate();
  

  const GetStore = () => {
    try {
      axios
        .get(`api/admin/getstores`)
        .then((response) => {
          setStore(response.data.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetStore();
  }, []);



  let Popular= Store?.filter((store) => store?.ispopular===true);
  const unique = [...new Set(Popular?.flat().map((data) => data.name))];
var year=new Date().getFullYear();
const country = [...new Set(Store?.flat().map((data) => data.country))];
console.log(country)
  return (
    <>
      <Navbarr />
      <Container className="coupon-main">
        <div className="coupon-banner">
          <div>
            <div className="coupon-bh">
              Best Deals of {year}—all discounts in one place!
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
        <Form style={{display: 'flex', justifyContent: 'end',marginRight: '40px',marginBottom: '10px',}}>
          
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
        <Row>
          <CouponCard />
        </Row>
        {/* <Row className="coupon-rmd">
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
        </Row> */}
        <div className="coupon-heading">
          Selection of <span>the best {year} offers</span>
        </div>
        <Row>
          <CouponCard />
        </Row>
        <div className="coupon-heading">
          Popular stores and brands you can
          <span> save money on with Clickonik</span>
        </div>
        <Row>
          {unique.map((Brand, id) => {
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
        <button className="More-coupon-guest" onClick={()=>navigate('/coupons/stores')}>
         {(Store?.length)-(unique?.length)} More Stores {`>>`}
        </button>
        <div className="coupon-heading">
          <span>Clickonik</span> helps people buy stuff cheaper
          <span> in {country?.length} countries</span> around the world!
        </div>
        <Row>
          {country.map((data)=>{
            return (
          <Col md={6} lg={3}>
            <div className="coupon-flag" title={`Go to ${data} Coupons`} onClick={() =>
                      navigate(`/coupons/${data}`, {
                        state: { data: data },
                      })
                    }>
                <img className="coupon-flag-img"src={`https://countryflagsapi.com/svg/${data}`} alt="flag" />
              <span>{data}</span>
            </div>
          </Col>
           ) })}
        </Row>
        <br/> 
      
      </Container>
      <Footer />
    </>
  );
}

export default Coupons;
