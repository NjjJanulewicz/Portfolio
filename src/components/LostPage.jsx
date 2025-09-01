import majesticRiver from '../assets/majesticRiver.png';
import {Typography} from "@mui/material";
import {ROUTES} from "../constants/routes.js";
import {NavLink} from "react-router-dom";
import React from "react";
import AsyncImage from "./AsyncImage.jsx";
import {WindowSizeType} from "../constants/WindowSizeType.js";

function LostPage() {
    return (
        <div>
            <h1>I have led you astray</h1>
            <h2>
                Let the majestic River guide you <NavLink to={ROUTES.PROJECTS}>Home</NavLink>
            </h2>
            <AsyncImage
                src={majesticRiver}
                alt="majestic river"
                style={{
                    width: "100%",
                    maxHeight: "90vh",
                }}/>
        </div>
    );
}

export default LostPage;
