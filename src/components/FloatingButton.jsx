import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingButton.css';

const FloatingButton = () => {
    return (
        <a href="https://wa.me/1234567890" className="floating-btn" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
        </a>
    );
};

export default FloatingButton;
