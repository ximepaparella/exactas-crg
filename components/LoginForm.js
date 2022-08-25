import { useForm } from "react-hook-form";
import styles from "../styles/Form.module.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.fieldset}>
        <label className={styles.label}>
          E-mail <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          {...register("Email", { required: true, maxLength: 30 })}
        />
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>
          Contraseña: <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          {...register("Password", { required: true, maxLength: 30 })}
        />
      </fieldset>

      <input className={styles.submit} type="submit" value="Iniciar sesión" />
    </form>
  );
};

export default LoginForm;
