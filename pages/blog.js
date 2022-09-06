import Layout from "../components/Layout";

const Blog = ({ entries }) => {
  console.log("Entries", entries);
  return (
    <Layout
      title="Acerca de"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1>Blog</h1>
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = "http://localhost:1337/blogs";
  const resp = await fetch(url);
  const entries = await resp.json();

  return {
    props: {
      entries,
    },
  };
}

export default Blog;
