import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Profiles from './Components/Profiles';
import ProfileDetails from './Components/ProfileDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profiles" element={<Profiles />} />
                <Route path="/profiles/:id" element={<ProfileDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
