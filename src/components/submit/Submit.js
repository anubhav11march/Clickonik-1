import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/Footer";
import Navbarr from "../common/Navbarr";
import Preview from "../common/Preview";
import { useNavigate } from "react-router-dom";
import TextEditor from "../common/TextEditor";
import "./Submit.css";
import axios from "../../utils/axios";
import { storage } from "../../utils/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Submit() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(false);
  const [blog, setBlog] = useState("");
  const [blogText, setBlogText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [aboutAuthor, setAboutAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [categorylist, setCategorylist] = useState([]);

  useEffect(() => {
    function Getcategory() {
      try {
        axios.get("api/admin/blogCategory").then((response) => {
          setCategorylist(response.data.data);
          // if (response.data.code !== 200) throw history("/blogs");
        });
      } catch (err) {
        console.log(err);
      }
    }
    Getcategory();
  }, []);

  const handleAuthorName = (e) => {
    setAuthorName(e.target.value);
  };

  const handleAboutAuthor = (e) => {
    setAboutAuthor(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    handleImageUploadandSave();
  };

  const handleImageSelect = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setSelectedImage(e.target.files[0]);
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleImageUploadandSave = () => {
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
            postGuestBlog(url);
          });
      }
    );
  };

  const postGuestBlog = async (url) => {
    const data = {
      username: authorName,
      about: aboutAuthor,
      title: title,
      category: category,
      content: blog,
      thumbnail: url,
      blogText: blogText,
    };
    try {
      const res = await axios.post("api/guest/blog", data);
      alert(res?.data?.message);
    } catch (err) {
      console.log(err);
    }
    navigate("/blogs");
  };

  useEffect(() => {
    toast.info(
      <div className="Toast-notify">
        Start Your Blogging Journey by Creating New Account on Clickonik
      </div>,
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  }, []);

  return (
    <>
      <Navbarr />
      <Container className="submit-main">
        <div className="submit-head">Submit Blog</div>
        <div className="submit-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              className="submit-input"
              required
              value={authorName}
              onChange={handleAuthorName}
            />
            <textarea
              type="text"
              rows="5"
              placeholder="About the Author"
              required
              className="submit-input"
              value={aboutAuthor}
              onChange={handleAboutAuthor}
            />
            <input
              type="text"
              placeholder="Enter Blog Title"
              required
              className="submit-input"
              value={title}
              onChange={handleTitle}
            />
            <label className="submit-sthumb">Select Thumbnail</label>
            <input
              type="file"
              placeholder="Thumbnail"
              accept="image/png, image/jpeg"
              required
              className="submit-input"
              onChange={handleImageSelect}
            />
            {previewImg && (
              <img
                src={previewImg}
                alt="thumbnail"
                className="submit-thumbnail"
              />
            )}
            <select
              required
              value={category}
              onChange={handleCategory}
              className="submit-input"
            >
              <option value="" disabled>
                Category
              </option>
              {categorylist.map((data, id) => {
                return (
                  <option value={data} key={id}>
                    {data}
                  </option>
                );
              })}
            </select>
            <TextEditor setBlog={setBlog} setBlogText={setBlogText} />
            <button className="submit-btn1" onClick={() => setPreview(true)}>
              Preview
            </button>
            <button type="submit" className="submit-btn2">
              Submit
            </button>
          </form>
        </div>
        {preview === true && (
          <Preview title={title} blog={blog} blogText={blogText} />
        )}

        <ToastContainer />
      </Container>
      <Footer />
    </>
  );
}

export default Submit;
