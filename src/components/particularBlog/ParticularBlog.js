import React, { useState, useEffect } from "react";
import "./ParticularBlog.css";
import Parser from "html-react-parser";
import Back from "../../assets/images/back.svg";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";
import Whatsapp from "../../assets/images/whatsapp.svg";
import Share from "../../assets/images/share.svg";
import Views from "../../assets/images/views.svg";
// import Blog from "../../assets/images/blog.svg";
import Play from "../../assets/images/play.svg";
import Close from "../../assets/images/close.svg";
import { Container, Row, Col } from "react-bootstrap";
import About from "./About";
import Recommend from "./Recommend";
import Navbarr from "../common/Navbarr";
import Footer from "../common/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import Comments from "./Comments";
import axios from "../../utils/axios";

function ParticularBlog() {
  const history = useNavigate();
  const location = useLocation();
  const { blog_id } = location.state;
  const [play, setPlay] = useState(false);
  const [speak, setSpeak] = useState(false);
  const [userdata, setUserData] = useState(null);
  const GetBlog = () => {
    try {
      axios.get(`api/user/blog/${blog_id}`).then((response) => {
        setUserData(response.data);
        if (response.data.code !== 200) throw history("/blogs");
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetBlog();
  }, []);
  console.log(userdata?.data);
  var ProfileRating = userdata?.data?.userId?.ratings?.avg;
  useEffect(() => {
    if (speak) {
      handleSpeak();
    } else {
      window.speechSynthesis.cancel();
    }
  }, [speak]);
  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    const text = userdata?.data?.content;
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = synth.getVoices()[6];
    utterThis.onstart = () => {
      setPlay(true);
    };
    utterThis.onend = () => {
      setPlay(false);
      setSpeak(false);
    };
    synth.speak(utterThis);
  };

  return (
    <>
      <Navbarr />
      <Container className="pb-main">
        <Row>
          <Col lg={8}>
            <div className="pb-sec1">
              <div className="pb-left">{userdata?.data?.title}</div>
              <span className="pb-right">
                <img
                  src={Back}
                  alt="back"
                  className="pb-back"
                  Title="Go Back"
                  onClick={() => history("/blogs")}
                />
              </span>
            </div>

            <div className="pb-sec2">
              <div className="pb-left">
                Share via
                <span>
                  <img src={Facebook} alt="facebook" className="pb-sm" />
                </span>
                <span>
                  <img src={Instagram} alt="instagram" className="pb-sm" />
                </span>
                <span>
                  <img src={Twitter} alt="twitter" className="pb-sm" />
                </span>
                <span>
                  <img src={Whatsapp} alt="whatsapp" className="pb-sm" />
                </span>
              </div>
              <div className="pb-right">
                <span>
                  <img src={Views} alt="views" className="pb-sm" />
                </span>
                {userdata?.data?.viewCount}
                <span>
                  <img src={Share} alt="share" className="pb-sm" />
                </span>
                {userdata?.data?.shareCount}
              </div>
            </div>
            <div className="pb-sec3">
              <span>Listen to this blog</span>
              {!play ? (
                <img src={Play} alt="play" onClick={() => setSpeak(true)} />
              ) : (
                <img src={Close} alt="close" onClick={() => setSpeak(false)} />
              )}
            </div>
            <div className="pb-writing"></div>
            {userdata?.data?.thumbnail.length > 0 ? (
              <img
                src={userdata?.data?.thumbnail}
                alt="blog"
                className="pb-img"
              />
            ) : (
              ""
            )}

            <div className="pb-writing">
              {!userdata?.data?.blogText
                ? ""
                : Parser(userdata?.data?.blogText)}
            </div>

            <About
              BlogId={userdata?.data?._id}
              userId={userdata?.data?.userId?._id}
              userProfileRating={ProfileRating?.toFixed(1)}
              Image={userdata?.data?.userId?.profile}
              Name={
                userdata?.data?.isGuest === false
                  ? userdata?.data?.userId?.username
                  : userdata?.data?.username
              }
              About={
                userdata?.data?.isGuest === false
                  ? userdata?.data?.userId?.about
                  : userdata?.data?.about
              }
              verified={
                userdata?.data?.isGuest === false
                  ? userdata?.data?.userId?.isverified
                  : false
              }
            />
            <Comments BlogId={userdata?.data?._id} />
          </Col>
          <Col lg={4}>
            <Recommend />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ParticularBlog;
