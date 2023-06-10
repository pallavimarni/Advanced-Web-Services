import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardContent } from '@material-ui/core';

const ProfileDetails = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [id]);

    if (!profile) {
        return (
            <Container maxWidth="md">
                <Typography variant="h2" align="center" gutterBottom>
                    Loading...
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md">
            <Typography variant="h2" align="center" gutterBottom>
                Profile Details
            </Typography>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {profile.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Email: {profile.email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Phone: {profile.phone}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Company: {profile.company}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Balance: {profile.balance}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Age: {profile.age}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Eye Color: {profile.eyeColor}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Address: {profile.address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        About: {profile.about}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Registered: {profile.registered}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Latitude: {profile.latitude}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Longitude: {profile.longitude}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Tags: {profile.tags.join(', ')}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Friends:
                        <ul>
                            {profile.friends.map((friend) => (
                                <li key={friend.id}>{friend.name}</li>
                            ))}
                        </ul>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Greeting: {profile.greeting}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Favorite Fruit: {profile.favoriteFruit}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ProfileDetails;

