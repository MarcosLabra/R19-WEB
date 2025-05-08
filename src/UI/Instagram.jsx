import React from 'react'
import styles from "./Instagram.module.css"
import InstagramFeed from '../components/InstagramFeed'

const Instagram = () => {
    return (
        <section className={styles.sectionContainer}>
            <h3 className={styles.title}>Seguinos en <a href="https://www.instagram.com/dte_region19/">@dte_region19</a></h3>
            <InstagramFeed />
        </section>
    )
}

export default Instagram