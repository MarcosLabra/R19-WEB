import BotonDte from '../components/BotonDte'
import IconCard from '../components/IconCard';
import styles from "./DteActividades.module.css"

import entregaImg from '../assets/entrega-equip.png'; // Ruta a la imagen
import conectImg from '../assets/conectividad-escolar.png'; // Ruta a la imagen

const botones = [
    { titulo: "Medios Escolares Bonaerenses", link: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tecnologia-educativa/tecnologia-educativa/medios-escolares" },
    { titulo: "Propuestas formativas", link: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tecnologia-educativa/tecnologia-educativa/propuestas-formativas" },
    { titulo: "Continuemos Estudiando", link: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tecnologia-educativa/tecnologia-educativa/continuemos-estudiando" },
    { titulo: "Entornos Virtuales de Enseñanza y Aprendizaje", link: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tecnologia-educativa/tecnologia-educativa/entornos-virtuales-de" },
    { titulo: "Clubes de Tecnología", link: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tecnologia-educativa/tecnologia-educativa/clubes-de-tecnologia" },
    { titulo: "Recuperación de Equipamiento", link: "https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tecnologia-educativa/tecnologia-educativa/recuperacion-de" }
];

const DteActividades = () => {
    return (
        <section id="dteActividades" className={styles.sectionContainer}>
            <div className={styles.botonContainer}>
                {botones.map((boton, index) => (
                    <BotonDte key={index} titulo={boton.titulo} link={boton.link} />
                ))}
            </div>
            <div className={styles.iconContainer}>
                <IconCard title="Entrega de Equipamiento" image={entregaImg} link="https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tecnologia-educativa/tecnologia-educativa/entrega-de-equipamiento"/>
                <IconCard title="Conectividad Escolar" image={conectImg} link="https://abc.gob.ar/secretarias/areas/subsecretaria-de-educacion/tecnologia-educativa/tecnologia-educativa/conectividad-escolar" />
            </div>
        </section>

    );
};

export default DteActividades