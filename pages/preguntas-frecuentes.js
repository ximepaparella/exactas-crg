import Layout from "../components/Layout";
import Link from "next/link";
import Faq from "../components/Faq";

export default function PreguntasFrecuentes({ faqs }) {
  console.log("faqs", faqs);
  return (
    <Layout
      title="Preguntas Frecuentes"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        {faqs.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const url = "http://localhost:1337/faqs";
  const resp = await fetch(url);
  const faqs = await resp.json();
  console.log("Api Result", faqs);

  return {
    props: {
      faqs,
    },
  };
}
