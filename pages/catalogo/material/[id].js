import Layout from "../../../components/Layout";
import Link from "next/link";
import styles from "../../../styles/Material.module.css";

export default function MaterialPage() {
  return (
    <Layout
      title="Material"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className={styles["material-page"]}>
        <div className={styles.heading}>
          <h1 className="heading-1 --blue">Ficha de material sin nomenclar</h1>
          <Link href="/solicitar-material">
            <a>Solicitar Material</a>
          </Link>
        </div>
        <div className={styles.body}>
          <div>
            <p>
              <strong className="strong">Tipo de Cultivo: </strong>
              Microorganismos – Bacterias adquiridas
            </p>
            <p>
              <strong className="strong"> Estado:</strong>
            </p>
            <p>
              <strong className="strong">
                Material modificado a partir de un material original{" "}
              </strong>
            </p>
            <p>
              <strong className="strong">
                {" "}
                Tipo de tenencia del material original:{" "}
              </strong>
            </p>
            <p>
              <strong className="strong">
                {" "}
                Recolectado del medioambiente:{" "}
              </strong>
            </p>
            <p>
              <strong className="strong">Tipo de depósito: </strong>
              Transferencia permitida solamente a otros investigadores FCEN
            </p>
            <p>
              <strong className="strong">
                Publicaciones donde se utiliza y menciona el material:
              </strong>
              <p>
                <strong className="strong">
                  Registros en Bases de Datos Genómicas:
                </strong>
              </p>
            </p>
            <p>
              <strong className="strong">
                Nivel de identificación taxonómica:
              </strong>
            </p>
            <p>
              <strong className="strong">
                Método de identificación o caracterización:
              </strong>
            </p>
            <p>
              <strong className="strong">Características:</strong>
            </p>
            <p>
              <strong className="strong">Enfermedad (Disease):</strong>
            </p>
            <p>
              <strong className="strong">Número de pasajes:</strong>
            </p>
          </div>
          <div>
            <p>
              <strong className="strong"> Método de caracterización:</strong>
            </p>
            <p>
              <strong className="strong">Mapa de referencia (Imagen): </strong>
            </p>
            <p>
              <strong className="strong">Cita asociada:</strong>
            </p>
            <p>
              <strong className="strong">
                Secuencia: Estructura base / andamiaje:
              </strong>
            </p>
            <p>
              <strong className="strong">Sustrato de origen:</strong>dsadsa test{" "}
            </p>
            <p>
              <strong className="strong">País: Austria </strong>
            </p>
            <p>
              <strong className="strong">Provincia o Parque Nacional:</strong>
            </p>
            <p>
              <strong className="strong">Parque Nacional: </strong>
            </p>
            <p>
              <strong className="strong">Provincia: </strong>
            </p>
            <p>
              <strong className="strong">Ciudad: </strong>Caba
            </p>
            <p>
              <strong className="strong">Longitud: </strong>
            </p>
            <p>
              <strong className="strong">Latitud: </strong>
            </p>
            <p>
              <strong className="strong">Google Map:</strong>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
