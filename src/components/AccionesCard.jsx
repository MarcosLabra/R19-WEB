import React from 'react';
import styles from './AccionesCard.module.css';
import { ArrowRight } from 'lucide-react'; // Usando ícono de flecha

const AccionesCard = ({ image, title, link }) => {
    return (
        <a href={link} className={styles.card} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.footer}>
                <span className={styles.title}>{title}</span>
                <div className={styles.corner}>
                    <ArrowRight size={24} color="#fbfbfb" />
                </div>
            </div>
        </a>
    );
};

export default AccionesCard;
