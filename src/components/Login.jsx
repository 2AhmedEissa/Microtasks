import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css'; // Ensure this is the correct path
import '../styles/mediaQuery.css'; // Ensure this is the correct path

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { email, password });
            if (response.data.success) {
                console.log('Login successful:', response.data);
                navigate('/'); // Redirect to home on success
            } else {
                console.error('Login failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>Do you already have an account?</p>
            <button className="redirect-btn" onClick={() => navigate('/signup')}>Create account</button>
        </div>
    );
};

export default Login;
