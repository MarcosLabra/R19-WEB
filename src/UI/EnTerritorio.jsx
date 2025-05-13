import React from 'react'
import styles from "./EnTerritorio.module.css";
import SectionTitle from "../components/SectionTitle"
import AccionesCard from '../components/AccionesCard';
import accionesData from '../data/accionesData';

const EnTerritorio = () => {
    return (
        <section id="enTerritorio" className={styles.container}>
            <SectionTitle
                title="Tecnología Educativa"
                subtitle="en Territorio"
                paddingLeft="16px"
            />
            <div className={styles.cardContainer}>
                {accionesData.map((accion, index) => (
                    <AccionesCard
                        key={index}
                        image={accion.image}
                        title={accion.title}
                        link={`/acciones/${accion.id}`}
                    />
                ))}

            </div>

        </section>
    )
}

export default EnTerritorio