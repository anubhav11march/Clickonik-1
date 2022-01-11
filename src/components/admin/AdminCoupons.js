import React, { useState, useContext, useEffect } from "react";
import { Container, Button, Form, FormControl } from "react-bootstrap";
import "./AdminCoupons.css";
import Header from "../common/Header";
import AdminSidebar from "../common/AdminSidebar";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";
import axios from "../../utils/axios";
import AdminCouponCard from "../admin/AdminCouponCard";
import AdminExpireCard from "../admin/AdminExpireCard";

const AdminCoupons = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);
  const [verifyreq, setVerifyreq] = useState();

  // const rejectbtn = async (reject_id) => {
  //   try {
  //     const res = await axios.delete(
  //       `api/admin/requestVerification/${reject_id}`
  //     );
  //     if (res?.data?.code !== 200) {
  //       alert(res?.data?.message);
  //       return;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   if (updatestate === 0) {
  //     setUpdatestate(1);
  //   } else {
  //     setUpdatestate(0);
  //   }
  // };
  //     const GetreqData = () => {
  //       try {
  //         axios
  //           .get("api/admin/coupon")
  //           .then((response) => {
  //             setVerifyreq(response.data);
  //           });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  // console.log(verifyreq)
  //     useEffect(() => {
  //       GetreqData();
  //     }, []);

  // useEffect(() => {
  //   GetreqData();
  // }, [updatestate]);

  if (!isLoading && !user?.isAdmin) navigate("/");
  if (isLoading) return null;

  return (
    <>
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      {sidebarShow && <AdminSidebar selected={"coupons"} />}
      <Container className="adminv-main">
        <div className="adminv-greet">
          <div className="adminv-head">Hello Admin!</div>
          <div className="adminv-shead">What are you doing today ?</div>
          <div className="serch-head">
            <Button
              variant="primary"
              onClick={() => navigate("/admin/addcoupons")}
              className="btn-New"
            >
              Add New Coupon
            </Button>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="search-input"
                aria-label="Search"
              />
              <div className="search-icon">
                {" "}
                <IoSearchOutline />
              </div>
            </Form>
          </div>
          <div className="Trend-text">Trending Coupons</div>
        </div>
        <div className="adminv-card">
          <AdminCouponCard />
        </div>
        <div className="Trend-text">Active Coupons</div>
        <div className="adminv-card">
          <AdminCouponCard />
        </div>
        <div className="Trend-text">Expired Coupons</div>
        <div className="adminv-card">
          <AdminExpireCard />
        </div>
      </Container>
    </>
  );
};

export default AdminCoupons;
