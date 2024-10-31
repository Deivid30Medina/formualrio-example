// TypeOfRequest.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../../schemas/formularioSchema";

type NamesAndLastNameProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const NamesAndLastName = ({ register, errors }: NamesAndLastNameProps) => {
  return (
    <div
      className={`mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-3 ${
        errors.name || errors.lastName
          ? "border-red-500 bg-red-100"
          : "border-gray-500"
      }`}
    >
      <h3 className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4">
        Nombres y Apellidos *
      </h3>

      <div className="px-5 flex flex-col items-start justify-center">
        <label htmlFor="name" className="text-lg">
          Nombres{" "}
          <span className="text-color-obligatorio-form text-2xl">*</span>
        </label>
        <input
          className="w-64 px-5 border-2 h-14 lg:w-[600px] border-gray-400 rounded-md text-xl"
          id="name"
          {...register("name")}
          placeholder="Nombre"
        />
        {errors.name && (
          <p className="px-5 text-red-600 font-bold animate-scale-infinite">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="px-5 flex flex-col items-start justify-center">
        <label htmlFor="idLastName" className="text-lg">
          Primer apellido{" "}
          <span className="text-color-obligatorio-form text-2xl">*</span>
        </label>
        <input
          className="w-64 px-5 border-2 h-14 lg:w-[600px] border-gray-400 rounded-md text-xl"
          id="idLastName"
          {...register("lastName")}
          placeholder="Primer apellido"
        />
        {errors.lastName && (
          <p className="px-5 text-red-600 font-bold animate-scale-infinite">
            {errors.lastName.message}
          </p>
        )}
      </div>
      <div className="px-5 flex flex-col items-start justify-center">
        <label className="text-lg" htmlFor="idSecondLastName">
          Segundo Apellido:
        </label>
        <input
          className="w-64 px-5 border-2 h-14 lg:w-[600px] border-gray-400 rounded-md text-xl"
          id="idSecondLastName"
          {...register("secondLastName")}
          placeholder="Segundo apellido"
        />
        {errors.secondLastName && <p>{errors.secondLastName.message}</p>}
      </div>
    </div>
  );
};

export default NamesAndLastName;
