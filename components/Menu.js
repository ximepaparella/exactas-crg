import React from "react";
import Link from "next/link";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Inicio</Link>
      <Link href="/acerca-de">Acerca de</Link>
      <Link href="/catalogo">Catalogo</Link>
      <Link href="/servicios">Servicios</Link>
      <Link href="/industria">Industria</Link>
      <Link href="/normativa">Normativa</Link>
      <Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
      <Link href="/formulario-de-ingreso">Formulario de Ingreso</Link>
      <Link href="/contacto">Contacto</Link>
      <Link href="/usuario">Usuario</Link>
    </nav>
  );
};

export default Menu;
