import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import {PROJECTS} from '../projects';
import AsyncImage from "./AsyncImage.jsx";
import {NavLink} from "react-router-dom";
import {useWindowSizeType} from "../hooks/useWindowSizeType.js";
import {WindowSizeType} from "../WindowSizeType.js";

function Projects() {
    const sizeType = useWindowSizeType();

    return (
        <ImageList
            variant="masonry"
            cols={sizeType === WindowSizeType.MOBILE ? 1 : 2}
            gap={10}
            style={{margin: "10px"}}
        >
            {PROJECTS.map((project, index) => (
                <ImageListItem key={index}>
                    <NavLink to={"project/" + project.link}>
                        <AsyncImage
                            src={project.titleImage}
                            alt={project.name}
                            style={{
                                width: "100%",
                                maxWidth: sizeType === WindowSizeType.MOBILE ? "100vw" : "50vw",
                                maxHeight: "90vh",
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

export default Projects;
