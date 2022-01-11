import React, { useState, useContext, useEffect } from "react";
import "./About.css";
import User from "../../assets/images/user.svg";
import BlueStar from "../../assets/images/blueStar.svg";
import ReactStars from "react-rating-stars-component";
import Tick from "../../assets/images/tick.svg";
import UserContext from "../../utils/userContext";
import axios from "../../utils/axios";

function About(props) {
  const { user } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [update, setUpdate] = useState(false);

  const postGuestComment = async (data) => {
    try {
      const res = await axios.post("api/guest/comment", data);
      alert(res?.data?.message);
    } catch (err) {
      console.log(err);
    }
  };

  const postUserComment = async (data) => {
    try {
      const res = await axios.post("api/user/comment", data);
      alert(res?.data?.message);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    const data = {
      blogId: "61c2098a1d7d65f2d91e158c",
      comment,
    };
    setComment("");
    if (user) {
      postUserComment(data);
      return;
    }
    data.username = username;
    postGuestComment(data);
    setUsername("");
  };

  const userRating = {
    size: 50,
    count: 5,
    isHalf: false,
    value: 0,
    color: "#DFDFDF",
    activeColor: "#4468e2",
    onChange: (newValue) => {
      setRating(newValue);
      setUpdate(true);
    },
  };

  const postRating = async () => {
    const data = {
      userId: "61d3bdb8ce9cd427685091ac",
      ratings: rating,
    };
    try {
      const res = await axios.post("api/user/ratings", data);
      alert(res?.data?.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (update === true) {
      postRating();
    }
  }, [update]);

  return (
    <div className="about-main">
      <div className="about-author about-heading">
        <span>About</span> Author
      </div>
      <div className="about-detail">
        <img
          src={props.Image ? props.Image : User}
          alt="user"
          className="about-left"
        />
        <div className="about-right">
          <div className="about-upper">
            <div className="about-username">
              {props.Name}
              {props.verified === false ? (
                ""
              ) : (
                <img src={Tick} alt="tick" className="about-tick" />
              )}
            </div>
            <div className="about-star">
              <img src={BlueStar} alt="star" />

              <img src={BlueStar} alt="star" />

              <img src={BlueStar} alt="star" />

              <img src={BlueStar} alt="star" />

              <img src={BlueStar} alt="star" />
            </div>
          </div>
          <div className="about-lower">{props.About}</div>
        </div>
      </div>
      <div className="about-heading">
        What do<span> you think</span> ?
      </div>
      <div className="about-rate">
        <ReactStars {...userRating} />
      </div>
      <div className="about-heading">
        Leave a <span> Comment</span>
        <div className="about-comment">
          {!user && (
            <input
              type="text"
              placeholder="Enter Name"
              value={username}
              onChange={handleUsername}
              required
            />
          )}
          <textarea
            rows="5"
            placeholder="Comment"
            value={comment}
            onChange={handleComment}
            required
          />
          <button onClick={handleSubmit}>Post Comment</button>
        </div>
      </div>
    </div>
  );
}

export default About;
