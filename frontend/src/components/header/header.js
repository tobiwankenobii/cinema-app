import React from 'react';
import logo from '../../logo.svg';

const Header = () => (
    <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
            <div className="header-image">
                <img src={logo} alt=""></img>
            </div>
            <div className="header-menu-toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="header-nav">
                <li className="header-nav-item">Now playing</li>
                <li className="header-nav-item">New movies</li>
            </ul>
        </div>
        <input className="search-input" type="text" placeholder="Search for movie"></input>
    </div>
);

export default Header;
