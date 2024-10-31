import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../../schemas/formularioSchema";

type DescriptionPqrsProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const DescriptionPqrs = ({ register, errors }: DescriptionPqrsProps) => {
  return (
    <>
      <div
        className={`mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-8 px-5 relative ${
          errors.descriptionPqrs
            ? "border-red-500 bg-red-100"
            : "border-gray-500"
        }`}
      >
        <label
          className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4 absolute top-0 left-0"
          htmlFor="idDescriptionPqrs"
        >
          Espacio para describir su PQRSD *
        </label>

        <textarea
          className="w-full h-40 mt-32 lg:mt-20 px-5 border-2 border-gray-600 rounded-md text-xl"
          id="idDescriptionPqrs"
          {...register("descriptionPqrs")}
        ></textarea>
        {errors.descriptionPqrs && (
          <p className="px-5 text-red-600 font-bold animate-scale-infinite">
            {errors.descriptionPqrs.message}
          </p>
        )}
      </div>
    </>
  );
};

export default DescriptionPqrs;
