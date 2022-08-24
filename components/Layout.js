import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Main.module.css";

const Layout = ({ children, title, description }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Centro de Recursos Genéticos - {title} </title>
        <meta description={description} />
      </Head>
      <Header />

      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
