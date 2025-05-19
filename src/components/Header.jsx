import styles from "./header.module.css";
import HamburgerMenu from 'react-hamburger-menu';
import { useState } from 'react';

// Definir el componente MenuHamburguesa
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.container}>
            <div className={styles.subcontainer}>
                <div className={styles.header}>
                    <a href="#cover" onClick={() => setIsOpen(false)} className={styles.r19}>
                        <h1 className={styles.title}>R19</h1>
                        <h2 className={styles.subtitle}>
                            Dirección de Tecnología Educativa
                        </h2>
                    </a>
                    <HamburgerMenu
                        isOpen={isOpen}
                        menuClicked={toggleMenu}
                        width={30}
                        height={20}
                        strokeWidth={4}
                        rotate={0}
                        color="#fbfbfb"
                        borderRadius={2}
                        animationDuration={0.3}
                    />
                </div>
                <nav className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
                    <ul>
                        <li><a href="#enTerritorio" onClick={() => setIsOpen(false)}>Tecnología Educativa en Territorio</a></li>
                        <li><a href="#dte" onClick={() => setIsOpen(false)}>DTE</a></li>
                        <li><a href="#equipo" onClick={() => setIsOpen(false)}>Equipo</a></li>
                        <li><a href="#instagram" onClick={() => setIsOpen(false)}>Redes y Testimonios</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};

export default Header;