import React from 'react';
import styles from './SectionTitle2lines.module.css';

const SectionTitle2lines = ({ title, subtitle, paddingLeft = '0px' }) => {
    return (
        <div className={styles.wrapper} style={{ paddingLeft }}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    );
};

export default SectionTitle2lines;
