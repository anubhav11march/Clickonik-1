import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CardWithList.css";
import axios from "../../utils/axios";
import { NavLink } from "react-router-dom";

function CardWithList() {
  const [data, setData] = useState();
  const [item1, setItem1] = useState();
  const GetData = () => {
    try {
      axios.get(`api/guest/recentblogs`).then((response) => {
        setData(response.data.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    if (data?.length>0){
    setItem1(data[0])}
  }, [data]);

  return (
    <Container className="cwl-main">
      <Row>
        <Col lg={7} className="cwl-col">
        <NavLink
                className="navlink-css"
                to={{pathname:`/particular-blog/${item1?._id}`}} state={{ blog_id: item1?._id }}
              >
          <img src={item1?.thumbnail} alt={item1?.title} className="cwl-img" />
          <div className="cwl-div">
            <div className="cwl-heading">{item1?.title}</div>
            <div className="cwl-subheading">
              {item1?.blogText.slice(0, 250)}...
            </div>
          </div>
          </NavLink>
        </Col>
        <Col lg={5}>
{data?.slice(-4).reverse().map((item, id)=>{
return(
<>


        <Row className="item-row" key={id}>
      <Col lg={3} xs={2} md={2}>
      <NavLink
                className="navlink-css"
                to={{pathname:`/particular-blog/${item?._id}`}} state={{ blog_id: item?._id }}
              >
      <div className="list-main-img">
        <img src={item?.thumbnail} alt={item?.title} className="item-img" />
      </div>
      </NavLink>
      </Col>
      <Col lg={9} xs={9} md={9}>
      <NavLink
                className="navlink-css"
                to={{pathname:`/particular-blog/${item?._id}`}} state={{ blog_id: item?._id }}
              >
        <div className="item-content">
          <div className="item-heading">{item?.title}</div>
          <div className="item-subheading">
          {item?.blogText.slice(0, 150)}...
          </div>
        </div>
        </NavLink>
      </Col>
    </Row>

    </>
)})}
        </Col>
      </Row>
    </Container>
  );
}

export default CardWithList;
