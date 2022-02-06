import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AllList.css";
import { NavLink } from "react-router-dom";
import axios from "../../utils/axios";
import Navbarr from "../common/Navbarr";
import Footer from "../common/Footer";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Filter from "../../assets/images/Filter.png";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
function AllBlogs() {
  const [data, setData] = useState();
  const [showFilter, setFilter] = useState(false);
  const [populardata, setPopulardata] = useState();
  const [blogs, setBlogs] = useState();
  const [popularvalue, setPopularvalue] = useState();
  const [ratingvalue, setRatingvalue] = useState();
  const [date, setDate] = useState({ Start: "", End: "" });
  const [topbtn, setTopbtn] = useState({
    Sort: true,
    Rate: true,
    Popularity: true,
  });
  useEffect(() => {
    function GetData() {
      try {
        axios.get(`api/guest/recentblogs`).then((response) => {
          setData(response.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    }

    GetData();
  }, []);

  useEffect(() => {
    function GetPopulardata() {
      try {
        axios.get(`api/guest/mostviewedblogs`).then((response) => {
          setPopulardata(response.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    }

    GetPopulardata();
  }, []);

  useEffect(() => {
    if (data?.length > 0) {
      setBlogs(data);
    }
  }, [data]);

  const SortbyDate = () => {
    if (topbtn.Sort === false) {
      setTopbtn({ Sort: true });
      setBlogs([...data]);
    } else {
      setTopbtn({ Sort: false });
      setBlogs([...data].reverse());
    }
    setFilter(false)
  };
  const SortbyRating = () => {
    topbtn.Rate === false
      ? setTopbtn({ Rate: true })
      : setTopbtn({ Rate: false });
      setFilter(false)
  };
  const SortbyPopularity = () => {
    if (topbtn.Popularity === false) {
      setTopbtn({ Popularity: true });
      setBlogs([...populardata]);
    } else {
      setTopbtn({ Popularity: false });
      setBlogs([...populardata].reverse());
    }
    setFilter(false)
  };

  const FilterPannel = () => {
    showFilter === false ? setFilter(true) : setFilter(false);
    
  };
  useEffect(() => {
    if (showFilter === true) {
      setBlogs([...data])
    }
  },[showFilter])

  const PopularRadio = (e) => {
    setPopularvalue(e);
  };
  const RatingRadio = (e) => {
    setRatingvalue(e);
  };
  const DatePicker = () => {

  };
  const Popularfilter=() => {
    let result;
    if (popularvalue==='1000+'){
   result= blogs.filter((view)=>view?.viewCount >= 1000)
  }
  else if (popularvalue==='1000'){
  result= blogs.filter((view)=>view?.viewCount <= 1000 &&view?.viewCount >= 700)
  }
  else if (popularvalue==='700'){
  result= blogs.filter((view)=>view?.viewCount <= 10 &&view?.viewCount >= 0)
  }
  else if (popularvalue==='400'){
  result= blogs.filter((view)=>view?.viewCount <= 12 &&view?.viewCount >= 10)
  }
  else if(popularvalue==='200'){
  result= blogs.filter((view)=>view?.viewCount <= 15 &&view?.viewCount >= 12)
  }
   setBlogs(result)
   setFilter(false)
  }

  return (
    <>
      <Navbarr />
      <Container className="all-list-main">
        <div className="list-explore">Explore</div>
        <div className="Sort-filter">
          <p className="Sort-text">Sort by</p>{" "}
          <button
            className="Sort-Button"
            onClick={SortbyDate}
            title={topbtn.Sort === true ? "Latest Blogs" : "Oldest Blogs"}
          >
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
          <button
            className="Sort-Button"
            onClick={SortbyPopularity}
            title={
              topbtn.Popularity === true
                ? "Most-Popular Blogs"
                : "Less Popular Blogs"
            }
          >
            Popularity{" "}
            {topbtn.Popularity === false ? (
              <IoMdArrowDropup size="25px" />
            ) : (
              <IoMdArrowDropdown size="25px" />
            )}
          </button>
          <div className="filter-container" onClick={FilterPannel}>
            <p className="Sort-text">Filter</p>
            <img
              src={Filter}
              style={{ width: "35px", height: "35px", marginLeft: "10px" }}
              alt="filter"
            />
          </div>
        </div>

        <div
          className="Filter-main"
          style={{ display: showFilter === false ? "none" : "grid" }}
        >
          <Row>
            <Col lg={4}>
              <div className="Filter-container">
                <p className="Filter-date-text">Filter by Date</p>
                <Row>
                  <Col>
                    <input
                      type="date"
                      className="blog-Date-picker"
                      name="Start Date"
                      value={date.Start}
                      onChange={(e) => setDate({ Start: e.target.value })}
                    />
                  </Col>
                  <Col>
                    <input
                      type="date"
                      className="blog-Date-picker"
                      name="End date"
                      value={date.End}
                      onChange={(e) => setDate({ End: e.target.value })}
                    />
                  </Col>
                </Row>
                <div className="Filter-button-div">
                  {" "}
                  <button className="Filter-Button" onClick={DatePicker}>
                    Filter
                  </button>{" "}
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="Filter-container">
                <p className="Filter-date-text">Filter by Ratings</p>
                <div>
                  <RadioGroup onChange={RatingRadio}>
                    <ReversedRadioButton
                      pointColor={"#23A6F0"}
                      iconInnerSize={9.5}
                      iconSize={20}
                      value="5-4"
                    >
                      <h4> 5 - 4 Star</h4>
                    </ReversedRadioButton>
                    <ReversedRadioButton
                      pointColor={"#23A6F0"}
                      iconInnerSize={9.5}
                      iconSize={20}
                      value="4-3"
                    >
                      <h4> 4 - 3 Star </h4>
                    </ReversedRadioButton>
                    <ReversedRadioButton
                      pointColor={"#23A6F0"}
                      iconInnerSize={9.5}
                      iconSize={20}
                      value="3-2"
                    >
                      <h4> 3 - 2 Star </h4>
                    </ReversedRadioButton>
                    <ReversedRadioButton
                      pointColor={"#23A6F0"}
                      iconInnerSize={9.5}
                      iconSize={20}
                      value="2-1"
                    >
                      <h4> 2 - 1 Star </h4>
                    </ReversedRadioButton>
                    <ReversedRadioButton
                      pointColor={"#23A6F0"}
                      iconInnerSize={9.5}
                      iconSize={20}
                      value="1-0"
                    >
                      <h4> 1 - 0 Star </h4>
                    </ReversedRadioButton>
                  </RadioGroup>
                </div>
                <div className="Filter-button-div">
                  {" "}
                  <button className="Filter-Button">Filter</button>{" "}
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="Filter-container">
                <p className="Filter-date-text">Filter by Popularity</p>

                <div>
                  <RadioGroup onChange={PopularRadio}>
                    <ReversedRadioButton
                      value='1000+'
                      pointColor={"#23A6F0"}
                      iconInnerSize={9.5}
                      iconSize={20}
                    >
                      <h4> 1000+ Views </h4>
                    </ReversedRadioButton>
                    <ReversedRadioButton
                      pointColor={"#23A6F0"}
                      iconInnerSize={9.5}
                      iconSize={20}
                      value="1000"
                    >
                      <h4> 1000 - 700 Views </h4>
                    </ReversedRadioButton>
                    <ReversedRadioButton
                      pointColor={"#23A6F0"}
                      iconInnerSize={9.5}
                      iconSize={20}
                      value="700"
                    >
                      <h4> 700 - 400 Views </h4>
                    </ReversedRadioButton>
                    <ReversedRadioButton
                      pointColor={"#23A6F0"}
                      iconInnerSize={9.5}
                      iconSize={20}
                      value="400"
                    >
                      <h4> 400 - 200 Views </h4>
                    </ReversedRadioButton>
                    <ReversedRadioButton
                      pointColor={"#23A6F0"}
                      iconInnerSize={9.5}
                      iconSize={20}
                      value="200"
                    >
                      <h4> 200 - 0 Views </h4>
                    </ReversedRadioButton>
                  </RadioGroup>
                </div>
                <div className="Filter-button-div">
                  {" "}
                  <button className="Filter-Button" onClick={Popularfilter}>Filter</button>{" "}
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {blogs?.map((data, id) => {
          return (
            <Row className="list-row" key={id}>
              <Col lg={2} xs={3} md={3}>
                <img
                  src={data?.thumbnail}
                  alt={data?.title}
                  className="list-img-blogs"
                />
              </Col>
              <Col lg={10} xs={9} md={9}>
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