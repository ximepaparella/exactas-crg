import Layout from "../../../components/Layout";
import Link from "next/link";
import MaterialList from "../../../components/MaterialList";

export default function MaterialPage() {
  const logged = true;
  return (
    <Layout
      title="Material"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Material</h1>
      </section>
    </Layout>
  );
}
