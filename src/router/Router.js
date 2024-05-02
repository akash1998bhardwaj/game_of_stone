import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from '../component/Header';
import Home from '../home/Home';
import Splash from '../component/Splash';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Quiz from '../Quiz/Quiz';
import Dashboard from '../dashboard/Dashboard';

export default function Router() {
    const [loggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

        </>
    );
}
