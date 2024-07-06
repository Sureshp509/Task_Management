import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { register } from '../services/api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register({ username, email, password });
            alert("Successfully Registered")
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
           
            <form onSubmit={handleSubmit}>
            <h2>Register</h2>
                <div>
                    <label>Username:</label><br></br>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label><br></br>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label><br></br>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
                <span>Already Registered? <Link to="/login">Login</Link></span>
            </form>
        </div>
    );
};

export default Register;
