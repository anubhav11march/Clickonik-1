import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [remove, setRemove] = useState();

  useEffect(() => {
    function Getcategory() {
      try {
        axios.get("api/admin/blogCategory").then((response) => {
          setList(response.data.data);
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
  const update = (e, data) => {
    color === e ? setColor() : setColor(e);
    setRemove(data);
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
    if(color){
    function Delete() {
      setList(list.filter((list) => remove !== list));
    }
    Delete();}
  };

  useEffect(() => {
    if (post === true) {
      const data = {
        blogCategory: list,
      };
      try {
        const res = axios.post("api/admin/blogCategory", data);
        if (res?.data?.code !== 200) return;
      } catch (err) {
        console.log(err);
      }
      alert('Blog Category updated')
    }
    setPost(false);
  }, [post]);

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
            {list.map((data, id) => {
              return (
                <Col>
                  {" "}
                  <li className="list-name" onClick={(e) => update(id, data)}>
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
                    &nbsp;{data}
                  </li>
                </Col>
              );
            })}
          </Row>
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
                    {/* <Button variant="primary" onClick={Upload}>
                      Upload
                    </Button> */}
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
