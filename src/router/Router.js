import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from '../component/Header';
import Home from '../home/Home';
import Splash from '../component/Splash';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Quiz from '../Quiz/Quiz';
import Dashboard from '../dashboard/Dashboard';
import Cat from '../home/Cat';
import Leaderboard from '../home/Leaderboard';
import Winner from '../winner/Winner';
import Aviater from '../auth/Aviater';
import Quiz1 from '../Quiz/Quiz1';
import Quiz2 from '../Quiz/Quiz2';
import Quiz3 from '../Quiz/Quiz3';
import Quiz4 from '../Quiz/Quiz4';
import Result from '../Quiz/Result';
import HowToPlay from '../home/HowToPlay';
import Help from '../home/Help';
import Coins from '../home/Coins';
import QuizeFormats from '../home/QuizeFormats';
import QuizTypes from '../home/QuizTypes';
import Prize from '../home/Prize';

export default function Router() {
    const [loggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cat" element={<Cat />} />
                <Route path="/quiz" element={<Quiz />} />
                {/* <Route path="/quiz1" element={<Quiz1 />} />
                <Route path="/quiz2" element={<Quiz2 />} />
                <Route path="/quiz3" element={<Quiz3 />} />
                <Route path="/quiz4" element={<Quiz4 />} /> */}
                <Route path="/result" element={<Result />} />
                <Route path="/how-to-play" element={<HowToPlay />} />
                <Route path="/help" element={<Help />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/prize" element={<Prize />} />
                <Route path="/winner" element={<Winner />} />
                <Route path="/profile-theme" element={<Aviater />} />
                <Route path="/coins" element={<Coins />} />
                <Route path="/quize-formats" element={<QuizeFormats />} />
                <Route path="/quiz-types" element={<QuizTypes />} />
            </Routes>

        </>
    );
}
