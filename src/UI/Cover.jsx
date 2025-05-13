import React from 'react'
import styles from "./cover.module.css"
import bgCover from "../assets/BG-Cover.png"
import logoPbaCover from "../assets/logo-pba-cover.png"
import Header from '../components/Header'

const Cover = () => {
    return (
        <section id="cover" className={styles.container} style={{ backgroundImage: `url(${bgCover})` }}>
            <Header />
            <div className={styles.logoContainer}>
                <img src={logoPbaCover} alt="Logo PBA" className={styles.logo} />
            </div>
        </section>
    )
}

export default Cover