import React, { useState } from 'react';
import './header.scss'

const Header = () => {
    let [navClass, setNavClass] = useState(false)
    let [menuClass, setMenuClass] = useState(false)

    const toggleMenu = () => {
        menuClass = !menuClass
        setMenuClass(menuClass)
        navClass = !navClass
        setNavClass(navClass)

        if (navClass) {
            document.body.classList.add('header-nav-open')
        } else {
            document.body.classList.remove('header-nav-open')
        }
    }

    return (
        <>
            <div className="header-nav-wrapper">
                <div className="header-bar"></div>
                <div className="header-navbar">
                    Cinema App
                <div className="header-image">
                        {/* <img src={logo} alt=""></img> */}
                    </div>
                    <div
                        className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`}
                        id="header-mobile-menu"
                        onClick={() => toggleMenu()}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className={`${menuClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
                        <li className="header-nav-item">Now playing</li>
                        <li className="header-nav-item">New movies</li>
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search for movie"
                        />
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Header;
