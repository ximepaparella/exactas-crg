import React from "react";
import Layout from "../../components/Layout";

const MaterialProvision = ({ material }) => {
  const { content } = material;
  return (
    <Layout
      title="Provisión de Material"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Provisión de Material</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </section>
    </Layout>
  );
};

export default MaterialProvision;

export async function getServerSideProps() {
  const url = "http://localhost:1337/material-provision";
  const resp = await fetch(url);
  const material = await resp.json();
  console.log("Api Result", material);

  return {
    props: {
      material,
    },
  };
}
