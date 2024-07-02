import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';

const UserProfile = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
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

    const handleDocs = () => {
        navigate('/docs');
    };

    const fileInputRef = useRef(null);
    const handleFileUpload = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            console.log('Archivo seleccionado:', file.name);
            // Aquí puedes agregar lógica para manejar el archivo seleccionado
        } else {
            alert('Por favor, selecciona un archivo PDF');
        }
    };

    return (
        <div className="main-content-calendar">
            <img src="tt_logo_transparente_small.png" alt="Logo" className="logo-image-cloud" />
            <div className="sidebar">
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <ul className="menu">
                    <li>
                        <p className="title">Hooping Around</p>
                        <ul>
                            <li><button onClick={handleCalendar} className="active">Calendario de Actividades</button></li>
                            <li><button onClick={handleTimeline} className="active">Timeline Documentos</button></li>
                        </ul>
                    </li>
                    <li>
                        <p className="title">Pages</p>
                        <ul>
                            <li>
                                <button onClick={handleFileUpload}>Subir documento</button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    accept="application/pdf"
                                    onChange={handleFileChange}
                                />
                            </li>                            
                            <li><button onClick={handleUserProfileClick} className="active">Perfil del Entrenador</button></li>
                            <li><button onClick={handleUserEdit} className="active">Editar Perfil</button></li>
                            <li><button onClick={handleUserList} className="active">Lista de Equipo</button></li>
                            <li><button onClick={handleDocs} className="active">Documentos aceptados</button></li>
                        </ul>
                    </li>
                    <li>
                        <p className="title"></p>
                        <ul>
                            <li><button onClick={handleLoginClick}>Exit</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="content-calendar">
                <div className="header-calendar">
                    <h1>Hola Eduardo!</h1>
                    <p>Queremos mostrarte el estatus de tus documentos!</p>
                </div>
                <div className="calendar-container">
                <h2>Calendario de Actividades</h2>
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={[
                            { title: 'All day event', start: '2023-11-01' },
                            { title: 'Long Event', start: '2023-11-03', end: '2023-11-05' },
                            { title: 'Repeating Event', start: '2023-11-07T05:30:00' },
                            { title: 'Birthday Party', start: '2023-11-13T05:30:00' },
                            { title: 'Meeting', start: '2023-11-12T05:30:00' }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
