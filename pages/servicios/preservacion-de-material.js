import React from "react";
import Layout from "../../components/Layout";

const MaterialPreservation = ({ material }) => {
  const { description } = material;
  return (
    <Layout
      title="Capacitaciones"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Preservación de material</h1>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </section>
    </Layout>
  );
};

export default MaterialPreservation;

export async function getServerSideProps() {
  const url = "http://localhost:1337/preservation-material";
  const resp = await fetch(url);
  const material = await resp.json();
  console.log("Api Result", material);

  return {
    props: {
      material,
    },
  };
}
