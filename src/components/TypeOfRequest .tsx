// TypeOfRequest.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { requestOptions } from "../utils/requestOptions";
import { FormularioData } from "../schemas/formularioSchema";

type TypeOfRequestProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const TypeOfRequest = ({ register, errors }: TypeOfRequestProps) => {
  return (
    <div>
      <h3>Tipo de solicitud *</h3>
      {requestOptions.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.id}
            value={option.value}
            {...register("typeRequest")}
          />
          <label htmlFor={option.id}>{option.label}</label>
          <p>{option.description}</p>
        </div>
      ))}
      {errors.typeRequest && <p>{errors.typeRequest.message}</p>}
    </div>
  );
};

export default TypeOfRequest;
