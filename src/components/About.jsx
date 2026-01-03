import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import logo from '../assets/img/InstitutoBlanco.png';
import icon1 from '../assets/img/icon/etiqueta1.png';
import icon2 from '../assets/img/icon/etiqueta2.png';
import icon3 from '../assets/img/icon/etiqueta3.png';
import icon4 from '../assets/img/icon/etiqueta4.png';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="about" id="equipo">
            <div className="about-header">
                <img src={logo} alt="Untref School" className="about-logo" />
            </div>

            <div className="about-content">
                <motion.div
                    className="about-intro"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1>¿Quiénes Somos?</h1>
                    <p>
                        "En el Instituto de Educación Primaria UNTREFSCHOOL, nos dedicamos a brindar una educación de calidad que fomenta el crecimiento y desarrollo integral de nuestros estudiantes. Nuestro enfoque pedagógico centrado en el estudiante promueve la curiosidad, la creatividad y el pensamiento crítico."
                    </p>
                </motion.div>

                <motion.div
                    className="about-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="about-card" variants={itemVariants}>
                        <img src={icon1} alt="Trayectoria" />
                        <p>Sólida trayectoria en formación basada en valores.</p>
                    </motion.div>
                    <motion.div className="about-card" variants={itemVariants}>
                        <img src={icon2} alt="Pedagogía" />
                        <p>Enfoque pedagógico único para cada estudiante.</p>
                    </motion.div>
                    <motion.div className="about-card" variants={itemVariants}>
                        <img src={icon3} alt="Instalaciones" />
                        <p>Instalaciones de vanguardia y recursos modernos.</p>
                    </motion.div>
                    <motion.div className="about-card" variants={itemVariants}>
                        <img src={icon4} alt="Excelencia" />
                        <p>Educación de excelencia para un mundo cambiante.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
