import React from "react";
import Layout from "../../components/Layout";

const Training = ({ training }) => {
  const { description } = training;
  return (
    <Layout
      title="Capacitaciones"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Capacitaciones</h1>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </section>
    </Layout>
  );
};

export default Training;

export async function getServerSideProps() {
  const url = "http://localhost:1337/capacitaciones";
  const resp = await fetch(url);
  const training = await resp.json();
  console.log("Api Result", training);

  return {
    props: {
      training,
    },
  };
}
