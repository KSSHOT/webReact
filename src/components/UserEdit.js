import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserEdit.css';

const UserEdit = () => {
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
        navigate('/calenadar');
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
            <div className="content">
                <div className="header">
                    <h1>Hola Eduardo!</h1>
                    <p>Queremos mostrarte el estatus de tus documentos!</p>
                </div>
                <div className="profile-form">
                    <div className="profile-card">
                        <img src="user-image.jpg" alt="Eduardo Cortés" className="profile-picture" />
                        <h2>Eduardo Cortés</h2>
                        <p>2020301327</p>
                        <p>ESIME, ZACATENCO</p>
                        <p>Carrera: XXXXXXX</p>
                        <p>Fecha de nacimiento: XX/XX/XXXX</p>
                    </div>
                    <div className="form-container">
                        <form>
                            <div className="input-group">
                                <input type="text" placeholder="Input Field" />
                                <input type="password" placeholder="Password" className="password-field" />
                            </div>
                            <div className="input-group">
                                <input type="text" placeholder="Input Field" />
                                <input type="text" placeholder="Input Field" />
                            </div>
                            <div className="input-group">
                                <input type="text" placeholder="Search" />
                                <button type="button" className="search-button">Search</button>
                            </div>
                            <div className="input-group">
                                <select>
                                    <option>Tag n°1</option>
                                    <option>Tag n°2</option>
                                </select>
                                <select>
                                    <option>Tag n°1</option>
                                    <option>Tag n°2</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <input type="text" placeholder="Input Field" />
                                <button type="button" className="search-button">Button</button>
                            </div>
                            <div className="input-group">
                                <select>
                                    <option>+91</option>
                                    <option>+1</option>
                                    <option>+52</option>
                                </select>
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            <div className="input-group">
                                <input type="text" placeholder="Currency" />
                                <select>
                                    <option>USD</option>
                                    <option>MXN</option>
                                    <option>EUR</option>
                                </select>
                            </div>
                            <div className="input-group full-width">
                                <input type="text" placeholder="Input Field" />
                                <input type="text" placeholder="Input Field" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserEdit;
