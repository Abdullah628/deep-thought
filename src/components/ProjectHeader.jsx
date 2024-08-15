import Button from "./Button";
import "./styles/projectHeader.css";


const handleClick =()=>{
    alert("Task Added");
}
// eslint-disable-next-line react/prop-types
const ProjectHeader =({title})=>{
    
    return(
        <header>
            <h2>{title}</h2>
            <Button onClick={handleClick}>Add Task</Button>
        </header>
    )
}

export default ProjectHeader;