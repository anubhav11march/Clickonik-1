import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

function TextEditor({ setBlog, setBlogText }) {
  const handleChange = (content, delta, source, editor) => {
    setBlog(editor.getHTML());
    setBlogText(editor.getText());
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "script",
    "list",
    "bullet",
    "indent",
    "align",
    "link",
    "image",
    "video",
    "background",
  ];

  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      theme="snow"
      onChange={handleChange}
      placeholder={"Write here"}
    />
  );
}

export default TextEditor;
