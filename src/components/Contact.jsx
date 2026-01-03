import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setFormData({ nombre: '', email: '', mensaje: '' });
        }, 1500);
    };

    return (
        <section className="contact" id="contacto">
            <div className="contact-container">
                <h2>Contáctanos</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                    {status === 'success' && <p className="success-msg">¡Mensaje enviado con éxito!</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
