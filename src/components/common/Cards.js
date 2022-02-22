import React, { useState, useEffect } from "react";
import "./Cards.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../../assets/images/card.svg";
import axios from "../../utils/axios";
function Cards() {
  const [data, setData]=useState();
  useEffect(() => {
    function GetData() {
      try {
        axios.get(`api/admin/blogCategory`).then((response) => {
          setData(response.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    }

    GetData();
  }, []);
  return (
    <Container className="card-main">
      <Row>
        {data?.map((data)=>{
          return(
        <Col  className="category-land-card">
          <img src={Card} alt="scene1" className="card-img" />
          <span className="card-category">{data?.category}</span>
        </Col>
        
         ) })}
         
      </Row>
     

     
        
        
    
 
    

    </Container>
  );
}

export default Cards;
