import styles from "./Footer.module.css";
import {Button, IconButton} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import React from "react";

function Footer() {

    return (
        <div className={styles.footer}>
            <a href="https://github.com/NjjJanulewicz" target="_blank" rel="noopener noreferrer">
                <IconButton>
                    <GitHubIcon className={styles.footerIcon} fontSize="large"/>
                </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/nicholas-janulewicz" target="_blank" rel="noopener noreferrer">
                <IconButton>
                    <LinkedInIcon className={styles.footerIcon} fontSize="large"/>
                </IconButton>
            </a>
            <a href="mailto:nicholas.janulewicz@gmail.com" target="_blank" rel="noopener noreferrer">
                <IconButton>
                    <EmailIcon className={styles.footerIcon} fontSize="large"/>
                </IconButton>
            </a>
        </div>
    );
}

export default Footer;
