import React from 'react';
import styles from './AccionesCard.module.css';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccionesCard = ({ image, title, link }) => {
    return (
        <Link to={link} className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.footer}>
                <span className={styles.title}>{title}</span>
                <div className={styles.corner}>
                    <ArrowRight size={24} color="#fbfbfb" />
                </div>
            </div>
        </Link>
    );
};

export default AccionesCard;
