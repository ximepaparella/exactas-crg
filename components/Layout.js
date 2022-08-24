import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title, description }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Centro de Recursos Genéticos - {title} </title>
        <meta description={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
