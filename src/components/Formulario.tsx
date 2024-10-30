import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formularioSchema, FormularioData } from "../schemas/formularioSchema";
import NaturalPerson from "./NaturalPerson";
import LegalPerson from "./LegalPerson";
import TypeOfRequest from "./TypeOfRequest ";
import { typePersonOptions } from "../utils/typePersonOptions";
import ReasonRequest from "./ReasonRequest";
import FileUploadComponent from "./FileUploadComponent";
import InformationProcessingLaw from "./InformationProcessingLaw";
import ResponseMediumAnonymous from "./ResponseMediumAnonymous";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../hooks/useRequest";
import Captcha from "./Captcha";
import PhoneNumber from "./PhoneNumber";
import DescriptionPqrs from "./DescriptionPqrs";
import CitizenCharacterization from "./CitizenCharacterization";
import TermsAndService from "./TermsAndService";
const Formulario = () => {
  const [typePerson, setTipoPersona] = useState<string>("1");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { sendRequest, loading } = useRequest();
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormularioData>({
    resolver: zodResolver(formularioSchema),
  });

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  // Función para construir el FormData
  const createFormData = (data: FormularioData): FormData => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    if (selectedFile) formData.append("pqrsFile", selectedFile);
    return formData;
  };

  // Función para mostrar el mensaje de carga
  const showLoadingMessage = () => {
    Swal.fire({
      title: "Enviando...",
      text: "Por favor, espera mientras enviamos tu solicitud.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });
  };

  // Función para mostrar el mensaje de resultado
  const showResultMessage = (response: {
    create: boolean;
    numberPqrs: string;
  }) => {
    Swal.close();
    if (response.create) {
      Swal.fire(
        "¡Radicado creado con éxito!",
        "Su número de radicado es: " + response.numberPqrs,
        "success"
      ).then(() => {
        // navigate("/create", { state: { message: response.numberPqrs } });
      });
    } else {
      Swal.fire("Error", response.numberPqrs, "error");
    }
  };

  const onSubmit: SubmitHandler<FormularioData> = async (data) => {
    if (!captchaToken) {
      console.error("Captcha not completed");
      return; 
    }

    const formData = createFormData(data);
    showLoadingMessage();
    const response = await sendRequest(formData);
    showResultMessage(response);
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
      <h1 className="text-center w-full mt-12 mb-5 text-4xl">
        Formulario PQRSD DNDA
      </h1>
      <h4 className="text-center w-full mb-11 text-xl">
        Recuerde que los campos con * son obligatorios
      </h4>
      <div className="w-full flex items-center justify-center mb-9 px-8 lg:px-20 xl:px-96">
        <form
          className="w-full flex flex-col items-center justify-center  mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <FileUploadComponent register={register} errors={errors}/> */}

          <TypeOfRequest register={register} errors={errors} />

          <ReasonRequest register={register} errors={errors} />

          <div className="mt-8 w-full border-2 border-gray-500 flex flex-col items-start justify-center gap-4 pb-3">
            <label className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4">
              Tipo de Persona:
            </label>
            <select
              className="w-48 h-10 ml-5 border-2 border-gray-600 rounded-md"
              {...register("typePerson")}
              onChange={handleTipoPersonaChange}
              value={typePerson}
            >
              {typePersonOptions.map((option) => (
                <option
                  className="text-xl"
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {typePerson === "1" && ( // Cambiar condiciones a valores de typePersonOptions
            <>
              <NaturalPerson register={register} errors={errors} />
            </>
          )}

          {typePerson === "2" && (
            <LegalPerson register={register} errors={errors} />
          )}

          {typePerson == "3" && (
            <>
              <ResponseMediumAnonymous register={register} errors={errors} />
            </>
          )}

          {typePerson == "1" && (
            <>
              <PhoneNumber register={register} errors={errors}/>
            </>
          )}

          <DescriptionPqrs register={register} errors={errors}/>

          {typePerson == "1" && (
            <>
              <CitizenCharacterization register={register} errors={errors}/>
            </>
          )}

          <FileUploadComponent
            errors={errors}
            setError={setError}
            onFileChange={handleFileChange}
          />

          {(typePerson == "1" || typePerson == "2") && (
            <>
              <InformationProcessingLaw />
              
              <TermsAndService register={register} errors={errors}/>
            </>
          )}

          <div className="mt-8 w-full flex items-center justify-center">
            <Captcha onCaptchaChange={setCaptchaToken} />
          </div>

          <button
            className="text-white bg-color-dnda-oscuro w-36 h-10 rounded-md mt-8 hover:bg-color-dnda"
            type="submit"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
          {/* Mostrar todos los errores */}
          {Object.keys(errors).length > 0 && (
            <p className="px-5 w-full text-red-600 font-bold">
              {Object.values(errors).map((error) => error.message).join(", ")}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Formulario;
