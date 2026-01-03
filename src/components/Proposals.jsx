import React from 'react';
import { motion } from 'framer-motion';
import './Proposals.css';

const Proposals = () => {
    const proposals = [
        {
            title: "Plan de Estudios",
            description: "Detalles sobre el plan de estudios, materias y enfoques pedagógicos utilizados en el instituto, destacando las áreas de enseñanza y los métodos de aprendizaje."
        },
        {
            title: "Equipo Docente",
            description: "Perfiles de los profesores y maestros que forman parte del instituto, resaltando su experiencia y formación académica."
        },
        {
            title: "Calendario",
            description: "Un calendario actualizado con las fechas de eventos importantes, reuniones de padres, feriados escolares, excursiones y otras actividades relevantes."
        },
        {
            title: "Galería",
            description: "Un espacio donde se compartan imágenes y videos de eventos, actividades y momentos destacados en la vida del instituto."
        }
    ];

    return (
        <section className="proposals" id="propuesta">
            <div className="proposals-header">
                <h1>Propuestas</h1>
            </div>

            <div className="proposals-grid">
                {proposals.map((item, index) => (
                    <motion.div
                        key={index}
                        className="proposal-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Proposals;
