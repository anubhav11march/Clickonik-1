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
  const [state, setState] = useState("activeBlogs");
  const [sidebarShow, setSidebarShow] = useState(false);
  const { user, isLoading } = useContext(UserContext);
  const [userdata, setUserData] = useState(null);
  const [draftBlogs, setDraftBlogs] = useState(true);
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
  }, []);
  console.log(userdata);

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
        {state === "activeBlogs" ? (
          // userdata.map((data, index) => {
           <div className="userb-ablog">
                <div className="userb-abhead">Active Blogs</div>
                <div className="userb-blog">
                  <img src={Blog} alt="blog" />
                  <div className="userb-blogc">
                    <div className="userb-blogt">Topic</div>
                    <div className="userb-blogb">
                      
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
              </div>
           
          // })
        ) : (
          <div className="userb-ablog">
            <div className="userb-abhead">Drafts</div>
            <div className="userb-blog">
              <img src={Blog} alt="blog" />
              <div className="userb-blogc">
                <div className="userb-blogt">Topic</div>
                <div className="userb-blogb">
                 
                </div>
                <div className="userb-bloge">Edit</div>
              </div>
            </div>
          </div>
        )
        
        
        
        }
      </Container>
    </>
  );
}

export default UserBlogs;
