import React from "react";
import Layout from "../components/Layout";

const Industry = ({ industry }) => {
  const { description, mushrooms, bacterias, others } = industry;
  return (
    <Layout
      title="Industria"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Industria</h1>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
        <div className="row">
          <div dangerouslySetInnerHTML={{ __html: mushrooms }}></div>
          <div dangerouslySetInnerHTML={{ __html: bacterias }}></div>
          <div dangerouslySetInnerHTML={{ __html: others }}></div>
        </div>
      </section>
    </Layout>
  );
};

export default Industry;

export async function getServerSideProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/industry`;
  const resp = await fetch(url);
  const industry = await resp.json();
  console.log("Api Result", industry);

  return {
    props: {
      industry,
    },
  };
}
