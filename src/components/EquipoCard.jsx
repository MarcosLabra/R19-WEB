import React from 'react';
import styles from './EquipoCard.module.css';

function EquipoCard({ nombre, rol, foto }) {
  return (
    <div className={styles.card}>
      <img src={foto} alt={nombre} className={styles.foto} />
      <div className={styles.nombre}><p>{nombre}</p></div>
      <p className={styles.rol}>{rol}</p>
    </div>
  );
}

export default EquipoCard;
