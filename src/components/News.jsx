import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './News.css';


const News = () => {
    const newsData = [
        {
            id: 1,
            title: "Estudiantes ganan concurso de matemáticas",
            image: "/img/noticia1.jpg",
            link: "#"
        },
        {
            id: 2,
            title: "Se celebra una jornada de lectura",
            image: "/img/noticia2.jpg",
            link: "#"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % newsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
    };

    return (
        <section className="news" id="noticia">
            <div className="news-header">
                <h1>Noticias</h1>
            </div>

            <div className="news-carousel">
                <button className="carousel-btn prev" onClick={prevSlide}>
                    <FaChevronLeft />
                </button>

                <div className="carousel-content">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            className={`news-card ${currentIndex % 2 === 0 ? 'bg-tertiary' : 'bg-secondary'}`}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="news-text">
                                <h3>"{newsData[currentIndex].title}"</h3>
                                <a href={newsData[currentIndex].link} className="read-more">Ver más</a>
                            </div>
                            <div className="news-image">
                                <img src={newsData[currentIndex].image} alt={newsData[currentIndex].title} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button className="carousel-btn next" onClick={nextSlide}>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default News;
