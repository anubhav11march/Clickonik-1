import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./AdminBlogs.css";
import BlogImg from "../../assets/images/ablog.svg";
import Header from "../common/Header";
import AdminSidebar from "../common/AdminSidebar";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";
import axios from "../../utils/axios";

const Blog = ({ blog, id }) => {
  return (
    <div className="adminb-blog" key={id}>
      <img
        src={blog?.thumbnail ? blog.thumbnail : BlogImg}
        alt="blog"
        className="adminb-img"
      />
      <div className="adminb-blogc">
        <div className="adminb-blogt">{blog?.title}</div>
        <div className="adminb-blogb">{blog?.blogText?.slice(0, 80)}</div>
        <div className="adminb-ar">
          <div className="adminb-rej">Reject</div>
          <div className="adminb-app">Approve</div>
        </div>
      </div>
    </div>
  );
};

function AdminBlogs() {
  const [isGuest, setIsGuest] = useState(true);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [guestBlogs, setGuestBlogs] = useState([]);
  const [hasMoreGuestBlogs, setHasMoreGuestBlogs] = useState(true);
  const [guestBlogIndex, setGuestBlogIndex] = useState(0);
  const [userBlogs, setUserBlogs] = useState([]);
  const [hasMoreUserBlogs, setHasMoreUserBlogs] = useState(true);
  const [userBlogIndex, setUserBlogIndex] = useState(0);
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);

  const infiniteScroll = () => {
    if (
      Math.round(window.innerHeight + window.scrollY) >=
      document.body.offsetHeight
    ) {
      setGuestBlogIndex((guestBlogIndex) => guestBlogIndex + 1);
      setUserBlogIndex((userBlogIndex) => userBlogIndex + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);

  useEffect(() => {
    const getGuestBlogs = async () => {
      try {
        const res = await axios.get("api/admin/blog?blogIndex=0&isGuestBlogs=true");
        if (res?.data?.code !== 200) return;
        if (res?.data?.data?.length < 1) {
          setHasMoreGuestBlogs(false);
          return;
        }
        setGuestBlogs((guestBlogs) => [...guestBlogs, ...res?.data?.data]);
      } catch (err) {
        console.log(err);
      }
    };
    if (!hasMoreGuestBlogs) return;
    getGuestBlogs(guestBlogIndex);
    
  }, [guestBlogIndex, hasMoreGuestBlogs]);

  useEffect(() => {
    const getUserBlogs = async () => {
      try {
   
        const res = await axios.get(`api/admin/blog?blogIndex=0&isGuestBlogs=false`
        //   params: { blogIndex: 0, isGuestBlog: false },
        // }
        );
        console.log(res);
        if (res?.data?.code !== 200) return;
        if (res?.data?.data?.length < 1) {
          setHasMoreUserBlogs(false);
          return;
        }
        setUserBlogs((userBlogs) => [...userBlogs, ...res?.data?.data]);
      } catch (err) {
        console.log(err);
      }
    };
    if (!hasMoreUserBlogs) return;
    getUserBlogs(userBlogIndex);
  }, [hasMoreUserBlogs, userBlogIndex]);

  if (!isLoading && !user?.isAdmin) navigate("/");
  if (isLoading) return null;

  return (
    <>
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      {sidebarShow && <AdminSidebar selected={"blogs"} />}
      <Container className="adminb-main">
        <div className="adminb-greet">
          <div className="adminb-head">Hello Admin!</div>
          <div className="adminb-shead">What are you doing today ?</div>
        </div>
        <div className="adminb-ablog">
          <div className="adminb-gu">
            <div
              className={`${isGuest && "adminb-active"}`}
              onClick={() => setIsGuest(true)}
            >
              Guest Blogs
            </div>
            <div
              className={`adminb-ub ${!isGuest && "adminb-active"}`}
              onClick={() => setIsGuest(false)}
            >
              User Blogs
            </div>
          </div>
          {isGuest
            ? guestBlogs.map((blog, id) => {
                return <Blog blog={blog} id={id} />;
              })
            : userBlogs.map((blog, id) => {
                return <Blog blog={blog} id={id} />;
              })}
        </div>
      </Container>
    </>
  );
}

export default AdminBlogs;
