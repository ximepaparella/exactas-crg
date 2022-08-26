import React from "react";
import Link from "next/link";
import styles from "../styles/Material.module.css";

const Material = ({
  id,
  typeName,
  biosecurityLevel,
  placeOfCultivation,
  preservationMethods,
}) => {
  return (
    <article className={styles.material}>
      <div className={styles.fieldset}>
        <p>
          <strong> Id: </strong>
          <span> {id} </span>
        </p>
        <p>
          <strong> Tipo de Cultivo: </strong>
          <span> {typeName} </span>
        </p>
        <p>
          <strong> Medio de Cultivo: </strong>
          <span> {placeOfCultivation} </span>
        </p>
      </div>
      <div className={styles.fieldset}>
        <p>
          <strong> Nivel de Bioseguridad:</strong>
          <span> {biosecurityLevel}</span>
        </p>
        <p>
          <strong> Métodos de Preservación: </strong>
          <span>{preservationMethods}</span>
        </p>
      </div>

      <div className={styles.link}>
        <Link href={`catalogo/material/${id}`}>
          <a>Ver Ficha Completa</a>
        </Link>
      </div>
    </article>
  );
};

export default Material;
