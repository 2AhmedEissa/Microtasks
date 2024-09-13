import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css'; // Ensure this is the correct path
import '../styles/mediaQuery.css'; // Ensure this is the correct path

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/signup', { email, password });
            if (response.data.success) {
                console.log('Signup successful:', response.data);
                navigate('/login'); // Redirect to login on success
            } else {
                console.error('Signup failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
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
                <button type="submit">Sign Up</button>
            </form>
            <p>Do you already have an account?</p>
            <button className="redirect-btn" onClick={() => navigate('/login')}>Login</button>
        </div>
    );
};

export default SignUp;
