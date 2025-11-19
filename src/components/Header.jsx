import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../constants/routes.js';
import {useWindowSizeType} from "../hooks/useWindowSizeType.js";
import styles from "./Header.module.css";
import {WindowSizeType} from "../constants/WindowSizeType.js";
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const sizeType = useWindowSizeType();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const capitalize = s => s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s;

  const listItems = (
    <>
      {Object.entries(ROUTES)
        .filter(([_, value]) => typeof value === 'string')
        .map(([property, value]) => (
          <li key={property} className={styles.listItem} onClick={() => setIsMenuOpen(false)}>
            <NavLink to={value}>{capitalize(property)}</NavLink>
          </li>
        ))}
    </>
  );

  return (
    <header className={styles.header}>
      {sizeType === WindowSizeType.MOBILE ? (
        <div className={styles.headerMobile}>
          <div className={styles.headerMobileContent}>
            <h1 className={styles.headerText}>NJ</h1>
            <IconButton
              className={styles.openMenuButton}
              onClick={() => setIsMenuOpen((prevState) => !prevState)}>
              {isMenuOpen
                ? <CloseIcon className={styles.icon} fontSize="large"/>
                : <MenuIcon className={styles.icon} fontSize="large"/>}
            </IconButton>
          </div>
          {isMenuOpen && (
            <div className={styles.menu}>
              <ul className={styles.mobileList}>
                {listItems}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.headerDesktop}>
          <h1 className={styles.headerText}>Nicholas Janulewicz</h1>
          <nav>
            <ul className={styles.desktopList}>
              {listItems}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;