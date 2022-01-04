import React, { useState, useContext, useEffect } from "react";
import "./AdminDashboard.css";
import { Container, Row, Col } from "react-bootstrap";
import BlogImg from "../../assets/images/ablog.svg";
import User from "../../assets/images/user.svg";
import Header from "../common/Header";
import AdminSidebar from "../common/AdminSidebar";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";
import axios from "../../utils/axios";

const Blog = () => {
  return (
    <div className="admind-blog">
      <img src={BlogImg} alt="blog" />
      <div className="admind-blogc">
        <div className="admind-blogt">Topic</div>
        <div className="admind-blogb">
          Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. Tellus
          pretium mauris, at blandit massa....more
        </div>
        <div className="admind-ar">
          <div className="admind-rej">Reject</div>
          <div className="admind-app">Approve</div>
        </div>
      </div>
    </div>
  );
};

const Comment = ({ comment, id, updateCommentList }) => {
  const rejectComment = async (commentId) => {
    try {
      const res = await axios.delete(`/api/admin/comment/${commentId}`);
      if (res?.data?.code !== 200) {
        alert(res?.data?.message);
        return;
      }
      updateCommentList(commentId);
    } catch (err) {
      console.log(err);
    }
  };

  const approveComment = async (commentId) => {
    try {
      const res = await axios.put(`/api/admin/comment/${commentId}`);
      if (res?.data?.code !== 200) {
        alert(res?.data?.message);
        return;
      }
      updateCommentList(commentId);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="admind-comment">
      <div>
        <img
          src={comment?.isGuest ? User : comment?.userId?.profile || User}
          alt="user"
          className="admind-user"
        />
        <span className="admind-name">
          {comment?.isGuest ? comment?.username : comment?.userId?.username}
        </span>
      </div>
      <div className="admind-cb">{comment?.comment}</div>
      <div className="admind-ar">
        <div
          className="admind-rej admind-pad"
          onClick={() => rejectComment(comment?._id)}
        >
          Reject
        </div>
        <div
          className="admind-app"
          onClick={() => approveComment(comment?._id)}
        >
          Approve
        </div>
      </div>
    </div>
  );
};

function AdminDashboard() {
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [sidebarShow, setSidebarShow] = useState(false);

  const updateCommentList = (commentId) => {
    setComments(comments.filter((comment) => comment?._id !== commentId));
  };

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const res = await axios.get("/api/admin/comment/0");
        console.log(res);
        if (res?.data?.code !== 200) return;
        setComments(res?.data?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllComments();
  }, []);

  if (!isLoading && !user?.isAdmin) navigate("/");
  if (isLoading) return null;

  return (
    <>
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      {sidebarShow && <AdminSidebar selected={"dashboard"} />}
      <Container className="admind-main">
        <div className="admind-greet">
          <div className="admind-head">Hello Admin!</div>
          <div className="admind-shead">What are you doing today ?</div>
        </div>
        <Row>
          <Col lg={8}>
            <div className="admind-ablog">
              <div className="admind-abhead">Blogs</div>
              <Blog />
              <Blog />
              <Blog />
              <div
                className="admind-show"
                onClick={() => navigate("/admin/blogs")}
              >
                show all
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="admind-comments">
              <div className="admind-chead">Comments</div>
              {comments.map((comment, id) => {
                return (
                  <Comment
                    comment={comment}
                    id={id}
                    updateCommentList={updateCommentList}
                  />
                );
              })}
              <div
                className="admind-show"
                onClick={() => navigate("/admin/comments")}
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

export default AdminDashboard;
