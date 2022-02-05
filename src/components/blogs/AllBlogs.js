import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BlogList.css";
import { NavLink } from "react-router-dom";
import axios from "../../utils/axios";
import Navbarr from "../common/Navbarr";
import Footer from "../common/Footer";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Filter from "../../assets/images/Filter.png";
function AllBlogs() {
  const [data, setData] = useState();
  const [topbtn, setTopbtn] = useState({
    Sort: true,
    Rate: true,
    Popularity: true,
  });
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

  const SortbyDate = () => {
    topbtn.Sort === false
      ? setTopbtn({ Sort: true })
      : setTopbtn({ Sort: false });
  };
  const SortbyRating = () => {
    topbtn.Rate === false
      ? setTopbtn({ Rate: true })
      : setTopbtn({ Rate: false });
  };
  const SortbyPopularity = () => {
    topbtn.Popularity === false
      ? setTopbtn({ Popularity: true })
      : setTopbtn({ Popularity: false });
  };

  return (
    <>
      <Navbarr />
      <Container className="all-list-main">
        <div className="list-explore">Explore</div>
        <div className="Sort-filter">
          <p className="Sort-text">Sort by</p>{" "}
          <button className="Sort-Button" onClick={SortbyDate}>
            Date{" "}
            {topbtn.Sort === false ? (
              <IoMdArrowDropup size="25px" />
            ) : (
              <IoMdArrowDropdown size="25px" />
            )}
          </button>{" "}
          <button className="Sort-Button" onClick={SortbyRating}>
            Rating{" "}
            {topbtn.Rate === false ? (
              <IoMdArrowDropup size="25px" />
            ) : (
              <IoMdArrowDropdown size="25px" />
            )}
          </button>{" "}
          <button className="Sort-Button" onClick={SortbyPopularity}>
            Popularity{" "}
            {topbtn.Popularity === false ? (
              <IoMdArrowDropup size="25px" />
            ) : (
              <IoMdArrowDropdown size="25px" />
            )}
          </button>
          <div className="filter-container">
            {" "}
            <p className="Sort-text">Filter</p>{" "}
            <img
              src={Filter}
              style={{ width: "35px", height: "35px", marginLeft: "10px" }}
              alt="filter"
            />
          </div>
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
                  to="/particular-blog"
                  state={{ blog_id: data?._id }}
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
      </Container>
      <Footer />
    </>
  );
}

export default AllBlogs;
