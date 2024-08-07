import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Timeline.css';

const Timeline = () => {
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
        <div className="main-content-timeline">
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
            <div className="contentimeline">
                <div className="headertime">
                    <h1>Hola Eduardo!</h1>
                    <p>Queremos mostrarte el estatus de tus documentos!</p>
                    <h4>Lista de documentos:</h4>
                </div>
                <div className="timeline">
                    <div className="timeline-event left">
                        <div className="content">
                            <h3>Documento: Acta de nacimiento</h3>
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
                            <h3>Documento: Constancia de inscripcion</h3>
                            <p>El documento ha sido validado</p>
                            <span className="date">14/11/2023</span>
                        </div>
                    </div>
                    <div className="timeline-event right">
                        <div className="content">
                            <h3>Documento: Constancia de vigencia de derechos</h3>
                            <p>El documento ha sido enviado para su revisión</p>
                            <span className="date">15/11/2023</span>
                        </div>
                    </div>
                    <div className="timeline-event left">
                        <div className="content">
                            <h3>Documento: Solicitud de inscripcion al torneo</h3>
                            <p>El documento ha sido rechazado</p>
                            <span className="date">20/12/2023</span>
                        </div>
                    </div>
                    <div className="timeline-event right">
                        <div className="content">
                            <h3>Documento: Inscripcion de jugadores</h3>
                            <p>El documento ha sido rechazado</p>
                            <span className="date">19/11/2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;