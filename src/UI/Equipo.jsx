import React from 'react'
import SectionTitle from '../components/SectionTitle'
import styles from "./Equipo.module.css"
import DirectorCard from '../components/DirectorCard'
import Mario from '../assets/Mario.png'

const Equipo = () => {
    return (
        <section className={styles.container}>
            <SectionTitle
                title="Equipo"
                subtitle="en la region"
                paddingLeft="16px"
            />
            <div className={styles.equipoContainer}>
                <DirectorCard
                    image={Mario}
                    name="Mario de Paolo"
                    subtitle="Coordinador Regional"
                    titleColor="#fbfbfb"
                    circleColor="#417099"
                />
            </div>
            <SectionTitle
                title="Medios Escolares"
                subtitle=""
                paddingLeft="16px"
            />
        </section>
    )
}

export default Equipo