import React from 'react';
import '../styles/styles.css'; // Import your CSS
import '../styles/mediaQuery.css'; // Import media query CSS

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
