import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';


const Hero = () => {
    return (
        <section className="hero" id="inicio">
            <motion.div
                className="hero-card card-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <img src="/img/alumnoscard.jpg" alt="Alumnos" />
                <p>
                    "Inspiramos a cada niño a descubrir su pasión única, abrazar desafíos y construir un futuro lleno de posibilidades".
                </p>
            </motion.div>

            <motion.div
                className="hero-card card-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <img src="/img/alumnacard.jpg" alt="Alumna" />
                <p>
                    "Descubre un mundo de aprendizaje emocionante, donde cada niño brilla con su propia luz. Únete a nuestra comunidad escolar y juntos construiremos un futuro brillante".
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
