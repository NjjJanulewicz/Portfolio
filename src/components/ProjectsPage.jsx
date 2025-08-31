import {ImageList, ImageListItem} from "@mui/material";
import {PROJECTS} from '../projects';
import AsyncImage from "./AsyncImage.jsx";
import {NavLink} from "react-router-dom";

function ProjectsPage() {
    return (
        <ImageList sx={{width: "auto", height: "auto"}} cols={2}>
            {PROJECTS.map(project => (
                <ImageListItem key={project.name}>
                    <NavLink to={"project/"+ project.link}>
                        <AsyncImage
                            src={`${project.titleImage}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={project.name}
                        />
                    </NavLink>
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default ProjectsPage;
