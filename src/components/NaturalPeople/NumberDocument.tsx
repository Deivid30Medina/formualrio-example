// TypeOfRequest.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../../schemas/formularioSchema";

type NumberDocumentProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const NumberDocument = ({ register, errors }: NumberDocumentProps) => {
  return (
    <div
      className={`mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-3 ${
        errors.numberDocument ? "border-red-500 bg-red-100" : "border-gray-500"
      }`}
    >
      <label
        className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4"
        htmlFor="numberDocument"
      >
        Número de documento *
      </label>
      <input
        className="px-5 w-64 lg:w-[600px] xl:w-96 h-10 ml-5 border-2 border-gray-600 rounded-md text-xl"
        id="numberDocument"
        {...register("numberDocument")}
        placeholder="Número Documento"
      />
      {errors.numberDocument && (
        <p className="px-5 text-red-600 font-bold animate-scale-infinite">
          {errors.numberDocument.message}
        </p>
      )}
    </div>
  );
};

export default NumberDocument;
