import React, { useState, useContext, useEffect } from "react";
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
import axios from "../../utils/axios";

function UserBlogs() {
  const [state, setState] = useState("Active Blogs");
  const [sidebarShow, setSidebarShow] = useState(false);
  const { user, isLoading } = useContext(UserContext);
  const [userdata, setUserData] = useState(null);
  const [draftBlogs, setDraftBlogs] = useState(false);
  const navigate = useNavigate();

  const Data = () => {
    try {
      axios
        .get(`api/user/blog?blogIndex=0&isDraft=${draftBlogs}`)
        .then((response) => {
          setUserData(response.data);
          if (response.data.code !== 200) throw navigate("/");
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Data();
    if (state === "Active Blogs") {
      setDraftBlogs(true);
    } else {
      setDraftBlogs(false);
    }
  }, [state]);
  // console.log(userdata?.data);

  if (!isLoading && !user) navigate("/");
  if (isLoading) return null;
  else {
    return (
      <>
        <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
        {sidebarShow && <Sidebar selected={"blogs"} />}
        <Container className="userb-main">
          <div className="userb-head">
            <div className="userb-blogs">
              <div
                className={`${state === "Active Blogs" && "userb-active"}`}
                onClick={() => {
                  setState("Active Blogs");
                }}
              >
                Active Blogs
              </div>
              <div
                className={`${state === "Drafts" && "userb-active"}`}
                onClick={() => {
                  setState("Drafts");
                }}
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
          <div className="userb-ablog">
            <p>{state}</p>

            {userdata?.data.map((data, id) => {
              if (state === "Active Blogs") {
                return (
                  <div className="Blog-box" key={id}>
                    <img id="item-0" src={data?.thumbnail} alt="blog" />
                    <div id="item-1">{data?.title}</div>
                    <div id="item-2">
                      {data?.blogText.slice(0, 150) + "..."}
                      <span className="more-text">more</span>
                    </div>
                    <div id="item-3">
                      <img src={View} alt="view" />
                      <span> &nbsp; 102</span>
                      <img className="item-share" src={Share} alt="share" />
                      <span> &nbsp; 14</span>
                      <span className="item-comments-span"> &nbsp; 17</span>
                      <img
                        className="item-comments"
                        src={Comments}
                        alt="comment"
                      />
                    </div>
                   
                  </div>
                );
              } else {
                return (
                  <div className="Blog-box" key={id}>
                    <img id="item-0" src={data?.thumbnail} alt="blog" />
                    <div id="item-1">{data?.title}</div>
                    <div id="item-2">
                      {data?.blogText.slice(0, 150) + "..."}
                      <span className="more-text">more</span>
                    </div>

                    <div id="item-3">Edit</div>
                  </div>
                );
              }
            })}
          </div>
          
        </Container>
      </>
    );
  }
}

export default UserBlogs;
