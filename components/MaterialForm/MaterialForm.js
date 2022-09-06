import { useForm } from "react-hook-form";
import styles from "../../styles/Form.module.css";
import DepositConditions from "./DepositConditionsForm";
import RegisterMaterialForm from "./RegisterMaterialForm";
import TechnicalCharacteristicsForm from "./TechnicalCharacteristics";
import MATERIAL from "./../../data/material.constants";

const MaterialForm = () => {
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
        <fieldgroup>
          <label className={styles.label}>
            Estado: <span className={styles.required}>*</span>
          </label>

          <select
            className={styles.select}
            {...register("Entidad", { required: true })}
          >
            {MATERIAL.MATERIAL_STATE.map((materialState) => (
              <option key={materialState} value={materialState}>
                {materialState}
              </option>
            ))}
          </select>
        </fieldgroup>

        <fieldgroup>
          <label className={styles.label}>
            Tipo de tenencia del material original{" "}
            <span className={styles.required}>*</span>
          </label>

          <select
            className={styles.select}
            {...register("Tipo de tenencia del material original", {
              required: true,
            })}
          >
            {MATERIAL.MATERIAL_TYPE_OF_HOLDING.map((materialTypeOfHolding) => (
              <option key={materialTypeOfHolding} value={materialTypeOfHolding}>
                {materialTypeOfHolding}
              </option>
            ))}
          </select>
        </fieldgroup>

        <fieldgroup>
          <label className={styles.label}>
            Estado: <span className={styles.required}>*</span>
          </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Estado"
            {...register("Estado", { required: true, maxLength: 80 })}
          />
        </fieldgroup>
      </fieldset>

      <DepositConditions />
      <RegisterMaterialForm />
      <TechnicalCharacteristicsForm />

      <input className={styles.submit} type="submit" />
    </form>
  );
};

export default MaterialForm;
