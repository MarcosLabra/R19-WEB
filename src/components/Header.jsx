import React, { useState } from 'react';
import styles from "./header.module.css";
import HamburgerMenu from 'react-hamburger-menu';

// Definir el componente MenuHamburguesa
const MenuHamburguesa = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={styles.container} >
                <div className={styles.header}>
                    <h1 className={styles.title}>R19</h1>
                    <HamburgerMenu
                        isOpen={isOpen}          // Estado de si está abierto o cerrado
                        menuClicked={toggleMenu} // Función que cambia el estado
                        width={30}               // Ancho de las líneas
                        height={20}              // Altura de las líneas
                        strokeWidth={4}          // Grosor de las líneas
                        rotate={0}               // Rotación al abrir (puedes ajustarlo)
                        color="#fbfbfb"            // Color del ícono
                        borderRadius={2}         // Sin bordes redondeados
                        animationDuration={0.3}  // Duración de la animación
                    />
                </div>
                <h2 className={styles.subtitle} >Dirección de Tecnología Educativa</h2>
            </div>
        </>
    );
}

export default MenuHamburguesa;
