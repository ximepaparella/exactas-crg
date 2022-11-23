import React from "react";
import Header from "./DashHeader";
import styles from "../../styles/DashboardLayout.module.css";

const DashLayout = ({ children }) => {
  return (
    <>
      <section>
        <header className={styles.header}>
          <Header />
        </header>
        <div className={styles.wrapper}>
          <main className={styles.main}>{children}</main>
        </div>
        {/* <footer className={styles.footer}>
          Copyright 2022. Todos los derechos reservados.
        </footer> */}
      </section>
    </>
  );
};

export default DashLayout;
