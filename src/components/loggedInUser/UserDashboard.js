import React, { useState, useContext } from "react";
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

const ABlog = () => {
  return (
    <div className="userd-blog">
      <img src={Blog} alt="blog" />
      <div className="userd-blogc">
        <div className="userd-blogt">Topic</div>
        <div className="userd-blogb">
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. Tellus
          pretium mauris, at blandit massa....more
        </div>
        <div className="userd-blogi">
          <div className="userd-blogvs userd-pad">
            <img src={View} alt="view" />
            <span>102</span>
            <img src={Share} alt="share" />
            <span>14</span>
          </div>
          <div className="userd-blogcmt userd-pad">
            <img src={Comments} alt="comment" />
            <span>14</span>
          </div>
        </div>
      </div>
    </div>
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
              <ABlog />
              <ABlog />
              <div className="userd-show">show all</div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="userd-comments">
              <div className="userd-chead">Comments</div>
              <Comment />
              <Comment />
              <Comment />
              <div className="userd-show">show all</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserDashboard;
