import React, { useState, useContext, useEffect } from "react";
import "./UserDashboard.css";
import { Container, Row, Col } from "react-bootstrap";
import Blog from "../../assets/images/ablog.svg";
import User from "../../assets/images/user.svg";
import View from "../../assets/images/bview.svg";
import Share from "../../assets/images/bshare.svg";
import Comments from "../../assets/images/bcomment.svg";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import UserContext from "../../utils/userContext";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
const ABlog = () => {
  const [userdata, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    function Userblog() {
      try {
        axios
          .get(`api/user/blog?blogIndex=0&isDraft=false`)
          .then((response) => {
            setUserData(response.data);
            if (response.data.code !== 200) throw navigate("/");
          });
      } catch (err) {
        console.log(err);
      }
    }
    Userblog();
  }, []);
  return (
    <>
      {userdata?.data.slice(0, 3).map((data, id) => {
        return (
          <div className="userd-blog" key={id}>
            <img id="item-0ud" src={data?.thumbnail} alt="blog" />

            <div id="item-1ud">{data?.title}</div>
            <div id="item-2ud">
              {data?.blogText.slice(0, 150)}
              <span className="more-text">...more</span>
            </div>
            <div id="item-3ud">
              <img src={View} alt="view" />
              <span> &nbsp; {data?.viewCount}</span>
              <img className="item-share" src={Share} alt="share" />
              <span> &nbsp;{data?.shareCount}</span>

              <span className="item-comments-span"> &nbsp; 17</span>
              <img className="item-comments" src={Comments} alt="comment" />
            </div>
          </div>
        );
      })}
    </>
  );
};

const Comment = () => {
  return (
    <div className="userd-comment">
      <div>
        <img src={User} alt="user" className="userd-user" />
        <span className="userd-name">User Name</span>
      </div>
      <div className="userd-cb">
        Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. Tellus
        pretium mauris, at blandit massa....more
      </div>
      <div className="userd-approve">Approve</div>
    </div>
  );
};

function UserDashboard() {
  const { user, isLoading } = useContext(UserContext);
  const navigate = useNavigate();
  const [sidebarShow, setSidebarShow] = useState(false);

  if (!isLoading && !user) navigate("/");
  if (isLoading) return null;

  return (
    <>
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      {sidebarShow && <Sidebar selected={"dashboard"} />}
      <Container className="userd-main">
        <div className="userd-greet">
          <div className="userd-head">Hello {user?.username || "User"}!</div>
          <div className="userd-shead">What are you doing today ?</div>
        </div>
        <Row>
          <Col lg={8}>
            <div className="userd-ablog">
              <div className="userd-abhead">Active Blogs</div>
              <ABlog />
              <div
                className="userd-show"
                onClick={() => navigate("/user/blogs")}
              >
                {" "}
                show all
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="userd-comments">
              <div className="userd-chead">Comments</div>
              <Comment />
              <Comment />
              <Comment />
              <div
                className="userd-show"
                onClick={() => navigate("/user/comments")}
              >
                show all
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserDashboard;
