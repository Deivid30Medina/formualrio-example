import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../../schemas/formularioSchema";


type PhoneNumberProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const PhoneNumber = ({ register, errors }: PhoneNumberProps) => {
  return (
    <>
      <div className="mt-8 w-full border-2 border-gray-500 flex flex-col items-start justify-center gap-4 pb-3">
        <label
          className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4"
          htmlFor="idPhone"
        >
          Teléfono
        </label>
        <input
          className="w-64 lg:w-[600px] px-5 h-10 ml-5 border-2 border-gray-600 rounded-md text-xl"
          id="idPhone"
          {...register("phoneNumber")}
          placeholder="Teléfono"
        />
        {errors.phoneNumber && (
          <p className="px-5 text-red-600 font-bold animate-scale-infinite">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>
    </>
  );
};

export default PhoneNumber;
