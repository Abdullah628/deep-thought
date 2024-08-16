import { useState } from "react";
import "./styles/threadBuild.css";
import Button from "./Button";

function ThreadBuilder() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="thread-builder">
      <div className="thread-header" onClick={toggleExpand}>
        <span className="toggle-icon">
          {isExpanded ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </span>
        <h2 className="thread-title">Thread A</h2>
      </div>

      {isExpanded && (
        <div className="thread-content">
          <div className="thread-inputs">
            <div className="input-box">
              <label>Sub thread 1</label>
              <textarea placeholder="Enter Text Here"></textarea>
            </div>

            <div className="input-box">
              <label>Sub Interpretation 1</label>
              <textarea placeholder="Enter Text Here"></textarea>
            </div>
          </div>
          <div className="thread-actions">
            <div className="icons">
              <a href=""><i className="fa-sharp fa-solid fa-lightbulb"></i></a>
              <a href=""><i className="fa-solid fa-message"></i></a>
              <a href=""><i className="fa-solid fa-file-circle-question"></i></a>
              <a href=""><i className="fa-solid fa-spa"></i></a>
    
              {/* <span role="img" aria-label="download" className="icon">
                ⬇️
              </span> */}
            </div>
            <div className="select-div">
              <select className="dropdown">
                <option>Select Category</option>
                <option>Demo 1</option>
                <option>Demo 2</option>
              </select>
              <select className="dropdown">
                <option>Select Process</option>
                <option>Demo 1</option>
                <option>Demo 2</option>
              </select>
            </div>
          </div>
          <div className="btn-div">
          <Button>+ Sub-thread</Button>
          </div>

          <div className="summary-box">
            <label >Summary For Thread A</label>
          <textarea
            placeholder="Enter Text Here"
          ></textarea>
          </div>

          
        </div>
      )}
    </div>
  );
}

export default ThreadBuilder;
