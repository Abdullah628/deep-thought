import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "./styles/inputArticle.css";

function InputArticle() {
  const [title, setTitle] = useState("");

  return (
    <div className="input-article">
       
      <div className="input-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title here"
          className="title-input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="content">Content</label>
        <div className="content-editor">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Insert</span>
          <span>Format</span>
          <span>Tools</span>
          <span>Table</span>
          <span>Help</span>
          <span>icon</span>
          <span>icon</span>
          <span>icon</span>
          <span>paragraph</span>
          <span>icon</span>
        </div>
        <textarea name="text" placeholder="Write Text Here" id=""></textarea>
      </div>
    </div>
  );
}

export default InputArticle;
