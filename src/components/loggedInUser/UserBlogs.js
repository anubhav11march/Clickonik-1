import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import "./UserBlogs.css";
import Blog from "../../assets/images/ablog.svg";
import View from "../../assets/images/bview.svg";
import Share from "../../assets/images/bshare.svg";
import Comments from "../../assets/images/bcomment.svg";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";

const ABlog = () => {
  return (
    <div className="userb-blog">
      <img src={Blog} alt="blog" />
      <div className="userb-blogc">
        <div className="userb-blogt">Topic</div>
        <div className="userb-blogb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor
          ornare ultrices auctor laoreet magna nunc. Pulvinar proin purus,
          nullam a non. Platea arcu risus adipiscing sed lacinia tempus, urna,
          vel... more
        </div>
        <div className="userb-blogi">
          <div className="userb-blogvs userb-pad">
            <img src={View} alt="view" />
            <span>102</span>
            <img src={Share} alt="share" />
            <span>14</span>
          </div>
          <div className="userb-blogcmt userb-pad">
            <img src={Comments} alt="comment" />
            <span>14</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Draft = () => {
  return (
    <div className="userb-blog">
      <img src={Blog} alt="blog" />
      <div className="userb-blogc">
        <div className="userb-blogt">Topic</div>
        <div className="userb-blogb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor
          ornare ultrices auctor laoreet magna nunc. Pulvinar proin purus,
          nullam a non. Platea arcu risus adipiscing sed lacinia tempus, urna,
          vel... more
        </div>
        <div className="userb-bloge">Edit</div>
      </div>
    </div>
  );
};

function UserBlogs() {
  const [state, setState] = useState("activeBlogs");
  const [sidebarShow, setSidebarShow] = useState(false);
  const { user, isLoading } = useContext(UserContext);
  const navigate = useNavigate();

  if (!isLoading && !user) navigate("/");
  if (isLoading) return null;

  return (
    <>
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      {sidebarShow && <Sidebar selected={"blogs"} />}
      <Container className="userb-main">
        <div className="userb-head">
          <div className="userb-blogs">
            <div
              className={`${state === "activeBlogs" && "userb-active"}`}
              onClick={() => setState("activeBlogs")}
            >
              Active Blogs
            </div>
            <div
              className={`${state === "drafts" && "userb-active"}`}
              onClick={() => setState("drafts")}
            >
              Drafts
            </div>
          </div>
          <button
            className="userb-pub"
            onClick={() => navigate("/user/publish")}
          >
            Publish
          </button>
        </div>
        {/* <hr /> */}
        {state === "activeBlogs" ? (
          <div className="userb-ablog">
            <div className="userb-abhead">Active Blogs</div>
            <ABlog />
            <ABlog />
            <ABlog />
            <ABlog />
          </div>
        ) : (
          <div className="userb-ablog">
            <div className="userb-abhead">Drafts</div>
            <Draft />
            <Draft />
            <Draft />
            <Draft />
          </div>
        )}
      </Container>
    </>
  );
}

export default UserBlogs;
