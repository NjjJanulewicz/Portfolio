import React from "react";
import {NavLink, useParams} from "react-router-dom";
import {PROJECTS} from "../constants/projects.js";
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import AsyncImage from "./AsyncImage.jsx";
import styles from "./Project.module.css";
import {WindowSizeType} from "../constants/WindowSizeType.js";
import {useWindowSizeType} from "../hooks/useWindowSizeType.js";

// TODO: Have ui for when a project is not found
function findProject(projectRoute) {
  return PROJECTS.find(project => project.route === projectRoute) ?? {name: "Not Found"}
}

function Product() {
  const {projectLink} = useParams();
  const sizeType = useWindowSizeType();
  const project = findProject(projectLink);

  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.projectTitle}>
        {project.link ? (
          <NavLink to={project.link} target="_blank" rel="noopener noreferrer">
            {project.name}
          </NavLink>
        ) : (
          project.name
        )}
      </h2>
      <p className={styles.descriptionParagraph}>{project.description}</p>
      <ImageList
        variant="masonry"
        cols={sizeType === WindowSizeType.MOBILE ? 1 : 2}
        gap={30}
        style={{padding: "2rem"}}
      >
        {project.images.map((image, index) => (
          <ImageListItem style={{backgroundColor: "var(--forground-color)"}} key={index}>
            <AsyncImage
              src={image.src}
              alt={project.name + " image " + index}
              style={{
                width: "100%",
                maxWidth: sizeType === WindowSizeType.MOBILE ? "100vw" : "50vw",
                maxHeight: "90vh",
                boxShadow: "6px 6px 12px 2px var(--shadow-color)"
              }}
            />
            <ImageListItemBar
              title={image.description}
              sx={{
                height: '25px',
                '.MuiImageListItemBar-title': {fontSize: '1rem'}
            }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <h2 className={styles.projectTitle}>Tags</h2>
      <div className={styles.tags}>
        {project.tags.map((tag, index) => (
          <p className={styles.tag} key={index}>{tag}</p>
        ))}
      </div>
    </div>
  );
}

export default Product;
