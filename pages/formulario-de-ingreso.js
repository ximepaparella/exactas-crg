import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import Link from "next/link";
import MaterialForm from "../components/MaterialForm/MaterialForm";
import { MATERIAL } from "../data/index";
import styles from "../styles/Form.module.css";

export default function FormularioDeIngreso() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("data", data);
  console.log(errors);

  const logged = true;
  return (
    <Layout
      title="Formulario de Ingreso"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Formulario de Ingreso</h1>

        {logged ? (
          <>
            <form
              className={styles["form-full-width"]}
              onSubmit={handleSubmit(onSubmit)}
            >
              <fieldset className={styles.fieldset}>
                <label className={styles.label}>
                  Tipo de microorganismo:{" "}
                  <span className={styles.required}> *</span>
                </label>
                <select
                  className={styles.select}
                  {...register("Tipo de microorganismo", {
                    required: true,
                    maxLength: 100,
                  })}
                >
                  {MATERIAL.MATERIAL_TYPE_NAME.map((materialTypeName) => (
                    <option key={materialTypeName} value={materialTypeName}>
                      {materialTypeName}
                    </option>
                  ))}
                </select>
              </fieldset>
            </form>

            <MaterialForm />
          </>
        ) : (
          <>
            <p>
              Por favor para realizar un ingreso de material debes estar
              registrado.
              <Link href="/registro">
                <a> Registarse </a>
              </Link>
              o
              <Link href="/iniciar-sesion">
                <a> Iniciar Sesión</a>
              </Link>
            </p>
          </>
        )}
      </section>
    </Layout>
  );
}
