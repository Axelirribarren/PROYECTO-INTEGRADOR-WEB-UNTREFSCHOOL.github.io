import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section social">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                        <a href="#"><FaInstagram /> Instagram</a>
                        <a href="#"><FaFacebook /> Facebook</a>
                        <a href="#"><FaTwitter /> Twitter</a>
                    </div>
                </div>

                <div className="footer-section location">
                    <h3>Ubicación</h3>
                    <a href="https://goo.gl/maps/..." target="_blank" rel="noopener noreferrer" className="map-link">
                        <FaMapMarkerAlt /> UntrefSchool
                    </a>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105086.89093312966!2d-58.69617263750004!3d-34.60503789999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb9f8ff113%3A0x22fd08da6711928d!2sUniversidad%20Nacional%20de%20Tres%20de%20Febrero%20-%20Sede%20Caseros%20I!5e0!3m2!1ses-419!2sar!4v1689946489410!5m2!1ses-419!2sar"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicacion"
                        ></iframe>
                    </div>
                </div>

                <div className="footer-section contact-info">
                    <h3>Contacto</h3>
                    <ul>
                        <li><FaPhone /> +54 11 1234-5678</li>
                        <li><FaEnvelope /> info@untrefschool.edu.ar</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 UntrefSchool. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
