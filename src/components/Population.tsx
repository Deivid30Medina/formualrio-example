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
    <div className={`mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-3 ${errors.typeRequest ? "border-red-500 bg-red-100" : "border-gray-500"}`}>
      <h3 className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4">¿Usted hace parte de alguna de estas poblaciones? *</h3>
      {populationOptions.map((option) => (
        <div className="w-full flex items-center justify-start flex-nowrap gap-2 px-5" key={option.value}>
          <input
            className="w-6 h-6 cursor-pointer"
            type="radio"
            id={option.id}
            value={option.value}
            {...register("typePopulation")}
          />
          <label className="font-bold cursor-pointer w-full" htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
      {errors.typePopulation && <p className="px-5 text-red-600 font-bold animate-scale-infinite">{errors.typePopulation.message}</p>}
    </div>
  );
};

export default Population;
