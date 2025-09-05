import React from "react";
import {useParams} from "react-router-dom";
import {PROJECTS} from "../constants/projects.js";
import {ImageList, ImageListItem} from "@mui/material";
import AsyncImage from "./AsyncImage.jsx";
import styles from "./Project.module.css";
import {WindowSizeType} from "../constants/WindowSizeType.js";
import {useWindowSizeType} from "../hooks/useWindowSizeType.js";

// TODO: Have ui for when a project is not found
function findProject(projectLink) {
    return PROJECTS.find(project => project.link === projectLink) ?? {name: "Not Found"}
}

function Product() {
    const {projectLink} = useParams();
    const sizeType = useWindowSizeType();
    const project = findProject(projectLink);

    return (
        <div className={styles.projectContainer}>
            <h2 className={styles.projectTitle}>{project.name}</h2>
            <p className={styles.descriptionParagraph}>{project.description}</p>

            <ImageList
                variant="masonry"
                cols={sizeType === WindowSizeType.MOBILE ? 1 : 2}
                gap={10}
                style={{margin: "10px"}}
            >
                {project.images.map((image, index) => (
                    <ImageListItem key={index}>
                        <AsyncImage
                            src={image}
                            alt={project.name + " image " + index}
                            style={{
                                width: "100%",
                                maxWidth: sizeType === WindowSizeType.MOBILE ? "100vw" : "50vw",
                                maxHeight: "90vh",
                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <div className={styles.tags}>
                <h4>Skills Used:</h4>
                {project.tags.map((tag, index) => (
                    <p className={styles.tag} key={index}>{tag}</p>
                ))}
            </div>
        </div>
    );
}

export default Product;
