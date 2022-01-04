import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "./AdminVerifications.css";
import User from "../../assets/images/user.svg";
import Header from "../common/Header";
import AdminSidebar from "../common/AdminSidebar";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";

const Comment = () => {
  return (
    <div className="adminv-comment">
      <div>
        <img src={User} alt="user" className="adminv-user" />
        <span className="adminv-name">User Name</span>
      </div>
      <div className="adminv-cb">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor
        ornare ultrices auctor laoreet magna nunc. Pulvinar proin purus, nullam
        a non. Platea arcu risus adipiscing sed lacinia tempus, urna, vel...
        more
      </div>
      <div className="adminv-ar">
        <div className="adminv-rej">Reject</div>
        <div className="adminv-app">Approve</div>
      </div>
      <hr />
    </div>
  );
};

function AdminVerifications() {
  const [sidebarShow, setSidebarShow] = useState(false);
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);

  if (!isLoading && !user?.isAdmin) navigate("/");
  if (isLoading) return null;

  return (
    <>
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      {sidebarShow && <AdminSidebar selected={"userVerification"} />}
      <Container className="adminv-main">
        <div className="adminv-greet">
          <div className="adminv-head">Hello Admin!</div>
          <div className="adminv-shead">What are you doing today ?</div>
        </div>
        <div className="adminv-comments">
          <div className="adminv-chead">User Verification Requests</div>
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

export default AdminVerifications;
