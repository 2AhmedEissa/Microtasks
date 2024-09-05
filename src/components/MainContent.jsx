import React from 'react'
import '../styles/styles.css'; // Import your CSS
import '../styles/mediaQuery.css'; // Import media query CSS

export default function MainContent() {
    return (
        <div class="main">
            <div class="main_container">
                <div class="main_content">
                    <h2>Complete Microtasks & Collect Audio</h2>
                    <p>Get paid for completing simple tasks and collecting audio data.</p>
                    <button onclick="window.location.href='./tasks.html'">Start Now</button>
                </div>
            </div>
        </div>
    )
}
