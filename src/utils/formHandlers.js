import axios from 'axios';

export const handleLoginSubmit = async (values) => {
    try {
        const response = await axios.post('/api/login', values);
        console.log('Login successful:', response.data);
    } catch (error) {
        console.error('Error logging in:', error);
    }
};

export const handleSignupSubmit = async (values) => {
    try {
        const response = await axios.post('/api/signup', values);
        console.log('Signup successful:', response.data);
    } catch (error) {
        console.error('Error signing up:', error);
    }
};