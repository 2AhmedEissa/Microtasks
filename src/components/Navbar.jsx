import React, { useState } from 'react';
import Gem from './Gem'; // Import the new SVG component
import '../styles/styles.css'; // Import your CSS
import '../styles/mediaQuery.css'; // Import media query CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleMenuClick = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar">
            <div className="navbar_container">
                <Link to="/" id="navbar_logo"><i className="fa-solid fa-gem"></i>MICROTASKS</Link>
                <div className="navbar_toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar_menu">
                    <li className="navbar_item">
                        <Link to="/" className="navbar_links">Home</Link>
                    </li>
                    <li className="navbar_item">
                        <Link to="/tasks" className="navbar_links">Tasks</Link>
                    </li>
                    <li id="lgn_btn">
                        <Link to="/login" className="button">Login</Link>
                    </li>
                    <li id="sgn_btn">
                        <Link to="/signup" className="button">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
