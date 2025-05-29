import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '.././routes';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to={ROUTES.PROJECTS}>Projects</NavLink></li>
                <li><NavLink to={ROUTES.CONTACT}>Contact</NavLink></li>
                <li><NavLink to={ROUTES.ABOUT}>About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;