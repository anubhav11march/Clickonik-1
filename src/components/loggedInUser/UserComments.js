import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "./UserComments.css";
import User from "../../assets/images/user.svg";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";

const Comment = () => {
  return (
    <div className="userc-comment">
      <div>
        <img src={User} alt="user" className="userc-user" />
        <span className="userc-name">User Name</span>
      </div>
      <div className="userc-cb">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor
        ornare ultrices auctor laoreet magna nunc. Pulvinar proin purus, nullam
        a non. Platea arcu risus adipiscing sed lacinia tempus, urna, vel...
        more
      </div>
      <div className="userc-approve">Approve</div>
    </div>
  );
};

function UserComments() {
  const [sidebarShow, setSidebarShow] = useState(false);
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);

  if (!isLoading && !user) navigate("/");
  if (isLoading) return null;

  return (
    <>
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      {sidebarShow && <Sidebar selected={"comments"} />}
      <Container className="userc-main">
        <div className="userc-comments">
          <div className="userc-chead">Comments</div>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </Container>
    </>
  );
}

export default UserComments;
