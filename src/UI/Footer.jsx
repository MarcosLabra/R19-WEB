import styles from './Footer.module.css';
import { FaGlobe, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h4 className={styles.title}>Dirección de Tecnología Educativa</h4>

            <div className={styles.links}>
                <a href="https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tecnologia-educativa/tecnologia-educativa/normativa-tecnologia" className={styles.link}>Normativa</a>
                <a href="https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tecnologia-educativa/tecnologia-educativa/documentos-tecnologia" className={styles.link}>Documentos</a>
            </div>

            <div className={styles.contact}>
                <p><strong>Correo Electrónico:</strong><br />region19dte@abc.gob.ar</p>
                <p><strong>Teléfono:</strong><br />(223) 525-1586</p>
            </div>

            <div className={styles.icons}>
                <a href="https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tecnologia-educativa/tecnologia-educativa/direccion-de-tecnologia" className={`${styles.icon} ${styles.globe}`}><FaGlobe size={20} /></a>
                <a href="mailto:region19dte@abc.gob.ar" className={`${styles.icon} ${styles.mail}`}><FaEnvelope size={20} /></a>
                <a href="https://www.instagram.com/dte_region19/" className={`${styles.icon} ${styles.instagram}`}><FaInstagram size={20} /></a>
            </div>
        </footer>
    );
};

export default Footer;
