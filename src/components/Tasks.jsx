import React, { useState, useEffect } from 'react';
import '../styles/styles.css'; // Import your CSS
import '../styles/mediaQuery.css'; // Import media query CSS
import Footer from './Footer'; // 

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Replace this with a fetch call to your API
        const fetchTasks = async () => {
            // Example static tasks
            const exampleTasks = [
                { id: 1, name: 'Task 1' },
                { id: 2, name: 'Task 2' },
                { id: 3, name: 'Task 3' },
            ];
            setTasks(exampleTasks);
        };

        fetchTasks();
    }, []);

    return (
        <>
            <div className="tasks-section">
                <h2 className="tasks-header">Your Tasks</h2>
                <ul id="task-list" className="task-list">
                    {tasks.map(task => (
                        <li key={task.id} className="task-item">
                            {task.name}
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
}
