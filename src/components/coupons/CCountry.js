import React, { useState, useEffect } from "react";
import { Container, Row, Col,Form,FormControl } from "react-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import CCardCountry from "./CCardCountry";
import Navbarr from "../common/Navbarr";
import Footer from "../common/Footer";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "../../utils/axios";
function CCountry() {

  // const [index, setIndex] = useState(0);
  const[Store, setStore] = useState()
  const { state } = useLocation();
  const { data } = state;
  const navigate = useNavigate();
  console.log(data)

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



  let Popular= Store?.filter((store) =>store?.country===data);
  const unique = [...new Set(Popular?.flat().map((data) => data.name))];


  return (
    <>
      <Navbarr />
      <Container className="coupon-main">
        <br/>
        
        <div className="coupon-heading">
          Selection of <span>the best 2021 offers of </span>{data}
        </div>
{/*           
        <Form style={{display: 'flex', justifyContent: 'end',marginRight: '40px',marginBottom: '10px'}}>
          
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
        </Form> */}
        <Row >
        <CCardCountry country={data} />
        </Row>
        <div className="coupon-heading">
          Popular stores of {data}!! You can
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
       
     
      
      
      </Container>
      <Footer />
    </>
  );
}

export default CCountry;
