import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import styles from "../styles/Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <Image
            src="/logo.svg"
            alt="Centro de Recursos Genéticos"
            width={250}
            height={63}
          />
        </a>
      </Link>
    </div>

    <Menu />
  </header>
);

export default Header;
