import React from 'react'
import styles from "./EnTerritorio.module.css";
import SectionTitle2lines from "../components/SectionTitle2lines"

const EnTerritorio = () => {
    return (
        <section className={styles.container}>
            <SectionTitle2lines
                title="Tecnología Educativa"
                subtitle="en Territorio"
                paddingLeft="16px"
            />

        </section>
    )
}

export default EnTerritorio