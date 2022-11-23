import React from "react";
import Layout from "../../components/Layout";

const Others = ({ others }) => {
  // const { description } = others;
  return (
    <Layout
      title="Capacitaciones"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Otros</h1>
        {/* <div dangerouslySetInnerHTML={{ __html: description }}></div> */}
      </section>
    </Layout>
  );
};

export default Others;

// export async function getServerSideProps() {
//   const url = `${process.env.NEXT_PUBLIC_API_URL}/others`;
//   const resp = await fetch(url);
//   const others = await resp.json();
//   console.log("Api Result", others);

//   return {
//     props: {
//       others,
//     },
//   };
// }
