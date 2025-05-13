import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './AccionDetalle.module.css';

const AccionDetalle = () => {
  const location = useLocation();
  const { title, image, description } = location.state || {};

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          <img src={image} alt={title} className={styles.image} />
          <p className={styles.text}>{description}</p>
        </div>
        <p className={styles.text}>
          Para más información, <a href="mailto:region19dte@abc.gob.ar">contactarse con el equipo territorial</a>
        </p>
      </section>
    </main>
  );
};

export default AccionDetalle;
