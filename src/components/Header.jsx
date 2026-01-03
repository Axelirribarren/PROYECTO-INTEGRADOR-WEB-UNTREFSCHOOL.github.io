import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import logo from '../assets/img/InstitutoBlanco.png';
import logoSmall from '../assets/img/UntrefSchool LOGO.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <header className="header">
            <div className="logo-container">
                <a href="#">
                    <img src={logo} alt="Untref School Logo" className="logo-desktop" />
                    <img src={logoSmall} alt="Untref School Logo" className="logo-mobile" />
                </a>
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                <ul className="nav-list">
                    <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
                    <li><a href="#equipo" onClick={toggleMenu}>Equipo</a></li>
                    <li><a href="#propuesta" onClick={toggleMenu}>Propuestas</a></li>
                    <li><a href="#noticia" onClick={toggleMenu}>Noticias</a></li>
                    <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
                </ul>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu-overlay"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <ul className="mobile-nav-list">
                            <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
                            <li><a href="#equipo" onClick={toggleMenu}>Equipo</a></li>
                            <li><a href="#propuesta" onClick={toggleMenu}>Propuestas</a></li>
                            <li><a href="#noticia" onClick={toggleMenu}>Noticias</a></li>
                            <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
