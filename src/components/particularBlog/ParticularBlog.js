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
import { useNavigate } from "react-router-dom";
import Comments from "./Comments";
import axios from "../../utils/axios";

function ParticularBlog() {
  const history = useNavigate();
  const [play, setPlay] = useState(false);
  const [speak, setSpeak] = useState(false);
  const [userdata, setUserData] = useState(null);

 const GetBlog=()=>{
  try {
    axios.get("api/user/blog/61d3c417e08a45be3450bc28").then((response) => {
      setUserData(response.data);
      console.log(response.data);
      if(response.data.code !==200) throw history("/blogs");
    });
  } catch (err) {
    console.log(err);
   
  }
console.log(userdata)
}
 
  useEffect(() => {
    GetBlog();
   

  }, []);
 


  useEffect(() => {
    if (speak) {
      handleSpeak();
    } else {
      window.speechSynthesis.cancel();
    }
  }, [speak]);
  // var happy = JSON.stringify(userdata?.data?.content);
  // happy = happy?.replaceAll(/ *\([<p>^<p>]*\) */g, "");
  console.log(userdata?.data);
  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    const text = userdata?.data?.content;
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = synth.getVoices()[6];
    utterThis.onstart = () => {
      // console.log("utter start");
      setPlay(true);
    };
    utterThis.onend = () => {
      // console.log("utter end");
      setPlay(false);
      setSpeak(false);
    };
    synth.speak(utterThis);
  };

  if (!userdata) return null;
  else{
    return (
      <>
        <Navbarr />
        <Container className="pb-main">
          <Row>
            <Col lg={8}>
              <div className="pb-sec1">
                <span>
                  <img
                    src={Back}
                    alt="back"
                    className="pb-back"
                    onClick={() => history("/blogs")}
                  />
                </span>
                {userdata?.data?.title}
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
                  102
                  <span>
                    <img src={Share} alt="share" className="pb-sm" />
                  </span>
                  14
                </div>
              </div>
              <div className="pb-sec3">
                <span>Listen to this blog</span>
                {!play ? (
                  <img src={Play} alt="play" onClick={() => setSpeak(true)} />
                ) : (
                  <img
                    src={Close}
                    alt="close"
                    onClick={() => setSpeak(false)}
                  />
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
                {!userdata?.data?.blogText?"":Parser(userdata?.data?.blogText)}
              </div>
              {/* <img src={Blog} alt="blog" className="pb-img" />
            <div className="pb-writing">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
              sed massa orci non tempor etiam dapibus mattis. Eget suspendisse
              ullamcorper varius magna lorem. Egestas et netus venenatis
              facilisis sagittis. Amet, at vulputate ut varius etiam.
              <br />
              <br /> Dolor purus amet, fringilla mi bibendum sit morbi sit eu.
              Massa condimentum donec vulputate amet, quis est tempor. Accumsan
              tincidunt blandit sed rhoncus neque cras dolor, magna quis. Enim,
              dui blandit aliquet elementum. Pulvinar ultrices maecenas pulvinar
              semper dui. Et, sit suspendisse aliquet parturient. Bibendum
              maecenas eleifend sed aliquam quis egestas orci.
            </div> */}
            {console.log()}
              <About
                Image={userdata?.data?.userId?.profile}
                Name={userdata?.data?.isGuest===false?userdata?.data?.userId?.username:userdata?.data?.username}
                About={userdata?.data?.isGuest===false?userdata?.data?.userId?.about:userdata?.data?.about}
                verified={userdata?.data?.isGuest===false?userdata?.data?.userId?.isverified:false}
              />
              <Comments />
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

}
export default ParticularBlog;
