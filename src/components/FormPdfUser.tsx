// FormPdfUser.tsx
import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { requestOptions } from "../utils/requestOptions";
import { reasonForRequestOptions } from "../utils/reasonForRequestOptions";
import { typePersonOptions } from "../utils/typePersonOptions";
import { responseMediumOptions } from "../utils/responseMediumOptions";
import { PqrsFormData } from "../interfaces/PqrsFormData";
import { populationOptions } from "../utils/populationOptions";
import { disabilityOptions } from "../utils/disabilityOptions";

interface FormPdfUserProps {
  formData: PqrsFormData;
  selectFile: File | null;
}

const FormPdfUser: React.FC<FormPdfUserProps> = ({ formData, selectFile }) => {
  const getRequestLabel = (value: string) => {
    const option = requestOptions.find((option) => option.value === value);
    return option ? option.label : "Desconocido";
  };

  const getReasonRequestLabel = (value: string) => {
    const option = reasonForRequestOptions.find(
      (option) => option.value === value
    );
    return option ? option.label : "Desconocido";
  };

  const getTypePersonOptions = (value: string | undefined) => {
    const option = typePersonOptions.find((option) => option.value == value);
    return option ? option.label : "Desconocido";
  };

  const getResponseMedium = (value?: string | null | undefined) => {
    const option = responseMediumOptions.find(
      (option) => option.value === value
    );
    return option ? option.label : "Desconocido";
  };

  const getPopulation = (value?: string) => {
    const option = populationOptions.find((option) => option.value === value);
    return option ? option.label : "Desconocido";
  };

  const getDisability = (value?: string) => {
    const option = disabilityOptions.find((option) => option.value === value);
    return option ? option.label : "Desconocido";
  };

  const getDataFile = (selectFile: File | null) => {
    return selectFile && selectFile.size > 0
      ? selectFile.name
      : "No se adjunto archivo por parte del usuario.";
  };

  function getTerminos(formData: PqrsFormData): React.ReactNode {
    console.log("Terminos y condiciones:" + formData.aceptaTerminos);
    return formData.aceptaTerminos ? "True" : "False";
  }

  return (
    <Document>
      <Page size="A4" style={{ padding: 30 }}>
        <View>
          <Text style={{ fontSize: 24, marginBottom: 20 }}>
            Formulario PQRSD DNDA
          </Text>
          <Text style={{ fontSize: 18 }}>
            Tipo de Solicitud: {getRequestLabel(formData.typeRequest)}
          </Text>
          <Text style={{ fontSize: 18 }}>
            Motivo de la solicitud:{" "}
            {getReasonRequestLabel(formData.reasonRequest)}
          </Text>
          <Text style={{ fontSize: 18 }}>
            Tipo de persona: {getTypePersonOptions(formData.typePerson)}
          </Text>
          {formData.typePerson === "1" && (
            <>
              <Text>Número de cedula: {formData.numberDocument}</Text>
              <Text>Nombres: {formData.name}</Text>
              <Text>Primer apellido: {formData.lastName}</Text>
              <Text>
                Segundo apellido:{" "}
                {formData.secondLastName
                  ? formData.secondLastName
                  : "No se ingreso segundo apellido por parte del usuario."}
              </Text>
              <Text>
                Telefono:{" "}
                {formData.phoneNumber
                  ? formData.phoneNumber
                  : "No se ingreso teléfono por parte del usuario."}
              </Text>
              <Text style={{ fontSize: 18 }}>
                Tipo de población: {getPopulation(formData.typePopulation)}
              </Text>
              <Text style={{ fontSize: 18 }}>
                Tipo de discapacidad: {getDisability(formData.typeDisability)}
              </Text>
            </>
          )}

          {formData.typePerson === "2" && (
            <>
              <Text>Nit: {formData.nit}</Text>
              <Text>Razón Social: {formData.razonSocial}</Text>
            </>
          )}

          {formData.typePerson === "3" && (
            <>
              <Text style={{ fontSize: 18 }}>
                Medio de respuesta:{" "}
                {getResponseMedium(formData.responseMediumAnonymous)}
              </Text>
              <Text>
                Correo electrónico:{" "}
                {formData.emailAnonymous
                  ? formData.email
                  : "No se ingresó correo por parte del usuario."}
              </Text>{" "}
              <Text>Correo electronico: {formData.emailAnonymous}</Text>
            </>
          )}

          {(formData.typePerson === "1" || formData.typePerson === "2") && (
            <>
              <Text style={{ fontSize: 18 }}>
                Medio de respuesta: {getResponseMedium(formData.responseMedium)}
              </Text>
              <Text>Correo electronico: {formData.email}</Text>
            </>
          )}

          <Text>Descripción de la pqrs: {formData.descriptionPqrs}</Text>

          <Text style={{ fontSize: 18 }}>
            Archivo adjunto: {getDataFile(selectFile)}
          </Text>

          {(formData.typePerson == "1" || formData.typePerson == "2") && (
            <>
              <Text style={{ fontSize: 18 }}>
                Acepta los términos del servicio: {getTerminos(formData)}
              </Text>
            </>
          )}
          {/* Agrega más campos según lo que necesites */}
        </View>
      </Page>
    </Document>
  );
};

export default FormPdfUser;
