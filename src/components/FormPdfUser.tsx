// FormPdfUser.tsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
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

Font.register({
  family: "WorkSans",
  fonts: [
    { src: "fonts/workSans/WorkSans-Regular.ttf", fontWeight: "normal" },
    { src: "fonts/workSans/WorkSans-Bold.ttf", fontWeight: "bold" },
    { src: "fonts/workSans/WorkSans-SemiBold.ttf", fontWeight: "semibold" },
  ],
});

const styles = StyleSheet.create({
  text: {
    fontFamily: "WorkSans",
    fontWeight: "semibold",
    marginTop: 10
  },
  globalStyles: {
    fontSize: 14
  }
});

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

  // Componente para el encabezado
  const Header = () => (
    <View
      style={{
        marginBottom: 20,
        borderBottom: "1px solid #000",
        paddingBottom: 10,
        textAlign: "center",
      }}
    >
      <Image
        src="assets/icons/LogoDNDA-Color.png"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "auto",
          height: 80,
        }}
      />
    </View>
  );

  // Componente para el pie de página
  const Footer = () => (
    <View
      style={{ marginTop: 20, borderTop: "1px solid #000", paddingTop: 10 }}
    >
      <Text style={{ fontSize: 12, textAlign: "center" }}>
        UAE. Dirección Nacional de Derecho de Autor
      </Text>
      <Text style={{ fontSize: 12, textAlign: "center" }}>
        Dirección: Calle 28 N°13A- 15 Piso 17. Bogotá, Colombia
      </Text>
      <Text style={{ fontSize: 12, textAlign: "center" }}>
        Teléfono: + 57 (601) 786-82-20
      </Text>
      <Text style={{ fontSize: 12, textAlign: "center" }}>
        Línea PQRSF: 01 8000 127878
      </Text>
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={{ padding: 30 }}>
        <Header />
        <View>
          <Text style={{ fontSize: 18, marginBottom: 18, textAlign: "center" }}>
            Formulario PQRSD DNDA
          </Text>
          
          <Text style={[styles.text, styles.globalStyles]}>Tipo de Solicitud:</Text>
          <Text style={styles.globalStyles}>
            {getRequestLabel(formData.typeRequest)}
          </Text>

          <Text style={[styles.text, styles.globalStyles]}>Motivo de la solicitud:</Text>
          <Text style={styles.globalStyles}>
            {getReasonRequestLabel(formData.reasonRequest)}
          </Text>

          <Text style={[styles.text, styles.globalStyles]}>Tipo de persona:</Text>
          <Text style={styles.globalStyles}>
            {getTypePersonOptions(formData.typePerson)}
          </Text>
          {formData.typePerson === "1" && (
            <>
              <Text style={[styles.text, styles.globalStyles]}>Número de cedula:</Text>
              <Text style={styles.globalStyles}> {formData.numberDocument}</Text>

              <Text style={[styles.text, styles.globalStyles]}>Nombres: </Text>
              <Text style={styles.globalStyles}>{formData.name}</Text>

              <Text style={[styles.text, styles.globalStyles]}>Primer apellido:</Text>
              <Text style={styles.globalStyles}>{formData.lastName}</Text>

              <Text style={[styles.text, styles.globalStyles]}>Segundo apellido:</Text>
              <Text style={styles.globalStyles}>
                {formData.secondLastName
                  ? formData.secondLastName
                  : "No se ingreso segundo apellido por parte del usuario."}
              </Text>

              <Text style={[styles.text, styles.globalStyles]}>Teléfono:</Text>
              <Text style={styles.globalStyles}>
                {formData.phoneNumber
                  ? formData.phoneNumber
                  : "No se ingreso teléfono por parte del usuario."}
              </Text>

              <Text style={[styles.text, styles.globalStyles]}>Tipo de población:</Text>
              <Text style={styles.globalStyles}>
                {getPopulation(formData.typePopulation)}
              </Text>

              <Text style={[styles.text, styles.globalStyles]}>Tipo de discapacidad:</Text>
              <Text style={styles.globalStyles}>
                {getDisability(formData.typeDisability)}
              </Text>
            </>
          )}

          {formData.typePerson === "2" && (
            <>
              <Text style={[styles.text, styles.globalStyles]}>Nit:</Text>
              <Text style={styles.globalStyles}>{formData.nit}</Text>
              <Text style={[styles.text, styles.globalStyles]}>Razón Social:</Text>
              <Text style={styles.globalStyles}>{formData.razonSocial}</Text>
            </>
          )}

          {formData.typePerson === "3" && (
            <>
              <Text style={[styles.text, styles.globalStyles]}>Medio de respuesta:</Text>
              <Text style={styles.globalStyles}>
                {getResponseMedium(formData.responseMediumAnonymous)}
              </Text>
              <Text style={[styles.text, styles.globalStyles]}>Correo electrónico:</Text>
              <Text style={styles.globalStyles}>
                {formData.emailAnonymous
                  ? formData.emailAnonymous
                  : "No se ingresó correo por parte del usuario."}
              </Text>
            </>
          )}

          {(formData.typePerson === "1" || formData.typePerson === "2") && (
            <>
              <Text style={[styles.text, styles.globalStyles]}>Medio de respuesta:</Text>
              <Text style={styles.globalStyles}>
                {getResponseMedium(formData.responseMedium)}
              </Text>
              <Text style={[styles.text, styles.globalStyles]}>Correo electronico:</Text>
              <Text style={styles.globalStyles}>{formData.email}</Text>
            </>
          )}

          <Text style={[styles.text, styles.globalStyles]}>Descripción de la pqrs:</Text>
          <Text style={styles.globalStyles}>{formData.descriptionPqrs}</Text>

          <Text style={[styles.text, styles.globalStyles]}>Archivo adjunto:</Text>
          <Text style={styles.globalStyles}>{getDataFile(selectFile)}</Text>

          {(formData.typePerson == "1" || formData.typePerson == "2") && (
            <>
              <Text style={[styles.text, styles.globalStyles]}>
                Acepta los términos del servicio:
              </Text>
              <Text style={styles.globalStyles}>{getTerminos(formData)}</Text>
            </>
          )}
          {/* Agrega más campos según lo que necesites */}
        </View>
        <Footer />
      </Page>
    </Document>
  );
};

export default FormPdfUser;
