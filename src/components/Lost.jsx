import majesticRiver from '../assets/majesticRiver.png';
import {Typography} from "@mui/material";
import {ROUTES} from "../routes.js";
import {NavLink} from "react-router-dom";
import React from "react";
import AsyncImage from "./AsyncImage.jsx";

function Lost() {
    return (
        <>
            <Typography variant="h2" gutterBottom>
                I have led you astray
            </Typography>
            <Typography variant="s1" gutterBottom>
                Let the majestic River guide you
            </Typography>
            <NavLink to={ROUTES.PROJECTS}>
                <Typography variant="b1" gutterBottom sx={{marginLeft: "0.5rem"}}>
                    Home
                </Typography>
            </NavLink>
            <AsyncImage src={majesticRiver} alt="majestic river" width="100%" height="100%" />
        </>
    );
}

export default Lost;
