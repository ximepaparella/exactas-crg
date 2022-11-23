import React from "react";
import Layout from "../../../components/Layout";
import Material from "../../../components/Material";
import Link from "next/link";
import styles from "../../../styles/Material.module.css";

const MaterialDetail = ({ material }) => {
  console.log(material);
  return (
    <Layout
      title="Material"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <div className={styles.header}>
          <h1 className="heading-1 --blue">Ficha de material </h1>
          <Link
            className={styles["ask-material"]}
            alt="Solicitar Material"
            href="/"
          >
            <a> Solicitar Material</a>
          </Link>
        </div>

        <article className={styles.material}>
          <div className="row">
            <ul className={styles["material-detail-list"]}>
              <li>
                <strong>Tipo de Cultivo: </strong>
              </li>

              <li>
                <strong>Estado: </strong>
              </li>

              <li>
                <strong>Tipo de tenencia del material original:</strong>
              </li>

              <li>
                <strong>Tipo de depósito: </strong>
              </li>

              <li>
                <strong>
                  Publicaciones donde se utiliza y menciona el material:
                </strong>
              </li>

              <li>
                <strong>Registros en Bases de Datos Genómicas:</strong>
              </li>

              <li>
                <strong>Nivel de identificación taxonómica:</strong>
              </li>

              <li>
                <strong>Método de identificación o caracterización:</strong>
              </li>

              <li>
                <strong>Características:</strong>
              </li>

              <li>
                <strong>Enfermedad (Disease):</strong>
              </li>

              <li>
                <strong>Número de pasajes:</strong>
              </li>
            </ul>
            <ul className={styles["material-detail-list"]}>
              <li>
                <strong>Método de caracterización: </strong>
              </li>

              <li>
                <strong>Mapa de referencia (Imagen): </strong>
              </li>

              <li>
                <strong>Cita asociada:</strong>
              </li>

              <li>
                <strong>Secuencia: </strong>
              </li>

              <li>
                <strong>Estructura base / andamiaje:</strong>
              </li>

              <li>
                <strong>Sustrato de origen:</strong>
              </li>

              <li>
                <strong>País:</strong>
              </li>

              <li>
                <strong>Provincia o Parque Nacional:</strong>
              </li>

              <li>
                <strong>Parque Nacional:</strong>
              </li>

              <li>
                <strong>Provincia:</strong>
              </li>

              <li>
                <strong>Ciudad:</strong>
              </li>
              <li>
                <strong>Longitud:</strong>
              </li>
              <li>
                <strong>Latitud:</strong>
              </li>
              <li>
                <strong>Google Map:</strong>
              </li>
            </ul>
          </div>
        </article>
        <Link
          className={styles["ask-material"]}
          alt="Solicitar Material"
          href="/"
        >
          <a> Solicitar Material</a>
        </Link>
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/materials/`;
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
