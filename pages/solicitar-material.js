import Layout from "../components/Layout";
import AskMaterialForm from "../components/AskMaterialForm";

export default function SolicitarMaterial() {
  return (
    <Layout
      title="Solicitar Material"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Solicitar Material</h1>
        <AskMaterialForm />
      </section>
    </Layout>
  );
}
