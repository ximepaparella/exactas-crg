import { useForm } from "react-hook-form";
import styles from "../styles/Form.module.css";

const AskMaterialForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("data", data);
  console.log(errors);
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.fieldset}>
        <label className={styles.label}>
          Nombre: <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.input}
          type="text"
          placeholder="Nombre"
          {...register("Nombre", { required: true, maxLength: 80 })}
        />
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>
          Email: <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>
          Material a Solicitar: <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.input}
          placeholder="Ingrese el código del material"
          {...register("Material", { required: true, maxLength: 100 })}
          type="text"
        />
      </fieldset>

      <input
        className={styles.submit}
        type="submit"
        value="Solicitar material"
      />
    </form>
  );
};

export default AskMaterialForm;
