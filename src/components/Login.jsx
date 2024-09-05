import React from 'react';
import '../styles/styles.css'; // Import your CSS

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter E-mail" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
