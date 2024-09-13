import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/mediaQuery.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleMenuClick = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar">
            <div className="navbar_container">
                <Link to="/" id="navbar_logo"><i className="fa-solid fa-gem"></i>MICROTASKS</Link>
                <div className="navbar_toggle" id="mobile-menu" onClick={handleMenuClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`navbar_menu ${isActive ? 'active' : ''}`}>
                    <li className="navbar_item">
                        <Link to="/" className="navbar_links">Home</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to="/tasks" className="navbar_links">Tasks</Link>
                    </li>
                    <li id="lgn_btn" className="navbar_item">
                        <Link to="/login" className="button">Login</Link>
                    </li>
                    <li id="sgn_btn" className="navbar_item">
                        <Link to="/signup" className="button">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
