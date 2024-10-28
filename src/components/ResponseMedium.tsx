// TypeOfRequest.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../schemas/formularioSchema";
import { responseMedium } from "../utils/responseMedium";

type ResponseMediumProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const ResponseMedium = ({ register, errors }: ResponseMediumProps) => {
  return (
    <>
      <div>
        <h3>Medio de respuesta *</h3>
        {responseMedium.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={option.id}
              value={option.value}
              {...register("typeDocument")}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
        {errors.responseMedium && <p>{errors.responseMedium.message}</p>}
      </div>
      <div>
        <label htmlFor="idCorreo">Correo electrónico *</label>
        <input
          id="idCorreo"
          {...register("email")}
          placeholder="Correo"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
    </>
  );
};

export default ResponseMedium;
