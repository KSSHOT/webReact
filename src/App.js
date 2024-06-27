// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserProfile from './components/UserProfile';
import TerminosYCondiciones from './components/TerminosYCondiciones';
import AvisoDePrivacidad from './components/AvisoDePrivacidad';
import UserEdit from './components/UserEdit';
import UserList from './components/UserList';
import Timeline from './components/Timeline';
import Calendar from './components/Calendar';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/terms" element={<TerminosYCondiciones />} />
                <Route path="/privacy" element={<AvisoDePrivacidad />} />
                <Route path="/edit" element={<UserEdit />} />
                <Route path="/list" element={<UserList />} />
                <Route path="/time" element={<Timeline />} />
                <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </Router>
    );
}

export default App;
