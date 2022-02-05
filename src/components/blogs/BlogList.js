import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BlogList.css";
import { NavLink } from "react-router-dom";
import axios from "../../utils/axios";

function BlogList() {
  const [data, setData] = useState();

  useEffect(() => {
    function GetData() {
      try {
        axios.get(`api/user/homepageBlogs`).then((response) => {
          setData(response.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    }

    GetData();
  }, []);


  return (
    <Container className="list-main">
      <div className="list-explore">
        Most Recent <span>Blogs</span>
      </div>
      {data?.slice(0, 11).map((data, id) => {
          
        return (
          <Row className="list-row" key={id}>
            <Col lg={2}>
              <img
                src={data?.thumbnail}
                alt={data?.title}
                className="list-img"
              />
            </Col>
            <Col lg={10}>
              <NavLink
                className="navlink-css"
                to="/particular-blog" state={{ blog_id: data?._id }}
              >
                <div className="list-content">
                  <div className="list-heading">{data?.title}</div>
                  <div className="list-subheading">
                    {data?.blogText.slice(0, 220)}...
                  </div>
                </div>
              </NavLink>
            </Col>
           
          </Row>
          
        );
      })}
      <NavLink
                className="navlink-css"
                to="/blogs/allblogs" 
              >
               
              
      <div >
       <button  className="More-coupon-guest"  >
          View More
        </button>
      </div>
      </NavLink>
      <br/><br/>
    </Container>
  );
}

export default BlogList;
