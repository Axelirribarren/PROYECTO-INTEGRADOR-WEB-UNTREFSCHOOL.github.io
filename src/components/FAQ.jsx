import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = () => {
    const faqs = [
        {
            question: "¿Cuál es el horario de atención?",
            answer: "Nuestro horario de atención administrativa es de Lunes a Viernes de 8:00 a 16:00 hs."
        },
        {
            question: "¿Cómo es el proceso de inscripción?",
            answer: "Las inscripciones se realizan de manera presencial. Puede solicitar una entrevista a través de nuestro formulario de contacto."
        },
        {
            question: "¿Ofrecen actividades extracurriculares?",
            answer: "Sí, contamos con talleres de arte, música, deportes y robótica fuera del horario escolar."
        },
        {
            question: "¿Tienen comedor en la institución?",
            answer: "Sí, ofrecemos servicio de comedor con menú nutricional supervisado."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="faq-header">
                <h1>Preguntas Frecuentes</h1>
            </div>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
                        <div className="faq-question">
                            <h3>{faq.question}</h3>
                            <span>{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
                        </div>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    className="faq-answer"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                >
                                    <p>{faq.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
