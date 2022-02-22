import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./AdminCategories.css";
import { BsFillCheckSquareFill, BsFillSquareFill } from "react-icons/bs";

import Header from "../common/Header";
import AdminSidebar from "../common/AdminSidebar";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";
import axios from "../../utils/axios";

const AdminCategories = () => {
  const navigate = useNavigate();
  const [sidebarShow, setSidebarShow] = useState(false);
  const { user, isLoading } = useContext(UserContext);
  const [state, setState] = useState(true);
  const [post, setPost] = useState(false);
  const [color, setColor] = useState();
  const [show, setShow] = useState(false);
  const [showsub, setShowsub] = useState(false);
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [inputsub, setInputsub] = useState("");
  const [remove, setRemove] = useState();
  const [subc, setSub] = useState([]);
  const [subarray, setSubarray] = useState([]);
  const [Modalshow, setModalShow] = useState(false);
  const [postsub, setPostsub] = useState(false);
  const [alldata, setAlldata] = useState([]);
  const [removesub, setRemovesub] = useState("");
  useEffect(() => {
    function Getcategory() {
      try {
        axios.get("api/admin/blogCategory").then((response) => {
          let newdata = response?.data?.data;
          setList(newdata.map((data) => data.category));
          setSub(response.data.data);
          setAlldata(response.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
    Getcategory();
  }, []);

  const ShowEdit = () => {
    setColor();
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const ShowSubEdit = () => {
    setColor();
    if (showsub === true) {
      setShowsub(false);
    } else {
      setShowsub(true);
    }
  };

  const update = (e, data) => {
    color === e ? setColor() : setColor(e);
    setRemove(data);
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };
  const updatesub = (e, data) => {
    color === e ? setColor() : setColor(e);
    setRemovesub(data);
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const SaveChanges = async () => {
    if (input.length !== 0) {
      setList([...list, input]);
    }
    setShow(false);
    setPost(true);
    setInput("");
    if (color) {
      function Delete() {
        setList(list.filter((list) => remove !== list));
      }
      Delete();
    }
  };

  useEffect(() => {
    if (post === true) {
      setPost(false);
      const data = {
        blogCategory: list,
      };

      try {
        const res = axios.post("api/admin/blogCategory", data);
        if (res?.data?.code !== 200) return;
      } catch (err) {
        console.log(err);
      }
    }
  }, [post]);

  useEffect(() => {
    if (Modalshow === true) {
      setSub(subc?.filter((list) => list.category === remove));
      let news = subc?.filter((list) => list.category === remove);
      setSubarray(news[0]?.subcategory);
    } else {
      try {
        axios.get("api/admin/blogCategory").then((response) => {
          let newdata = response?.data?.data;
          setList(newdata.map((data) => data.category));
          setSub(response.data.data);
          setAlldata(response.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [Modalshow]);

  // console.log(subc[0].map((data)=>data.subcategory))
  const SaveEditChanges = () => {
    if (inputsub.length !==0 ) {
      setSubarray([...subarray, inputsub]);
    }
    setShowsub(false);
    setInputsub("");
    if (removesub) {
      function Delete() {
        setSubarray(subarray?.filter((sub) => removesub !== sub));
      }
      Delete();
    }


    const data = {
      category: remove,
      subcategory: subarray,
    };
    try {
      const res = axios.post("api/admin/addblogsubcategory", data);
      if (res?.data?.code !== 200) return;
    } catch (err) {
      console.log(err);
    }
    setInputsub("");

    // setModalShow(false);

  };



  const handleShow = () => setModalShow(true);

  if (!isLoading && !user?.isAdmin) navigate("/");
  if (isLoading) return null;

  return (
    <>
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      {sidebarShow && <AdminSidebar selected={"categories"} />}
      <Container className="adminc-main">
        <div className="adminc-greet">
          <div className="adminc-head">Hello Admin!</div>
          <div className="adminc-shead">What are you doing today ?</div>
        </div>

        <div className="adminc-categories">
          <button
            onClick={ShowEdit}
            className={show === true ? "edit-category" : "edit-category-btn"}
          >
            Edit
          </button>
          <Row>
            {list?.map((data, id) => {
              return (
                <Col>
                  {" "}
                  <li className="list-name" onClick={() => update(id, data)}>
                    {show === true ? (
                      id === color ? (
                        <BsFillSquareFill
                          style={{ border: "2px solid #28318C", color: "#fff" }}
                        />
                      ) : (
                        <BsFillCheckSquareFill
                          style={{ backgroundColor: "#fff", color: "#28318C" }}
                        />
                      )
                    ) : (
                      ""
                    )}
                    {show === false ? (
                      <Button
                        clasName="sub-category"
                        onClick={handleShow}
                        Title="Add sub-category"
                        variant="success"
                      >
                        Add
                      </Button>
                    ) : (
                      ""
                    )}
                    &nbsp;{data}
                  </li>
                </Col>
              );
            })}
          </Row>
          <Modal
            show={Modalshow}
            onHide={() => {
              setModalShow(false);
            }}
          >
            <Modal.Header closeButton>
              <h2>Category: {remove}</h2>
              <button
                onClick={ShowSubEdit}
                className={
                  showsub === true ? "edit-subcategory" : "edit-subcategory-btn"
                }
              >
                Edit
              </button>
            </Modal.Header>
            <Modal.Body>
              {/* SUBCATEGORY */}
              {/* <Row> */}
              <ul
                style={{
                  listStyle: "none",
                  columns: 2,
                  webKitColumns: 2,
                  mozColumns: 2,
                  margin: "20px",
                  padding: "10px",
                }}
              >
                {subarray?.map((data, id) => {
                  return (
                    // <Col>
                    <>
                      <li
                        className="list-subcat"
                        onClick={(e) => updatesub(id, data)}
                      >
                        {showsub === true ? (
                          id === color ? (
                            <BsFillSquareFill
                              style={{
                                border: "2px solid #28318C",
                                color: "#fff",
                              }}
                            />
                          ) : (
                            <>
                              <BsFillCheckSquareFill
                                style={{
                                  backgroundColor: "#fff",
                                  color: "#28318C",
                                }}
                              />
                            </>
                          )
                        ) : (
                          ""
                        )}
                        &nbsp;{data}
                      </li>
                    </>
                  );
                })}
              </ul>
              <input
                style={{ fontSize: "17px", width: "90%", marginLeft: "22px" }}
                className="input-category"
                placeholder="Add New Category"
                type="text"
                value={inputsub}
                onChange={(e) => setInputsub(e.target.value)}
                name="inputsub"
              />
              {/* </Row> */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={SaveEditChanges}>
                Save Changess
              </Button>
            </Modal.Footer>
          </Modal>
          <Row>
            <Col>
              <div className="input-groupc">
                <div className="adminc-input">
                  {show === false ? (
                    <>
                      <BsFillSquareFill style={{ color: "#fff" }} />
                    </>
                  ) : (
                    <>
                      <BsFillCheckSquareFill
                        style={{ backgroundColor: "#fff", color: "#28318C" }}
                      />
                      <input
                        className="input-category"
                        placeholder="Add New Category"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        name="input"
                      />
                    </>
                  )}
                </div>
                {show === true ? (
                  <div className="save-category-btn">
                    <Button variant="primary" onClick={SaveChanges}>
                      Save Changes
                    </Button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default AdminCategories;
