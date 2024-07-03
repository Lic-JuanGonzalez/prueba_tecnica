// components/ContactForm.js
import { useState } from 'react';
import styles from '../styles/modules/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <section className={styles.contact}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
