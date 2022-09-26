import React from "react";
import Layout from "../../components/Layout";
import Material from "../../components/Material";
import styles from "../../styles/Material.module.css";

const MaterialDetail = ({ material }) => {
  console.log(material);
  return (
    <Layout
      title="Material"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1 --blue">Ficha de material AF543F</h1>
        <div className={styles.material}>
          {<Material key={material.id} id={material.id} />}
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = "http://localhost:1337/materials/";
  const resp = await fetch(url);
  const materiales = await resp.json();

  const paths = materiales.map((material) => ({
    params: { id: material.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { id } }) {
  const url = `http://localhost:1337/materials/${id}`;
  const resp = await fetch(url);
  const material = await resp.json();

  console.log(url);
  console.log(material);
  return {
    props: { material },
  };
}

export default MaterialDetail;
