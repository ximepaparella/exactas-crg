import Layout from "../components/Layout";
import Link from "next/link";

export default function FormularioDeIngreso() {
  return (
    <Layout
      title="Formulario de Ingreso"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Formulario de Ingreso</h1>
        <p>
          Por favor para realizar un ingreso de material debes estar registrado.
          <Link href="/registro">
            <a> Registarse </a>
          </Link>
          o
          <Link href="/iniciar-sesion">
            <a> Iniciar Sesión</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
