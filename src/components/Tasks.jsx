import React from 'react';
import '../styles/styles.css'; // Import your CSS
import '../styles/mediaQuery.css'; // Import media query CSS

export default function Tasks() {
    return (
        <div className="tasks-section">
            <h2 className="tasks-header">Your Tasks</h2>
            <ul id="task-list" className="task-list">
                {}
            </ul>
        </div>
    );
}
