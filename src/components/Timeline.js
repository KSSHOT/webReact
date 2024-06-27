import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Timeline.css';

const Timeline = () => {
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
        <div className="main-content-timeline">
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
            <div className="contentimeline">
                <div className="headertime">
                    <h1>Hola Eduardo!</h1>
                    <p>Queremos mostrarte el estatus de tus documentos!</p>
                </div>
                <div className="timeline">
                    <div className="timeline-event left">
                        <div className="content">
                            <h3>Documento: CURP</h3>
                            <p>El documento ha sido enviado para su revisión</p>
                            <span className="date">04/10/2023</span>
                        </div>
                    </div>
                    <div className="timeline-event right">
                        <div className="content">
                            <h3>Documento: CURP</h3>
                            <p>El documento ha sido validado</p>
                            <span className="date">05/10/2023</span>
                        </div>
                    </div>
                    <div className="timeline-event left">
                        <div className="content">
                            <h3>Documento: Acta de nacimiento</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend nunc vel enim maximus, a sodales nisi hendrerit.</p>
                            <span className="date">14/11/2023</span>
                        </div>
                    </div>
                    <div className="timeline-event right">
                        <div className="content">
                            <h3>Documento: Acta de nacimiento</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend nunc vel enim maximus, a sodales nisi hendrerit.</p>
                            <span className="date">15/11/2023</span>
                        </div>
                    </div>
                    <div className="timeline-event left">
                        <div className="content">
                            <h3>Documento: Horario</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend nunc vel enim maximus, a sodales nisi hendrerit.</p>
                            <span className="date">20/12/2023</span>
                        </div>
                    </div>
                    <div className="timeline-event right">
                        <div className="content">
                            <h3>Documento: CURP</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend nunc vel enim maximus, a sodales nisi hendrerit.</p>
                            <span className="date">19/11/2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;