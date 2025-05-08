import React from 'react'
import styles from "./Testimonios.module.css"
import TestimonioCard from '../components/TestimonioCard'

const Testimonios = () => {
  return (
    <section className={styles.sectionContainer}>
        <TestimonioCard/>
    </section>
  )
}

export default Testimonios