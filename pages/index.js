import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout
      title="Inicio"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className={styles["section-home"]}>
        <div className={styles.intro}>
          <p>
            El Centro de Recursos Genéticos de la FCEN – UBA (CRG) es creado
            mediante Resolución (CD) Nº 1560/18, con el objeto de asegurar la
            preservación de los recursos genéticos bajo resguardo de la
            FCEN-UBA, con un fuerte compromiso con la promoción del uso
            sustentable de estos recursos y la distribución justa y equitativa
            de los beneficios derivados de su uso. El CRG busca ofrecer espacios
            integradores y dinámicos de articulación, respondiendo a las
            demandas de la Institución y de la sociedad en su conjunto,
            participando con un rol activo en el desarrollo de innovaciones
            biotecnológicas.
          </p>
        </div>
        <div className={styles.center}>
          <div className={styles.testimonial}>
            <p>
              Los Centros de recursos genéticos ofrecen material biológico para:{" "}
            </p>
            <blockquote>
              Proveer herramientas para el estudio de problemáticas de la salud
              humana{" "}
            </blockquote>
          </div>

          <div className={styles.services}>
            <h3 className="heading-services">Servicios</h3>
            <div className={styles["services-list"]}>
              <Link href="/provision-de-material">
                <a>Provisión de material</a>
              </Link>

              <Link href="/preservacion-de-material">
                <a>Provisión de material</a>
              </Link>
              <Link href="/capacitaciones">
                <a>Capacitaciones</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.linking}>
          <Link href="/catalogo">
            <a>Microorganismos</a>
          </Link>
          <Link href="/catalogo">
            <a>Lineas Celulares</a>
          </Link>
          <Link href="/catalogo">
            <a>Plásmidos</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
