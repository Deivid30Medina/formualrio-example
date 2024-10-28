// TypeOfRequest.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../schemas/formularioSchema";
import { typeDocumentOptions } from "../utils/typeDocumentOptions";

type TypeDocumentProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const TypeDocument = ({ register, errors }: TypeDocumentProps) => {
  return (
    <div>
      <h3>Tipo de Documento *</h3>
      {typeDocumentOptions.map((option) => (
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
      {errors.typeDocument && <p>{errors.typeDocument.message}</p>}
    </div>
  );
};

export default TypeDocument;
