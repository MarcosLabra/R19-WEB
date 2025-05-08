import React from 'react';
import styles from './TestimonioCard.module.css';
import picF from "../assets/picPlaceHolderF.png"
import comillas from "../assets/comillas.png"

const TestimonioCard = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img src={comillas} alt="Comillas" className={styles.quoteImg} />
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur. Massa tristique quam felis sit.
                    Turpis venenatis velit massa lectus donec et diam eu.
                </p>
                <div className={styles.avatarContainer}>
                    <img src={picF} alt="Avatar" className={styles.avatarImg} />
                </div>
                <div className={styles.author}>autor de testimonio</div>
            </div>
            <div className={styles.gradientBar}></div>
        </div>
    );
};

export default TestimonioCard;
