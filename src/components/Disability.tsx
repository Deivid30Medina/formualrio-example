// TypeOfRequest.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../schemas/formularioSchema";
import { disabilityOptions } from "../utils/disabilityOptions";

type ReasonRequestProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const Disability = ({ register, errors }: ReasonRequestProps) => {
  return (
    <div>
      <h3>¿Tiene algún tipo de discapacidad? *</h3>
      {disabilityOptions.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.id}
            value={option.value}
            {...register("typeDisability")}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
      {errors.typeDisability && <p>{errors.typeDisability.message}</p>}
    </div>
  );
};

export default Disability;
