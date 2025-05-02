import React from 'react'
import styles from "./EnTerritorio.module.css";
import SectionTitle2lines from "../components/SectionTitle2lines"
import AccionesCard from '../components/AccionesCard';
import asistTecnica from '../assets/asistTecnica.png';
import capDoc from '../assets/capDoc.png';
import cdt from '../assets/cdt.png';
import medios from '../assets/medios.png';
import proyEsc from '../assets/proyEsc.png';

const acciones = [
    { image: cdt, title: 'Clubes de Tecnología', link: '' },
    { image: capDoc, title: 'Capacitación Docente', link: '' },
    { image: proyEsc, title: 'Proyectos Escolares', link: '' },
    { image: medios, title: 'Medios Escolares', link: '' },
    { image: asistTecnica, title: 'Asistencia Técnica', link: '' },
];



const EnTerritorio = () => {
    return (
        <section className={styles.container}>
            <SectionTitle2lines
                title="Tecnología Educativa"
                subtitle="en Territorio"
                paddingLeft="16px"
            />
            <div className={styles.cardContainer}>
                {acciones.map((accion, index) => (
                    <AccionesCard
                        key={index}
                        image={accion.image}
                        title={accion.title}
                        link={accion.link}
                    />
                ))}
            </div>

        </section>
    )
}

export default EnTerritorio