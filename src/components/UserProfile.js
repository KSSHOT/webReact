// src/components/UserProfile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
    };
    return (
        <div className="main-content">
            <div className="sidebar">
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <ul className="menu">
                    <li><p className="title">Home</p>
                        <ul>
                            <li><button onClick={() => alert('Dashboard clicked!')}>Dashboard</button></li>
                            <li><button onClick={() => alert('Menu Style clicked!')}>Menu Style</button></li>
                        </ul>
                    </li>
                    <li><p className="title">Pages</p>
                        <ul>
                            <li><button onClick={() => alert('Special Pages clicked!')}>Special Pages</button></li>
                            <li><button onClick={() => alert('Authentication clicked!')}>Authentication</button></li>
                            <li><button className="active" onClick={() => alert('Users clicked!')}>Users</button>
                                <ul>
                                    <li><button className="active" onClick={() => alert('User Profile clicked!')}>User Profile</button></li>
                                    <li><button onClick={() => alert('Edit User clicked!')}>Edit User</button></li>
                                    <li><button onClick={() => alert('User List clicked!')}>User List</button></li>
                                </ul>
                            </li>
                            <li><button onClick={() => alert('Utilities clicked!')}>Utilities</button></li>
                        </ul>
                    </li>
                    <li><p className="title">Elements</p>
                        <ul>
                            <li><button onClick={() => alert('Components clicked!')}>Components</button></li>
                            <li><button onClick={() => alert('Widgets clicked!')}>Widgets</button></li>
                            <li><button onClick={handleLoginClick}>Exit</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="content">
                <div className="header">
                    <h1>Hola Eduardo!</h1>
                    <p>Queremos mostrarte el estatus de tus documentos!</p>
                </div>
                <div className="profile-card">
                    <img src="user-image.jpg" alt="Eduardo Cortés" className="profile-picture" />
                    <h2>Eduardo Cortés</h2>
                    <p>2020301327</p>
                    <p>ESIME, ZACATENCO</p>
                    <p>Carrera: ISC 2020</p>
                    <p>Fecha de nacimiento: 16/09/1999</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
