import Layout from "../components/Layout";
import RegisterForm from "../components/RegisterForm";

export default function Registro() {
  return (
    <Layout
      title="Registro"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Registro</h1>
        <RegisterForm />
      </section>
    </Layout>
  );
}
