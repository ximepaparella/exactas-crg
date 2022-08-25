import { useForm } from "react-hook-form";
import styles from "../styles/Form.module.css";

const ContactForm = () => {
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
        <label className={styles.label}>Asunto:</label>
        <input
          className={styles.input}
          placeholder="Asunto"
          {...register("Asunto", { required: true, maxLength: 100 })}
          type="text"
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label className={styles.label}>
          Mensaje: <span className={styles.required}>*</span>
        </label>
        <textarea className={styles.textarea} {...register("Mensaje", {})} />
      </fieldset>

      <input className={styles.submit} type="submit" />
    </form>
  );
};

export default ContactForm;
