import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <Image
      src="/crg-chico.png"
      width={62}
      height={29}
      alt="Centro de Recursos Genéticos"
    />
    <Link href="https://exactas.uba.ar/">
      <a rel="noreferrer" target="_blank">
        <Image
          src="/exactas-chico.png"
          width={180}
          height={28}
          alt="Universidad de Buenos Aires"
        />
      </a>
    </Link>
  </footer>
);

export default Footer;
