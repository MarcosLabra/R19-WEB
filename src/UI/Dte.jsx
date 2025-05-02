import React from 'react'
import styles from "./Dte.module.css"
import DirectorCard from '../components/DirectorCard'
import Santiago from "../assets/santiago.png"

const Dte = () => {
    return (
        <section className={styles.container}>

            <p className={styles.text}>
                <strong>La Dirección de Tecnología Educativa (DTE)</strong> tiene como objetivo principal la democratización y sostenibilidad del acceso a la tecnología educativa.
            </p>

            <p className={styles.text}>
                Para lograrlo, las líneas de trabajo se basan en la soberanía y el desarrollo digital, en la generación de condiciones de acceso a la tecnología, en la ampliación de su uso, en la mejora de las condiciones de enseñanza de la tecnología educativa y en la promoción de la universalización de la conectividad escolar y social.
            </p>

            <p className={styles.text}>
                Además, <strong>en articulación con todas las direcciones de nivel y modalidad del sistema educativo bonaerense</strong>, esta Dirección realiza aportes jerarquizadores en términos pedagógicos, a partir de la creación de contenidos digitales que van en línea con los enfoques disciplinares y didácticos de los diseños curriculares vigentes.
            </p>


            <DirectorCard
                image={Santiago}
                name="Santiago Albarracín"
                subtitle="Director de Tecnología Educativa"
                titleColor="#00AEC3"
                circleColor="#E81F76"
            />
        </section>
    )
}

export default Dte