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
    <div
      className={`w-full border-2 flex flex-col items-start justify-center gap-4 pb-3 ${errors.typeRequest ? "border-red-500 bg-red-100" : "border-gray-500"}`}
    >
      <h3 className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4">Tipo de solicitud *</h3>
      {requestOptions.map((option) => (
        <div className="flex flex-col items-start justify-center gap-1 px-5" key={option.value}>
          <div className="w-full flex items-center justify-center flex-nowrap gap-2">
            <input
              className="w-6 h-6 cursor-pointer"
              type="radio"
              id={option.id}
              value={option.value}
              {...register("typeRequest")}
            />
            <label className="font-bold cursor-pointer w-full" htmlFor={option.id}>{option.label}</label>
          </div>
          <p>{option.description}</p>
        </div>
      ))}
      {errors.typeRequest && <p className="px-5 text-red-600 font-bold animate-scale-infinite">{errors.typeRequest.message}</p>}
    </div>
  );
};

export default TypeOfRequest;
