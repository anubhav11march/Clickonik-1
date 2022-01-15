import React, { useState, useContext, useEffect, useRef } from "react";
import "./AdminAddCoupons.css";
import uploadCoupon from "../../assets/images/uploadCoupon.svg";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../common/Header";
import AdminSidebar from "../common/AdminSidebar";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";
import axios from "../../utils/axios";
import { storage } from "../../utils/firebaseConfig";

const AdminAddCoupons = () => {
  const image = useRef(null);
  const [sidebarShow, setSidebarShow] = useState(false);
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [inputData, setInputData] = useState({
    BrandName: "",
    Title: "",
    WebsiteLink: "",
    Bio: "",
    From: "",
    To: "",
    Couponcode: "",
    Deal: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  if (!isLoading && !user?.isAdmin) navigate("/");
  if (isLoading) return null;
  const handleClick = () => {
    image.current.click();
  };

  const handleImageSelect = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setSelectedImage(e.target.files[0]);
    URL.createObjectURL(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleImageUploadAndSave = (e) => {
    e.preventDefault();
    const { BrandName, Title, WebsiteLink, Bio, Couponcode, Deal, From, To } =
      inputData;
    if (!selectedImage) {
      alert("Add Coupon image");
      return;
    }
    if (!BrandName) {
      alert("BrandName is required Field");
      return;
    }
    if (!Title) {
      alert("Title is required Field");
      return;
    }
    if (!WebsiteLink) {
      alert("Website-Link is required Field");
      return;
    }
    if (!Bio) {
      alert("Bio is required Field");
      return;
    }
    if (!Couponcode) {
      alert("Coupon-Code is required Field");
      return;
    }
    if (!Deal) {
      alert("Deal is required Field");
      return;
    }
    if (!From) {
      alert("From is required Field");
      return;
    }
    if (!To) {
      alert("To is required Field");
      return;
    } else {
      const uploadTask = storage
        .ref(`images/avatar/${selectedImage.name}-${selectedImage.size}`)
        .put(selectedImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images/avatar")
            .child(`${selectedImage.name}-${selectedImage.size}`)
            .getDownloadURL()
            .then((url) => {
              handleSave(url);
            });
        }
      );
    }
  };

  const handleSave = async (url) => {
    const { BrandName, Title, WebsiteLink, Bio, Couponcode, Deal, From, To } =
      inputData;
    const data = {
      brandName: BrandName,
      title: Title,
      websiteLink: WebsiteLink,
      bio: Bio,
      couponCode: Couponcode,
      deal: Deal,
      image: url,
      from: From,
      to: To,
    };
    try {
      const res = await axios.post("api/admin/coupon", data);
      alert(res?.data?.message);
      if (res?.data?.code !== 200) return;
      navigate("/admin/coupons");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      {sidebarShow && <AdminSidebar selected={"coupons"} />}
      <Container className="adminv-main">
        <div className="adminv-greet">
          <div className="adminv-head">Hello Admin!</div>
          <div className="adminv-shead">What are you doing today ?</div>
          <div className="adminb-ablog">
            <div className="adminb-gu">
              <Container className="coupon-main">
                <Row>
                  <Col lg={2} className="order-lg-2">
                    <div className="userp-sec1" onClick={() => handleClick}>
                      {preview == null ? (
                        <img
                          src={uploadCoupon}
                          alt="uploadCoupon"
                          className="coupon-img"
                        />
                      ) : (
                        <img
                          src={preview}
                          alt="uploadCoupon"
                          className="coupon-img"
                        />
                      )}
                      <span className="upload-txt"> Upload Image</span>

                      <input
                        type="file"
                        ref={image}
                        accept="image/png, image/jpeg"
                        className="selector-image"
                        onChange={handleImageSelect}
                      />
                    </div>
                  </Col>
                  <Col lg={10} className="order-lg-2">
                    <div className="coupon-form">
                      <form>
                        <input
                          type="text"
                          placeholder="Brand Name"
                          name="BrandName"
                          value={inputData.BrandName}
                          onChange={handleInputs}
                          required
                          className="coupon-input"
                        />
                        <input
                          type="text"
                          placeholder="Title"
                          name="Title"
                          value={inputData.Title}
                          onChange={handleInputs}
                          required
                          className="coupon-input"
                        />
                        <input
                          type="text"
                          placeholder="Website Link"
                          name="WebsiteLink"
                          value={inputData.WebsiteLink}
                          onChange={handleInputs}
                          required
                          className="coupon-input"
                        />
                        <textarea
                          rows="5"
                          placeholder="Bio"
                          onChange={handleInputs}
                          required
                          name="Bio"
                          value={inputData.Bio}
                          className="coupon-input"
                        />
                        <div className="From-to-input">
                          <input
                            className="mb-4"
                            type="date"
                            // placeholder="From (yyyy-mm-dd)"
                            name="From"
                            value={inputData.From}
                            onChange={handleInputs}
                            required
                            className="coupon-input"
                          />
                          <input
                            className="mb-4"
                            type="date"
                            // placeholder="To (yyyy-mm-dd)"
                            name="To"
                            value={inputData.To}
                            onChange={handleInputs}
                            required
                            className="coupon-input"
                          />
                          <input
                            className="mb-4"
                            type="text"
                            placeholder="Coupon Code"
                            name="Couponcode"
                            value={inputData.Couponcode}
                            onChange={handleInputs}
                            required
                            className="coupon-input"
                          />{" "}
                          <input
                            className="mb-4"
                            type="text"
                            placeholder="Deal"
                            name="Deal"
                            value={inputData.deal}
                            onChange={handleInputs}
                            required
                            className="coupon-input"
                          />
                        </div>
                        <button
                          type="submit"
                          className="coupon-btn"
                          onClick={handleImageUploadAndSave}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AdminAddCoupons;
