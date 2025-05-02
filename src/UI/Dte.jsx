import React from 'react'
import styles from "./Dte.module.css"
import DirectorCard from '../components/DirectorCard'
import Santiago from "../assets/santiago.png"

const Dte = () => {
    return (
        <section className={styles.container}>
            <DirectorCard
                image={Santiago}
                name="Santiago Albarracín"
                subtitle="Director de Tecnología Educativa"
                circleColor="#E81F76"
            />
        </section>
    )
}

export default Dte