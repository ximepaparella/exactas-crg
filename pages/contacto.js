import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

export default function Contacto() {
  return (
    <Layout
      title="Contacto"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Contacto</h1>
        <ContactForm />
      </section>
    </Layout>
  );
}
