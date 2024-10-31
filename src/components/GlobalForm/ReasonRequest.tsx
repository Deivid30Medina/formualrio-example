// TypeOfRequest.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../../schemas/formularioSchema";
import { reasonForRequestOptions } from "../../utils/reasonForRequestOptions";

type ReasonRequestProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const ReasonRequest = ({ register, errors }: ReasonRequestProps) => {
  return (
    <div className={`mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-3 ${errors.reasonRequest ? "border-red-500 bg-red-100" : "border-gray-500"}`}>
      <h3 className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4">Motivación de la solicitud *</h3>
      {reasonForRequestOptions.map((option) => (
        <div className="w-full flex items-center justify-start flex-nowrap gap-2 px-5" key={option.id}>
          <input
            className="w-6 h-6 cursor-pointer"
            type="radio"
            id={option.id}
            value={option.value}
            {...register("reasonRequest")}
          />
          <label className="font-bold cursor-pointer w-full" htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
      {errors.reasonRequest && <p className="px-5 text-red-600 font-bold animate-scale-infinite">{errors.reasonRequest.message}</p>}
    </div>
  );
};

export default ReasonRequest;
