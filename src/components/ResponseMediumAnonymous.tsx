// TypeOfRequest.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../schemas/formularioSchema";
import { responseMedium } from "../utils/responseMedium";

type ResponseMediumProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const ResponseMediumAnonymous = ({ register, errors }: ResponseMediumProps) => {
  return (
    <>
      <div>
        <h3>Medio de respuesta</h3>
        {responseMedium.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={option.id}
              value={option.value}
              {...register("responseMediumAnonymous")}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="idCorreo">Correo electrónico</label>
        <input
          id="idCorreo"
          {...register("emailAnonymous")}
          placeholder="Correo"
        />
        {errors.emailAnonymous && <p>{errors.emailAnonymous.message}</p>}
      </div>
    </>
  );
};

export default ResponseMediumAnonymous;
