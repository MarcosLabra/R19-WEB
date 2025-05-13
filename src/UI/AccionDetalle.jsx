import { useParams } from 'react-router-dom';
import accionesData from '../data/accionesData';
import styles from './AccionDetalle.module.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from '../components/Header';

const AccionDetalle = () => {
    const { accionId } = useParams();

    const accion = accionesData.find(item => item.id === accionId);

    if (!accion) {
        return <div style={{ padding: '2rem' }}>Acción no encontrada</div>;
    }

    return (
        <>
            <div className={styles.pageContainer}>
                <Header />
                <div className={styles.Container}>
                    <h1 className={styles.title}>{accion.title}</h1>

                    {/* Imagen con fondo detrás */}
                    <div className={styles.imageWrapper}>
                        <div className={styles.backgroundBox}></div>
                        <img src={accion.image} alt={accion.title} className={styles.image} />
                    </div>

                    {Array.isArray(accion.description) ? (
                        accion.description.map((paragraph, index) => (
                            <p key={index} className={styles.description}>
                                {paragraph}
                            </p>
                        ))
                    ) : (
                        <p className={styles.description}>{accion.description}</p>
                    )}
                </div>
                <Link to="/" className={styles.backLink}>← Volver al inicio</Link>
            </div>
            <Footer />
        </>
    );
};

export default AccionDetalle;
