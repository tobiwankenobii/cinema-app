import React, { useState } from 'react';
import './header.scss';
import { headerList } from './header-list.js';
import logo from './cinema-logo.svg';

const Header = () => {
    let [navClass, setNavClass] = useState(false);
    let [menuClass, setMenuClass] = useState(false);

    const toggleMenu = () => {
        menuClass = !menuClass;
        setMenuClass(menuClass);
        navClass = !navClass;
        setNavClass(navClass);

        if (navClass) {
            document.body.classList.add('header-nav-open');
        } else {
            document.body.classList.remove('header-nav-open');
        }
    };

    return (
        <>
            <div className="header-nav-wrapper">
                <div className="header-bar"></div>
                <div className="header-navbar">
                    <div className="header-image">
                        <img src={logo} alt=""></img>
                    </div>
                    <div className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`} id="header-mobile-menu" onClick={() => toggleMenu()}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className={`${menuClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
                        {headerList.map((item) => (
                            <li key={item.id} className="header-nav-item">
                                <span className="header-list-name">
                                    <i className={item.iconClass}></i>
                                </span>
                                &nbsp;
                                <span>{item.name}</span>
                            </li>
                        ))}
                        <input className="search-input" type="text" placeholder="Search for movie" />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
