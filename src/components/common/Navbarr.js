import React, { useState, useContext } from "react";
import "./Navbarr.css";
import Logo from "../../assets/images/Brand-icon.svg";
// import Menu from "../../assets/images/Hamberger-menu.svg";
import { Navbar, Container, Nav, Modal, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Close from "../../assets/images/close.svg";
import SignIn from "../../assets/images/signIn.svg";
import SignUp from "../../assets/images/signUp.svg";
import Google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/sfacebook.svg";
import User from "../../assets/images/user.svg";
import { signInWithGoogle } from "../../utils/firebaseAuth";
import axios from "../../utils/axios";
import UserContext from "../../utils/userContext";

function Navbarr() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  // console.log(user);
  const postSignUpWithGoogle = async (accessToken) => {
    const data = {
      signupType: "gmail",
      firebaseToken: accessToken,
    };
    // console.log(data);
    try {
      const res = await axios.post("api/user/signup", data);
      if (res?.data?.code !== 200) {
        alert(res?.data?.message);
        return;
      }
      navigate("/user/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const postSignInWithGoogle = async (accessToken) => {
    const data = {
      signinType: "gmail",
      firebaseToken: accessToken,
    };
    // console.log(data);
    try {
      const res = await axios.post("api/user/signin", data);
      if (res?.data?.code !== 200) {
        alert(res?.data?.message);
        return;
      }
      setUser(res?.data?.data);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const postSingupWithEmail = async () => {
    const data = {
      signupType: "email",
      userId: email,
      password: password,
    };
    try {
      const res = await axios.post("api/user/signup", data);
      // console.log(res);
      alert(res?.data?.message);
    } catch (err) {
      console.log(err);
    }
  };

  const postSinginWithEmail = async () => {
    handleClose();
    const data = {
      signinType: "email",
      userId: email,
      password: password,
    };
    try {
      const res = await axios.post("api/user/signin", data);
      // console.log(res);
      if (res?.data?.code !== 200) {
        alert(res?.data?.message);
        return;
      }
      setUser(res?.data?.data);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => setShow(false);

  const handleClick = () => {
    setSignIn(!signIn);
  };

  const handleShow = () => {
    setShow(true);
    setSignIn(true);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const resetInputFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    postSingupWithEmail();
    resetInputFields();
  };

  const handleSignin = (e) => {
    e.preventDefault();
    postSinginWithEmail();
    resetInputFields();
  };

  const handleGoogleSignUp = async () => {
    try {
      const accessToken = await signInWithGoogle();
      postSignUpWithGoogle(accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const accessToken = await signInWithGoogle();
      postSignInWithGoogle(accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar
      collapseOnSelect
      className="nav-main"
      expand="lg"
      fixed="top"
      id="navbar"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" /> Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink className="nav-link nav-padding" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link nav-padding" to="/blogs">
              Blogs
            </NavLink>
            {/* <NavLink className="nav-link nav-padding" to="/categories">
              Categories
            </NavLink> */}
            <NavLink className="nav-link nav-padding" to="/coupons">
              Coupons
            </NavLink>
            <NavLink className="nav-link nav-padding" to="/contact">
              Contact Us
            </NavLink>
            {console.log(user)}
            {!user?( <NavLink className="nav-link nav-padding" to="/submit">
              Submit Blog
            </NavLink>):(<NavLink className="nav-link nav-padding" to="/user/publish">
              Submit Blog
            </NavLink>)}
            {!user ? (
              <NavLink
                className="nav-link nav-padding nav-menu"
                onClick={handleShow}
                to="#"
              >
                Sign In
              </NavLink>
            ) : (
              <NavLink
                className="nav-link nav-padding nav-avatar"
                to={`${user?.isAdmin ? "/admin/dashboard" : "/user/dashboard"}`}
              >
                <img
                  src={user?.profile || User}
                  alt="user"
                  className="nav-aimg"
                />
                <span>
                  {user?.username
                    ? user?.username
                    : user?.isAdmin
                    ? "Admin"
                    : "Username"}
                </span>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <Container className="nav-cont">
              {signIn === true ? (
                <Row>
                  <Col lg={6} className="nav-remove">
                    <img src={SignIn} alt="signIn" className="nav-img" />
                  </Col>
                  <Col md={12} lg={6} className="nav-col">
                    <img
                      src={Close}
                      alt="close"
                      onClick={handleClose}
                      className="nav-close"
                    />
                    <div className="nav-signin">
                      <div className="nav-head">Sign In</div>
                      <div className="nav-subhead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                      <form className="nav-form" onSubmit={handleSignin}>
                        <input
                          type="email"
                          placeholder="Enter Email id"
                          className="nav-input"
                          onChange={handleEmail}
                          value={email}
                        />
                        <input
                          type="password"
                          placeholder="Enter Password"
                          className="nav-input"
                          onChange={handlePassword}
                          value={password}
                        />
                        <button type="submit" className="nav-sbtn">
                          Sign In
                        </button>
                      </form>
                      <div className="nav-other">
                        Do not have an account ?
                        <span onClick={handleClick}> Sign Up</span>
                      </div>
                      <hr />
                      <div className="nav-gdiv" onClick={handleGoogleSignIn}>
                        <img src={Google} alt="google" className="nav-google" />
                        Sign in with Google
                      </div>
                      <div className="nav-fdiv">
                        <img
                          src={Facebook}
                          alt="facebook"
                          className="nav-facebook"
                        />
                        Sign in with Facebook
                      </div>
                    </div>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col lg={6} className="nav-remove">
                    <img src={SignUp} alt="signUp" className="nav-img" />
                  </Col>
                  <Col md={12} lg={6} className="nav-col">
                    <img
                      src={Close}
                      alt="close"
                      onClick={handleClose}
                      className="nav-close"
                    />
                    <div className="nav-signin">
                      <div className="nav-head">Sign Up</div>
                      <div className="nav-subhead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                      <form className="nav-form" onSubmit={handleSignup}>
                        <input
                          type="email"
                          placeholder="Enter Email id"
                          className="nav-input"
                          onChange={handleEmail}
                          value={email}
                        />
                        <input
                          type="password"
                          placeholder="Enter Password"
                          className="nav-input"
                          onChange={handlePassword}
                          value={password}
                        />
                        <button type="submit" className="nav-sbtn">
                          Sign Up
                        </button>
                      </form>
                      <div className="nav-other">
                        Already have an account ?
                        <span onClick={handleClick}> Sign In</span>
                      </div>
                      <hr />
                      <div className="nav-gdiv" onClick={handleGoogleSignUp}>
                        <img src={Google} alt="google" className="nav-google" />
                        Sign Up with Google
                      </div>
                      <div className="nav-fdiv">
                        <img
                          src={Facebook}
                          alt="facebook"
                          className="nav-facebook"
                        />
                        Sign Up with Facebook
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
            </Container>
          </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
