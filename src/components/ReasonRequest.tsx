// TypeOfRequest.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../schemas/formularioSchema";
import { reasonForRequestOptions } from "../utils/reasonForRequestOptions";

type ReasonRequestProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const ReasonRequest = ({ register, errors }: ReasonRequestProps) => {
  return (
    <div>
      <h3>Motivación de la solicitud *</h3>
      {reasonForRequestOptions.map((option) => (
        <div key={option.id}>
          <input
            type="radio"
            id={option.id}
            value={option.value}
            {...register("reasonRequest")}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
      {errors.reasonRequest && <p>{errors.reasonRequest.message}</p>}
    </div>
  );
};

export default ReasonRequest;
