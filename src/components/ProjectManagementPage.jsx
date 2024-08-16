import "./styles/projectMangement.css";
import ProjectHeader from "./ProjectHeader";
import VideoContent from "./VideoContent";
import ThreadBuild from "./ThreadBuilder";
import InputArticle from "./InputArticle";
import DisplayArticle from "./DisplayArticle";
import Footer from "./Footer";
import JourneyBoard from "./JourneyBoard";
import NoticeBoard from "./NoticeBoard";

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

const ProjectManagementPage =()=> {
  const { title, tasks } = projectData;

  return (
    <>    
    <JourneyBoard />
    <NoticeBoard/>
    <div className="project-management-page">
      <ProjectHeader title={title} />
      <main>
        {tasks.map((task, index) => (
          <section key={index} className="task-section">
            
            <div className="task-header">
              <h2>{task.task_title}</h2>
              <p>{task.task_description}</p>
            </div>

            <div className="assets">
              {task.assets.map((asset, i) => (
                
                
                <div key={i} className="asset">
                  
                  
                  <div className="asset-header">
                    <h3>{asset.asset_title}</h3>
                    <i className="fa-solid fa-circle-info"></i>
                  </div>
                  <div className="asset-elements">
                    <p>
                      <b>Description:</b> {asset.asset_description}
                    </p>
                    {asset.asset_content_type === "video" && (
                      <VideoContent
                        asset_content={asset.asset_content}
                        asset_title={asset.asset_title}
                      />
                    )}
                    {asset.asset_content_type === "threadbuilder" && (
                      <ThreadBuild />
                    )}
                    {asset.asset_content_type === "article" &&
                      asset.asset_type == "input_asset" && (
                        <>
                        <hr />
                        <InputArticle/>
                        </>
                        
                      )}

                    {asset.asset_content_type === "article" &&
                      asset.asset_type == "display_asset" && (
                        <>
                        <hr />
                          <DisplayArticle href={asset.asset_content}/>
                        </>
                        
                      )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer/>
    </div></>

  );
}

export default ProjectManagementPage;
