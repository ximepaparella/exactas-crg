import Layout from "../components/Layout";
import Link from "next/link";

export default function AcercaDe({ about }) {
  const {
    vision_title,
    vision_text,
    mision_title,
    history_title,
    functions_title,
    functions_text,
    history_text,
    objetives_text,
    objetives_title,
    mision_text,
  } = about;
  return (
    <Layout
      title="Acerca de"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Acerca de</h1>
        <h2 className="heading-2">{history_title}</h2>
        <p dangerouslySetInnerHTML={{ __html: history_text }}></p>

        <h2 className="heading-2">{mision_title}</h2>
        <p dangerouslySetInnerHTML={{ __html: mision_text }}></p>
        <h2 className="heading-2">{vision_title}</h2>
        <p dangerouslySetInnerHTML={{ __html: vision_text }}></p>

        <h2 className="heading-2">{objetives_title}</h2>
        <div dangerouslySetInnerHTML={{ __html: objetives_text }}></div>
        <h2 className="heading-2">{functions_title}</h2>
        <div dangerouslySetInnerHTML={{ __html: functions_text }}></div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/about-us`;
  const resp = await fetch(url);
  const about = await resp.json();
  console.log("Api Result", about);

  return {
    props: {
      about,
    },
  };
}
