import React from "react";
import {useParams} from "react-router-dom";
import {PROJECTS} from "../projects.js";
import {ImageList, ImageListItem, Typography} from "@mui/material";

// TODO: Have ui for when a project is not found
function findProject(projectLink) {
    return PROJECTS.find(project => project.link === projectLink) ?? {name: "Not Found"}
}

function Product() {
    const {projectLink} = useParams();
    const project = findProject(projectLink);

    return (
        <>
            <Typography variant="h1" gutterBottom>
                {project.name}
            </Typography>
            <Typography variant="b1" gutterBottom>
                {project.name}
            </Typography>
            <ImageList sx={{width: "auto", height: "auto"}} cols={3}>
                {project.images.map((image, index) => (
                    <ImageListItem key={index}>
                        <img
                            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image}?w=164&h=164&fit=crop&auto=format`}
                            loading="lazy"
                            alt={`${project.name}-${image}`}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Typography variant="s1">
                Stack:
            </Typography>
            {project.tags.map((tag, index) => (
                <Typography key={index} variant="s2" gutterBottom sx={{margin: "0.25rem"}}>
                    {tag}
                </Typography>
            ))}
        </>
    );
}

export default Product;
