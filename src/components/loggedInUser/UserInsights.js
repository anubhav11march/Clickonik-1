import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import "./UserInsights.css";
import Graph from "../common/Graph";
import Blog from "../../assets/images/tblog.svg";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";
import axios from "../../utils/axios";

const UserInsights = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const navigate = useNavigate();
  const [allstat, setAllStat] = useState();
  const [monthstat, setMonthStat] = useState();
  const { user, isLoading } = useContext(UserContext);

  //for Total stat
  useEffect(() => {
    function AllTimestats() {
      try {
        axios.get("api/user/stat?isAllTime=true").then((response) => {
          setAllStat(response.data);
          if (response.data.code !== 200) throw navigate("/blogs");
        });
      } catch (err) {
        console.log(err);
      }
    }
    AllTimestats();
  }, []);
  // console.log(allstat?.data[0]);
  //for month
  useEffect(() => {
    function Monthstats() {
      try {
        axios.get("api/user/stat?isTabular=true").then((response) => {
          setMonthStat(response.data?.data);
          if (response.data.code !== 200) throw navigate("/blogs");
        });
      } catch (err) {
        console.log(err);
      }
    }
    Monthstats();
  }, []);

  if (!isLoading && !user) navigate("/");
  if (isLoading) return null;

  return (
    <>
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      {sidebarShow && <Sidebar selected={"insights"} />}
      <Container className="inst-main">
        <div className="inst-sec1">
          <div className="inst-sh">You Have Received (All Time)</div>
          <div className="inst-vals">
            <div className="inst-part">
              <div className="inst-val">{allstat?.data[0]?.viewCount}</div>
              <div className="inst-name">Blog-Views</div>
            </div>
            <div className="inst-part">
              <div className="inst-val">{allstat?.data[0]?.shareCount}</div>
              <div className="inst-name">Shares</div>
            </div>
            <div className="inst-part">
              <div className="inst-val">{allstat?.data[0]?.commentCount}</div>
              <div className="inst-name">Comments</div>
            </div>
          </div>
        </div>
        <div className="inst-box">
          <div className="inst-title">
            {allstat?.data[0]?.viewCount} Blog Views (This Month)
          </div>
          <Graph />
        </div>
        <div className="inst-box">
          <div className="inst-title">
            {allstat?.data[0]?.shareCount} Shares (This Month)
          </div>
          <Graph />
        </div>
        <div className="inst-box">
          <div className="inst-title">
            {allstat?.data[0]?.commentCount} Comments (This Month)
          </div>
          <Graph />
        </div>
        <div className="inst-box">
          <div className="inst-title">Blog Performance (This Month)</div>
          <div className="inst-head">
            <div className="inst-bf">Blog</div>
            <div>Views</div>
            <div>Shares</div>
            <div className="inst-bl">Comments</div>
          </div>
          <hr />
          {monthstat?.map((count, id) => {
            {
              return (
                <>
                  <div className="inst-row" key={id}>
                    <div className="inst-bc">
                      <img src={Blog} alt="blog" />

                      <div>
                        <div className="inst-bt">Topic</div>
                        <div className="inst-bp">Published 30 Nov 2021</div>
                      </div>
                    </div>
                    <div className="inst-num">{count.viewCount}</div>
                    <div className="inst-num">{count.shareCount}</div>
                    <div className="inst-bl inst-num">{count.commentCount}</div>
                  </div>
                  <hr />
                </>
              );
            }
          })}
        </div>
      </Container>
    </>
  );
};

export default UserInsights;
