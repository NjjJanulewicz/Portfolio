import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../constants/routes.js';
import {useWindowSizeType} from "../hooks/useWindowSizeType.js";
import styles from "./Header.module.css";
import {WindowSizeType} from "../constants/WindowSizeType.js";
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Example https://www.kylejenkinscamera.com/kylejenkinscamera
const Header = () => {
    const sizeType = useWindowSizeType();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            {sizeType === WindowSizeType.MOBILE ? (
                <div className={styles.headerMobile}>
                    <div className={styles.headerMobileContent}>
                        <h1 className={styles.headerText}>NJ</h1>
                        <IconButton className={styles.openMenuButton} onClick={() => setIsMenuOpen((prevState) => !prevState)}>
                            {isMenuOpen ?  <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large"/>}
                        </IconButton>
                    </div>
                    {isMenuOpen && (
                        <div className={styles.menu}>
                            <ul className={styles.mobileList}>
                                <li className={styles.listItem} onClick={() => setIsMenuOpen(false)}>
                                    <NavLink to={ROUTES.PROJECTS}>Projects</NavLink>
                                </li>
                                <li className={styles.listItem} onClick={() => setIsMenuOpen(false)}>
                                    <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
                                </li>
                                <li className={styles.listItem} onClick={() => setIsMenuOpen(false)}>
                                    <NavLink to={ROUTES.ABOUT}>About</NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <div className={styles.headerDesktop}>
                    <h1 className={styles.headerText}>Nicholas Janulewicz</h1>
                    <nav>
                        <ul className={styles.desktopList}>
                            <li className={styles.listItem}><NavLink to={ROUTES.PROJECTS}>Projects</NavLink></li>
                            <li className={styles.listItem}><NavLink to={ROUTES.CONTACT}>Contact</NavLink></li>
                            <li className={styles.listItem}><NavLink to={ROUTES.ABOUT}>About</NavLink></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;