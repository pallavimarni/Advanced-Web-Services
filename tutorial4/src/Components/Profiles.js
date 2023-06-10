import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Profiles = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://express-t4.onrender.com/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Container maxWidth="md">
            <Typography variant="h2" align="center" gutterBottom>
                User Profiles
            </Typography>
            <TextField
                label="Search by Name or Email"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Grid container spacing={3}>
                {users
                    .filter(
                        (user) =>
                            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((user) => (
                        <Grid item xs={12} sm={6} md={4} key={user._id}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="User"
                                    height="200"
                                    src={user.picture || 'http://placehold.it/32x32'}
                                    onError={(e) => {
                                        e.target.src = 'http://placehold.it/32x32';
                                    }}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {user.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {user.email}
                                    </Typography>
                                    <Button component={Link} to={`/profiles/${user._id}`} variant="contained" color="primary">
                                        View Profile
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
};

export default Profiles;
