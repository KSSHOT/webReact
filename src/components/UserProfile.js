import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

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
        <div className="main-content">
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
            <div className="contentMin">
                <div className="headerMain">
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
