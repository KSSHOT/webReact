// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserProfile from './components/UserProfile';
import TerminosYCondiciones from './components/TerminosYCondiciones';
import AvisoDePrivacidad from './components/AvisoDePrivacidad';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/terms" element={<TerminosYCondiciones />} />
                <Route path="/privacy" element={<AvisoDePrivacidad />} />
            </Routes>
        </Router>
    );
}

export default App;
