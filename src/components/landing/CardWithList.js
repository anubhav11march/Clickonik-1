import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CardWithList.css";
import axios from "../../utils/axios";


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
          <img src={item1?.thumbnail} alt={item1?.title} className="cwl-img" />
          <div className="cwl-div">
            <div className="cwl-heading">{item1?.title}</div>
            <div className="cwl-subheading">
              {item1?.blogText.slice(0, 250)}...
            </div>
          </div>
        </Col>
        <Col lg={5}>
{data?.slice(1,4).map((item, id)=>{
return(
<>


        <Row className="item-row" key={id}>
      <Col lg={3}>
        <img src={item?.thumbnail} alt={item?.title} className="item-img" />
      </Col>
      <Col lg={9}>
        <div className="item-content">
          <div className="item-heading">{item?.title}</div>
          <div className="item-subheading">
          {item?.blogText.slice(0, 70)}...
          </div>
        </div>
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
