import React from "react";
import Layout from "../../components/Layout";

const Advisory = ({ advisory }) => {
  const { description } = advisory;
  return (
    <Layout
      title="Asesoría"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Asesoría</h1>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </section>
    </Layout>
  );
};

export default Advisory;

export async function getServerSideProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/asesoria`;
  console.log(url);
  const resp = await fetch(url);
  const advisory = await resp.json();
  console.log("Api Result", advisory);

  return {
    props: {
      advisory,
    },
  };
}
