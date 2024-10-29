import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formularioSchema, FormularioData } from "../schemas/formularioSchema";
import NaturalPerson from "./NaturalPerson";
import LegalPerson from "./LegalPerson";
import TypeOfRequest from "./TypeOfRequest ";
import { typePersonOptions } from "../utils/typePersonOptions";
import ReasonRequest from "./ReasonRequest";
import TypeDocument from "./TypeDocument";
import ResponseMedium from "./ResponseMedium";
import FileUploadComponent from "./FileUploadComponent";
import InformationProcessingLaw from "./InformationProcessingLaw";
import ResponseMediumAnonymous from "./ResponseMediumAnonymous";
import Population from "./Population";
import Disability from "./Disability";
const Formulario = () => {
  const [typePerson, setTipoPersona] = useState<string>("1");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormularioData>({
    resolver: zodResolver(formularioSchema),
  });

  const onSubmit = (data: FormularioData) => {
    console.log("Llego");
    console.log("Datos del formulario:", data);
  };

  const handleTipoPersonaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    const commonFields = {
      typePerson: selectedValue,
      typeRequest: watch("typeRequest"),
      reasonRequest: watch("reasonRequest"),
    };
    setTipoPersona(selectedValue);
    reset({ ...commonFields });
  };

  return (
    <>
      <div className="w-full flex items-center justify-center mb-9 px-8 lg:px-20 xl:px-96">
        <form className="w-full flex flex-col items-center justify-center  mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <TypeOfRequest register={register} errors={errors} />

          <ReasonRequest register={register} errors={errors} />

          <div className="mt-8 w-full border-2 border-gray-500 flex flex-col items-start justify-center gap-4 pb-3">
            <label className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4">Tipo de Persona:</label>
            <select
              className="w-48 h-10 ml-5 border-2 border-gray-600 rounded-md"
              {...register("typePerson")}
              onChange={handleTipoPersonaChange}
              value={typePerson}
            >
              {typePersonOptions.map((option) => (
                <option className="text-xl" key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {typePerson === "1" && ( // Cambiar condiciones a valores de typePersonOptions
            <>
              <TypeDocument register={register} errors={errors} />

              <div className={`mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-3 ${errors.numberDocument ? "border-red-500 bg-red-100" : "border-gray-500"}`}>
              <label className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4" htmlFor="numberDocument">Número de documento *</label>
                <input
                  className="px-5 w-64 lg:w-[600px] h-10 ml-5 border-2 border-gray-600 rounded-md text-xl"
                  id="numberDocument"
                  {...register("numberDocument")}
                  placeholder="Número Documento"
                />
                {errors.numberDocument && (
                  <p className="px-5 text-red-600 font-bold animate-scale-infinite">{errors.numberDocument.message}</p>
                )}
              </div>
              <NaturalPerson register={register} errors={errors} />
            </>
          )}

          {typePerson === "2" && (
            <LegalPerson register={register} errors={errors} />
          )}

          {(typePerson == "1" || typePerson == "2") && (
            <>
              <ResponseMedium register={register} errors={errors} />
            </>
          )}

          {typePerson == "3" && (
            <>
              <ResponseMediumAnonymous register={register} errors={errors} />
            </>
          )}

          {typePerson == "1" && (
            <>
              <div className="mt-8 w-full border-2 border-gray-500 flex flex-col items-start justify-center gap-4 pb-3">
                <label className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4" htmlFor="idPhone">Teléfono</label>
                <input
                  className="w-64 lg:w-[600px] px-5 h-10 ml-5 border-2 border-gray-600 rounded-md text-xl"
                  id="idPhone"
                  {...register("phoneNumber")}
                  placeholder="Teléfono"
                />
                {errors.phoneNumber && <p className="px-5 text-red-600 font-bold animate-scale-infinite">{errors.phoneNumber.message}</p>}
              </div>
            </>
          )}
          <div className={`mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-8 px-5 relative ${errors.descriptionPqrs ? "border-red-500 bg-red-100" : "border-gray-500"}`}>
            <label className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4 absolute top-0 left-0" htmlFor="idDescriptionPqrs">
              Espacio para describir su PQRSD *
            </label>

            <textarea
              className="w-full h-40 mt-32 lg:mt-20 px-5 border-2 border-gray-600 rounded-md text-xl"
              id="idDescriptionPqrs"
              {...register("descriptionPqrs")}
            ></textarea>
            {errors.descriptionPqrs && <p className="px-5 text-red-600 font-bold animate-scale-infinite">{errors.descriptionPqrs.message}</p>}
          </div>

          {typePerson == "1" && (
            <>
              <div className={`relative mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-3 pt-20 px-5 ${(errors.typePopulation || errors.typeDisability)  ? "border-red-500 bg-red-100" : "border-gray-500"}`}>
                <h3 className="absolute left-0 top-0 w-full bg-gray-500 text-white text-lg font-bold px-5 py-4">Caracterización ciudadana *</h3>
                <Population register={register} errors={errors} />
                <Disability register={register} errors={errors} />
              </div>
            </>
          )}

          <FileUploadComponent />

          {(typePerson == "1" || typePerson == "2") && (
            <>
              <InformationProcessingLaw />

              <div className="mt-8 w-full flex items-center justify-start flex-wrap gap-6">
                <input
                  className="w-8 h-8 cursor-pointer"
                  id="idTermAndConditions"
                  type="checkbox"
                  {...register("aceptaTerminos")}
                />
                <label className="text-lg cursor-pointer" htmlFor="idTermAndConditions">
                  Acepto los términos del servicio <span className="text-color-obligatorio-form font-bold">*</span>
                </label>
                {errors.aceptaTerminos && (
                  <p className="px-5 w-full text-red-600 font-bold">{errors.aceptaTerminos.message}</p>
                )}
              </div>
            </>
          )}

          <button className="text-white bg-color-dnda-oscuro w-36 h-10 rounded-md mt-8 hover:bg-color-dnda" type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
