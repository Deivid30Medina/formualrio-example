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
import Disability from "./disability";
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
      <div className="w-full flex items-center justify-center">
        <form className="w-full px-80 bg-black" onSubmit={handleSubmit(onSubmit)}>
          <TypeOfRequest register={register} errors={errors} />

          <ReasonRequest register={register} errors={errors} />

          <div>
            <label>Tipo de Persona:</label>
            <select
              {...register("typePerson")}
              onChange={handleTipoPersonaChange}
              value={typePerson}
            >
              {typePersonOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {typePerson === "1" && ( // Cambiar condiciones a valores de typePersonOptions
            <>
              <TypeDocument register={register} errors={errors} />

              <div>
                <label htmlFor="numberDocument">Número de documento</label>
                <input
                  id="numberDocument"
                  {...register("numberDocument")}
                  placeholder="Número Documento"
                />
                {errors.numberDocument && (
                  <p>{errors.numberDocument.message}</p>
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
          {typePerson == "1" && (
            <>
              <div>
                <label htmlFor="idPhone">Teléfono</label>
                <input
                  id="idPhone"
                  {...register("phoneNumber")}
                  placeholder="Teléfono"
                />
                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
              </div>
            </>
          )}
          <div>
            <label htmlFor="idDescriptionPqrs">
              Espacio para describir su PQRSD *
            </label>

            <textarea
              id="idDescriptionPqrs"
              {...register("descriptionPqrs")}
            ></textarea>
            {errors.descriptionPqrs && <p>{errors.descriptionPqrs.message}</p>}
          </div>

          {typePerson == "1" && (
            <>
              <div>
                <h3>Caracterización ciudadana *</h3>
                <Population register={register} errors={errors} />
                <Disability register={register} errors={errors} />
              </div>
            </>
          )}

          <FileUploadComponent />

          {(typePerson == "1" || typePerson == "2") && (
            <>
              <InformationProcessingLaw />

              <div>
                <input
                  id="idTermAndConditions"
                  type="checkbox"
                  {...register("aceptaTerminos")}
                />
                <label htmlFor="idTermAndConditions">
                  Acepto los términos del servicio *
                </label>
                {errors.aceptaTerminos && (
                  <p>{errors.aceptaTerminos.message}</p>
                )}
              </div>
            </>
          )}

          {typePerson == "3" && (
            <>
              <ResponseMediumAnonymous register={register} errors={errors} />
            </>
          )}

          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
