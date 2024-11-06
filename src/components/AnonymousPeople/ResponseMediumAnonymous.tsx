// TypeOfRequest.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../../schemas/formularioSchema";
import { responseMediumOptions } from "../../utils/responseMediumOptions";

type ResponseMediumProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const ResponseMediumAnonymous = ({ register, errors }: ResponseMediumProps) => {
  return (
    <>
      <div
        className={`mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-3 ${
          errors.emailAnonymous
            ? "border-red-500 bg-red-100"
            : "border-gray-500"
        }`}
      >
        <h3 className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4">
          Medio de respuesta{" "}
        </h3>
        {responseMediumOptions.map((option) => (
          <div
            className="w-full flex items-center justify-start flex-nowrap gap-2 px-5"
            key={option.value}
          >
            <input
              className="w-6 h-6 cursor-pointer"
              type="radio"
              id={option.id}
              value={option.value}
              {...register("responseMediumAnonymous")}
            />
            <label
              className="font-bold cursor-pointer w-full"
              htmlFor={option.id}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-8 w-full border-2 border-gray-500 flex flex-col items-start justify-center gap-4 pb-3">
        <label
          className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4"
          htmlFor="idCorreo"
        >
          Correo electrónico
        </label>
        <input
          className="w-64 xl:w-96 lg:w-[600px] px-5 h-10 ml-5 border-2 border-gray-600 rounded-md text-xl"
          id="idCorreo"
          {...register("emailAnonymous")}
          placeholder="Correo"
        />
        {errors.emailAnonymous && (
          <p className="px-5 text-red-600 font-bold animate-scale-infinite">
            {errors.emailAnonymous.message}
          </p>
        )}
      </div>

      <div className="mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-3">
        <p className="w-full text-black text-lg px-5 py-4">
          Si no desea dejar su correo electrónico, la respuesta será publicada
          con el número de radicación en el siguiente link:
          <br />
          <a
            className="font-bold"
            href="https://www.derechodeautor.gov.co/es/respuestas-pqrs-anonimas-o-sin-direccion-de-destinatario"
            target="_blank"
          >
            Respuestas solicitudes anónimas
          </a>
        </p>
      </div>
    </>
  );
};

export default ResponseMediumAnonymous;
