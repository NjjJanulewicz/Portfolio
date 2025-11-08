import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import {PROJECTS} from '../constants/projects.js';
import AsyncImage from "./AsyncImage.jsx";
import {NavLink} from "react-router-dom";
import {useWindowSizeType} from "../hooks/useWindowSizeType.js";
import {WindowSizeType} from "../constants/WindowSizeType.js";

function ProjectsPage() {
  const sizeType = useWindowSizeType();

  return (
    <ImageList
      variant="masonry"
      cols={sizeType === WindowSizeType.MOBILE ? 1 : 2}
      gap={30}
      style={{padding: "2rem"}}
    >
      {PROJECTS.map((project, index) => (
        <ImageListItem key={index}>
          <NavLink to={"project/" + project.route}>
            <AsyncImage
              src={project.titleImage}
              alt={project.name}
              style={{
                width: "100%",
                maxWidth: sizeType === WindowSizeType.MOBILE ? "100vw" : "50vw",
                maxHeight: "90vh",
                boxShadow: "6px 6px 12px 2px var(--shadow-color)"
              }}
            />
            <ImageListItemBar
              title={project.name}
              sx={{'.MuiImageListItemBar-title': {fontSize: '2rem'}}}
            />
          </NavLink>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ProjectsPage;
