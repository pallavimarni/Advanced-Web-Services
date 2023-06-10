import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://express-t4.onrender.com/api/login', {
                username: email,
                password: password,
            });

            console.log('Login successful:', response.data);
            navigate('/profiles');
        } catch (error) {
            alert("Login failed");
            console.error('Login failed:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h2">Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />

                <Button variant="contained" color="primary" type="submit">
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default LoginPage;
