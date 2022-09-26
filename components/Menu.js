import React from "react";
import Link from "next/link";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  const hasSubemenu = () => {
    console.log("submenu");
  };

  return (
    <ul className={styles.nav}>
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/acerca-de">Acerca de</Link>
      </li>
      <li>
        <Link href="/catalogo">Catalogo</Link>
      </li>
      <li className={styles.hasSubmenu}>
        Servicios
        <ul className={styles.submenu}>
          <li className={styles["submenu-item"]}>
            <Link href="/servicios/provision-de-material">
              Provisión de material
            </Link>
          </li>
          <li>
            <Link href="/servicios/preservacion-de-material">
              Preservacion de Material
            </Link>
          </li>
          <li>
            <Link href="/servicios/capacitaciones">Capacitaciones</Link>
          </li>
          <li>
            <Link href="/servicios/asesoria">Asesoria</Link>
          </li>
          <li>
            <Link href="/servicios/otros">Otros</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/industria">Industria</Link>
      </li>
      <li>
        <Link href="/normativa">Normativa</Link>
      </li>
      <li>
        <Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
      </li>
      <li>
        {" "}
        <Link href="/formulario-de-ingreso">Formulario de Ingreso</Link>
      </li>
      <li>
        <Link href="/contacto">Contacto</Link>
      </li>
      <li className={styles.hasSubmenu}>
        Usuario
        <ul className={styles.submenu}>
          <li className={styles["submenu-item"]}>
            <Link href="/iniciar-sesion">Iniciar sesión</Link>
          </li>
          <li>
            <Link href="/registro">Registro de usuario</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Menu;
