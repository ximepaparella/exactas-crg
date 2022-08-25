import Layout from "../components/Layout";
import Login from "../components/LoginForm";

export default function IniciarSesion() {
  return (
    <Layout
      title="Iniciar sesion"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Iniciar sesion</h1>
        <Login />
      </section>
    </Layout>
  );
}
