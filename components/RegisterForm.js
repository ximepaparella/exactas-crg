import { useForm } from "react-hook-form";
import styles from "../styles/Form.module.css";

const RegisterForm = () => {
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
          Apellido: <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.input}
          type="text"
          placeholder="Apellido"
          {...register("Apellido", { required: true, maxLength: 80 })}
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label className={styles.label}>
          Entidad a la que pertenece: <span className={styles.required}>*</span>
        </label>
        <select
          className={styles.select}
          {...register("Entidad", { required: true })}
        >
          <option value="entidad-1">Entidad 1</option>
          <option value="entidad-2">Entidad 2</option>
        </select>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Tipo de entidad:</label>
        <input
          className={styles.input}
          placeholder="Tipo de entidad"
          {...register("Tipo de entidad", { required: true, maxLength: 100 })}
          type="text"
        />
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>
          País <span className={styles.required}>*</span>
        </label>
        <select
          className={styles.select}
          {...register("Pais", { required: true, maxLength: 100 })}
        >
          <option value="pais-1">País 1</option>
          <option value="pais-2">País 2</option>
        </select>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Cargo en la entidad:</label>
        <input
          className={styles.input}
          placeholder="Cargo en la entidad"
          {...register("Cargo en la entidad", {
            required: true,
            maxLength: 100,
          })}
          type="text"
        />
      </fieldset>

      <input className={styles.submit} type="submit" value="Registrarse" />
    </form>
  );
};

export default RegisterForm;
