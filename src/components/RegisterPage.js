// src/components/RegisterPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1>Regístrate con tu correo Institucional</h1>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="First name" required />
                        <input type="text" placeholder="Last name" required />
                    </div>
                    <input type="email" placeholder="Email address" required />
                    <input type="password" placeholder="Password" required />
                    <div className="checkbox-group">
                        <label>
                            <input type="checkbox" />
                            I want to receive emails about product updates
                        </label>
                        <label>
                            <input type="checkbox" required />
                            I accept <a href="/terms" target="_blank" rel="noopener noreferrer">terms of use</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>
                        </label>
                    </div>
                    <button type="submit" className="btncreate">Create an account</button>
                    <p className="login-link">Already have an account? <button type="button" className="link-button" onClick={handleLoginClick}>Log in</button></p>
                </form>
            </div>
            <div className="logo-container">
                <img src="logo.png" alt="Logo" />
            </div>
        </div>
    );
}

export default RegisterPage;
