import { useState } from "react";
import "./styles/displayArticle.css";

// eslint-disable-next-line react/prop-types
function DisplayArticle({ href }) {
  const [introExpand, setIntroExpand] = useState(false);
  const [threadExpand, setThreadExpand] = useState(false);

  const introToggle = () => {
    setIntroExpand(!introExpand);
  };

  const threadToggle = () => {
    setThreadExpand(!threadExpand);
  };

  return (
    <div className="display-article">
      <div className="article-header" onClick={introToggle}>
        <span className="toggle-icon">
          {introExpand ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </span>
        <h2 className="thread-title">Introduction</h2>
      </div>

      {introExpand && (
        <div className="intro-content">
          <p>The 4SA Method , How to bring a idea into progress ?</p>
          <a href={href}>See More</a>
        </div>
      )}

      <div className="article-header" onClick={threadToggle}>
        <span className="toggle-icon">
          {threadExpand ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </span>
        <h2 className="thread-title">Thread A</h2>
      </div>

      {threadExpand && (
        <div className="thread-content">
          <p>
            How are you going to develop your stratergy ? Which method are you
            going to use to develop a stratergy ? What if the project is
            lengthy?
          </p>
          <a href={href}>See More</a>
        </div>
      )}

      <div className="article-header" onClick={introToggle}>
        <h2 className="thread-title">Example</h2>
      </div>
      <p className="text-desc">You have a concept , How will you put into progress?</p>
    </div>
  );
}

export default DisplayArticle;
