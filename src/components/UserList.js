import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserList.css';

const UserProfile = () => {
    const navigate = useNavigate();
    const [showUserOptions, setShowUserOptions] = useState(false);

    const handleLoginClick = () => {
        navigate('/');
    };

    const toggleUserOptions = () => {
        setShowUserOptions(!showUserOptions);
    };

    const handleUserProfileClick = () => {
        navigate('/profile');
    };

    const handleUserEdit = () => {
        navigate('/edit');
    };

    const handleUserList = () => {
        navigate('/list');
    };

    const handleTimeline = () => {
        navigate('/time');
    };

    const handleCalendar = () => {
        navigate('/calendar');
    };

    return (
        <div className="main-content">
            <img src="tt_logo_transparente_small.png" alt="Logo" className="logo-image-cloud" />
            <div className="sidebar">
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <ul className="menu">
                    <li>
                        <p className="title">Home</p>
                        <ul>
                            <li><button onClick={handleCalendar} className="active">Dashboard</button></li>
                            <li><button onClick={handleTimeline} className="active">Menu Style</button></li>
                        </ul>
                    </li>
                    <li>
                        <p className="title">Pages</p>
                        <ul>
                            <li><button onClick={() => alert('Special Pages clicked!')}>Special Pages</button></li>
                            <li><button onClick={() => alert('Authentication clicked!')}>Authentication</button></li>
                            <li>
                                <button className="active" onClick={toggleUserOptions}>Users</button>
                                {showUserOptions && (
                                    <ul>
                                        <li><button onClick={handleUserProfileClick} className="active">User Profile</button></li>
                                        <li><button onClick={handleUserEdit} className="active">Edit User</button></li>
                                        <li><button onClick={handleUserList} className="active">User List</button></li>
                                    </ul>
                                )}
                            </li>
                            <li><button onClick={() => alert('Utilities clicked!')}>Utilities</button></li>
                        </ul>
                    </li>
                    <li>
                        <p className="title">Elements</p>
                        <ul>
                            <li><button onClick={() => alert('Components clicked!')}>Components</button></li>
                            <li><button onClick={() => alert('Widgets clicked!')}>Widgets</button></li>
                            <li><button onClick={handleLoginClick}>Exit</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="contentList">
                <div className="headerMainList">
                    <h1>Hola Eduardo!</h1>
                    <p>Queremos mostrarte el estatus de tus documentos!</p>
                </div>
                <div className="profiles">
                    <div className="profile-card-List">
                        <img src="user-image.jpg" alt="Eduardo Cortés" className="profile-picture" />
                        <h2>Eduardo Cortés</h2>
                        <p>2020301327</p>
                        <p>ESCOM, ZACATENCO</p>
                        <p>Carrera: ISC 2020</p>
                        <p>Fecha de nacimiento: 16/09/1999</p>
                    </div>
                    <div className="profile-card-List">
                        <img src="user.png" alt="Marta Pérez" className="profile-picture" />
                        <h2>Marta Pérez</h2>
                        <p>2020301327</p>
                        <p>ESIME, AZCAPOTZALCO</p>
                        <p>Carrera: ISISA</p>
                        <p>Fecha de nacimiento: 03/05/1998</p>
                    </div>
                    <div className="profile-card-List">
                        <img src="user.png" alt="Alexis Lima" className="profile-picture" />
                        <h2>Alexis Lima</h2>
                        <p>2020301327</p>
                        <p>ESIME, ZACATENCO</p>
                        <p>Carrera: ICE</p>
                        <p>Fecha de nacimiento: 17/10/2002</p>
                    </div>
                    <div className="profile-card-List">
                        <img src="user.png" alt="Juan López" className="profile-picture" />
                        <h2>Juan López</h2>
                        <p>2020301327</p>
                        <p>ESCA, STO. TOMAS</p>
                        <p>Carrera: LRE</p>
                        <p>Fecha de nacimiento: 12/04/2001</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
