import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../../schemas/formularioSchema";
import Disability from "./Disability";
import Population from "./Population";

type CitizenCharacterizationProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const CitizenCharacterization = ({
  register,
  errors,
}: CitizenCharacterizationProps) => {
  return (
    <>
      <div
        className={`relative mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-3 pt-20 px-5 ${
          errors.typePopulation || errors.typeDisability
            ? "border-red-500 bg-red-100"
            : "border-gray-500"
        }`}
      >
        <h3 className="absolute left-0 top-0 w-full bg-gray-500 text-white text-lg font-bold px-5 py-4">
          Caracterización ciudadana *
        </h3>
        <Population register={register} errors={errors} />
        <Disability register={register} errors={errors} />
      </div>
    </>
  );
};

export default CitizenCharacterization;
