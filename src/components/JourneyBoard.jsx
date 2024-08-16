import { useState } from "react";
import "./styles/journeyBoard.css";

const projectData = {
  _id: "63b64dc9e3b230ebb60a495d",
  title: "Technical Project Management",
  description: `Have you ever thought, Pareto's Law can be applied to cooking? 
    Your thinking starts when you start thinking beyond your thinking.
    Let's prepare Sandwiches, we will use Pareto’s Law. That’s an 80-20 approach.
    80% of the time in researching, and planning and 20% of the time in implementation.`,
  tasks: [
    {
      task_id: 18882,
      task_title: "Explore the world of management",
      task_description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling, and completion.",
      assets: [
        {
          asset_id: 18883,
          asset_title: "Technical Project Management",
          asset_description:
            "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
          asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
          asset_type: "display_asset",
          asset_content_type: "video",
        },
        {
          asset_id: 18884,
          asset_title: "Threadbuild",
          asset_description:
            "Watch the video and thread build, and jot out key threads while watching that video.",
          asset_type: "input_asset",
          asset_content_type: "threadbuilder",
        },
        {
          asset_id: 18885,
          asset_title: "Structure you pointers",
          asset_description:
            "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
          asset_type: "input_asset",
          asset_content_type: "article",
        },
        {
          asset_id: 18886,
          asset_title: "4SA Method",
          asset_description: "To explore more read more",
          asset_content:
            "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
          asset_type: "display_asset",
          asset_content_type: "article",
        },
      ],
    },
  ],
};

const JourneyBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const { tasks } = projectData;

  return (
    <div className={`journey-board ${isOpen ? "open" : ""}`}>
      <div className="journey-board-heading">
        <h3>Journey Board</h3>
        <button className="toggle-button" onClick={togglePanel}>
          {isOpen ? (
            <i className="fa-solid fa-arrow-left"></i>
          ) : (
            <i className="fa-solid fa-arrow-right-long"></i>
          )}
        </button>
      </div>
      {!isOpen ? (
        <div className="placeholder-content">
          <p>1</p>
        </div>
      ) : (
        <div className="full-content">
          <ul>
            {tasks.map((task, index) => (
              <>
                <li key={index}>
                  <h3>{task.task_title}</h3>
                </li>
                {task.assets.map((asset,i)=>(
                    <li key={i}>{asset.asset_title}</li>
                ))}
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JourneyBoard;
