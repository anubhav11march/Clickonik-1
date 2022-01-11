import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Preview from "../common/Preview";
import TextEditor from "../common/TextEditor";
import "./UserPublish.css";
import axios from "../../utils/axios";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import Back from "../../assets/images/back.svg";
import { useNavigate } from "react-router-dom";
import UserContext from "../../utils/userContext";
import { storage } from "../../utils/firebaseConfig";

function UserPublish() {
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [preview, setPreview] = useState(false);
  const [blog, setBlog] = useState("");
  const [blogText, setBlogText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  if (!isLoading && !user) navigate("/");
  if (isLoading) return null;

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleImageSelect = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setSelectedImage(e.target.files[0]);
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleImageUploadandSave = (data) => {
    const uploadTask = storage
      .ref(`images/blog-thumbnail/${selectedImage.name}-${selectedImage.size}`)
      .put(selectedImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images/blog-thumbnail")
          .child(`${selectedImage.name}-${selectedImage.size}`)
          .getDownloadURL()
          .then((url) => {
            // setuploadedImageUrl(url);
            data.thumbnail = url;
            postUserBlog(data);
          });
      }
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("please select title");
      return;
    }
    if (!selectedImage) {
      alert("please select thumbnail");
      return;
    }
    if (!category) {
      alert("please add category");
      return;
    }
    if (!blog) {
      alert("please add blog content");
      return;
    }
    const data = {
      title: title,
      category: category,
      content: blog,
      blogText: blogText,
    };
    handleImageUploadandSave(data);
  };

  const handleDraft = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      category: category,
      content: blog,
      blogText: blogText,
      isDraft: true,
    };
    handleImageUploadandSave(data);
  };
  const previewBlog = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  const postUserBlog = async (data) => {
    try {
      const res = await axios.post("api/user/blog", data);
      // console.log(res);
      alert(res?.data?.message);
    } catch (err) {
      console.log(err);
    }
    navigate('/blogs')
  };

  return (
    <>
      <Header setSidebarShow={setSidebarShow} sidebarShow={sidebarShow} />
      {sidebarShow && <Sidebar selected={"blogs"} />}
      <Container className="publish-main">
        <img
          src={Back}
          alt="back"
          className="publish-back"
          onClick={() => navigate("/user/blogs")}
        />
        <span className="publish-head">Publish Blog</span>
        <div className="publish-form">
          <form>
            <input
              type="text"
              placeholder="Enter Blog Title"
              required
              className="publish-input"
              value={title}
              onChange={handleTitle}
            />
            <label className="publish-sthumb">Select Thumbnail</label>
            <input
              type="file"
              placeholder="Thumbnail"
              accept="image/png, image/jpeg"
              required
              className="publish-input"
              onChange={handleImageSelect}
            />
            {previewImg && (
              <img
                src={previewImg}
                alt="thumbnail"
                className="publish-thumbnail"
              />
            )}
            <select
              value={category}
              onChange={handleCategory}
              className="publish-input"
              required
            >
              <option value="" disabled>
                Category
              </option>
              <option value="Technology">Technology</option>
              <option value="Scifi">Scifi</option>
              <option value="Educational">Educational</option>
              <option value="Horror">Horror</option>
              <option value="Drama">Drama</option>
              <option value="Kids">Kids</option>
            </select>
            <TextEditor setBlog={setBlog} setBlogText={setBlogText} />
            <button className="publish-btn1" onClick={handleDraft}>
              Save as Draft
            </button>
            <button className="publish-btn1" onClick={previewBlog}>
              Preview
            </button>
            <button
              type="submit"
              className="publish-btn2"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        {preview === true && (
          <Preview title={title} blog={blog} blogText={blogText} />
        )}
      </Container>
      <Footer />
    </>
  );
}

export default UserPublish;
