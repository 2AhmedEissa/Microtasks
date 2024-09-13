import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/styles.css'; // Import your CSS
import '../styles/mediaQuery.css'; // Import media query CSS

export default function MainContent() {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate('/tasks'); 
    };

    return (
        <div className="main">
            <div className="main_container">
                <div className="main_content">
                    <h2>Complete Microtasks & Collect Audio</h2>
                    <p>Get paid for completing simple tasks and collecting audio data.</p>
                    <button onClick={handleClick}>Start Now</button> 
                </div>
            </div>
        </div>
    );
}
