// TypeOfRequest.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../schemas/formularioSchema";
import { populationOptions } from "../utils/populationOptions";

type ReasonRequestProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const Population = ({ register, errors }: ReasonRequestProps) => {
  return (
    <div>
      <h3>¿Usted hace parte de alguna de estas poblaciones? *</h3>
      {populationOptions.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.id}
            value={option.value}
            {...register("typePopulation")}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
      {errors.typePopulation && <p>{errors.typePopulation.message}</p>}
    </div>
  );
};

export default Population;
