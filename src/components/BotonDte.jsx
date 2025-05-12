import React from 'react';
import styles from './BotonDte.module.css';

const BotonDte = ({ titulo, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.boton}>
      {titulo}
    </a>
  );
};

export default BotonDte;
