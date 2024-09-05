import React from 'react';
import '../styles/styles.css'; // Import your CSS

const Signup = () => {
    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter E-mail" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
