import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <div className="why-header">
                <h1>¿Por qué Elegirnos?</h1>
                <ul>
                    <li><span>Excelencia académica:</span> Comprometidos con la calidad educativa.</li>
                    <li><span>Ambiente inclusivo:</span> Entorno acogedor y respetuoso.</li>
                    <li><span>Recursos de vanguardia:</span> Tecnología de última generación.</li>
                    <li><span>Desarrollo integral:</span> Habilidades socioemocionales.</li>
                </ul>
            </div>

            <div className="why-footer">
                <h2>Somos...</h2>
                <h2>Untref<span>School</span></h2>
            </div>
        </section>
    );
};

export default WhyChooseUs;
