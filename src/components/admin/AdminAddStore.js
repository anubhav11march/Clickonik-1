import React, { useState, useContext, useRef, useMemo } from "react";
import uploadCoupon from "../../assets/images/uploadCoupon.svg";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../common/Header";
import AdminSidebar from "../common/AdminSidebar";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";
import axios from "../../utils/axios";
import { storage } from "../../utils/firebaseConfig";
import Select from "react-select";
import countryList from "react-select-country-list";

const AdminAddStore = () => {
  const image = useRef(null);
  const [sidebarShow, setSidebarShow] = useState(false);
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [countryvalue, setCountryValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [inputData, setInputData] = useState({
    StoreName: "",
    Title: "",
    WebsiteLink: "",
    Description: "",
    Popularstore:false
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
    const { StoreName, WebsiteLink, Description} = inputData;
    if (!selectedImage) {
      alert("Add Coupon image");
      return;
    }
    if (!StoreName) {
      alert("StoreName is required Field");
      return;
    }

    if (!WebsiteLink) {
      alert("Website-Link is required Field");
      return;
    }
    if (!Description) {
      alert("Description is required Field");
      return;
    }
    if (!countryvalue) {
      alert("countryvalue is required Field");
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
    const { StoreName, WebsiteLink, Description,Popularstore } = inputData;
    const data = {
      name: StoreName,
      link: WebsiteLink,
      description: Description,
      logo: url,
      country: countryvalue?.label,
      ispopular: Popularstore
    };
    try {
      const res = await axios.post("api/admin/createstore", data);
      alert(res?.data?.message);
      navigate("/admin/coupons");
      if (res?.data?.code !== 200) return;
      navigate("/admin/coupons");
    } catch (err) {
      console.log(err);
    }
  };

  const changeHandler = (Cvalue) => {
    setCountryValue(Cvalue);
  };
  console.log(inputData.Popularstore)

const popularstore=()=>{
if (inputData.Popularstore===true){
    setInputData({Popularstore:false})
}
else{
    setInputData({Popularstore:true})
}
}


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
                          placeholder="Store Name"
                          name="StoreName"
                          value={inputData.StoreName}
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
                         <span className="coupon-input">
                        
                        <label  for="Popularstore" style={{color:'#cbcbcb'}}>Popular Store</label>&nbsp;&nbsp;&nbsp; 
                        <input
                       
                          type="checkbox"
                          placeholder="Popular store"
                          name="Popularstore"
                          
                          value={inputData.Popularstore?'true':'false'}
                          onClick={popularstore}
                          required
                         
                        />
                        </span>
                        <textarea
                          rows="5"
                          placeholder="Description"
                          onChange={handleInputs}
                          required
                          name="Description"
                          value={inputData.Description}
                          className="coupon-input"
                        />

                        <Select
                          placeholder="Select Country"
                          className="coupon-input"
                          options={options}
                          value={countryvalue}
                          onChange={changeHandler}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              neutral0: "#f1f1f1",
                            },
                          })}
                        />

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

export default AdminAddStore;
