// src/components/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        navigate('/profile');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="container">
            <img src="tt_logo_transparente_small.png" alt="Logo" className="logo-image" />
            <div className="login-box">
                <div className="logo">CLOUD HOOPS</div>
                <h2>inicia sesión con tu cuenta Institucional</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div className="input-group">
                        <input type="email" placeholder="Dirección de correo" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Contraseña" required />
                    </div>
                    <button type="submit" className="btn1">Iniciar Sesion</button>
                    <button type="button" className="btn2" onClick={handleRegisterClick}>Registrate</button>
                    <p>By continuing, you're agreeing to our <a href="/terms" target="_blank" rel="noopener noreferrer" className="link-button">Terms</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer" className="link-button">Privacy policy</a></p>
                    <div className="info-box">
                        <p>Contactar al administrador Tel: 55 3261 5486</p>
                        <div className="icon">👁️</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
