import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../../schemas/formularioSchema";

type TermsAndServiceProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const TermsAndService = ({ register, errors }: TermsAndServiceProps) => {
  return (
    <>
      <div className="mt-8 w-full flex items-center justify-start flex-wrap gap-6">
        <input
          className="w-8 h-8 cursor-pointer"
          id="idTermAndConditions"
          type="checkbox"
          {...register("aceptaTerminos")}
        />
        <label className="text-lg cursor-pointer" htmlFor="idTermAndConditions">
          Acepto los términos del servicio{" "}
          <span className="text-color-obligatorio-form font-bold">*</span>
        </label>
        {errors.aceptaTerminos && (
          <p className="px-5 w-full text-red-600 font-bold">
            {errors.aceptaTerminos.message}
          </p>
        )}
      </div>
    </>
  );
};

export default TermsAndService;
