import axios, { AxiosError } from "axios";
import { useState } from "react";

interface PqrsErrorResponse {
    create: boolean;
    numberPqrs: string;
}

export const useRequest = () => {
    const [loading, setLoading] = useState(false);

    const calculateFormDataSize = (data: FormData): number => {
        let totalSize = 0;

        // Iterar sobre las entradas de FormData y calcular el tamaño
        data.forEach((value) => {
            // Si el valor es un objeto (como un archivo), usar size
            if (value instanceof File) {
                totalSize += value.size;
            } else {
                totalSize += new Blob([value]).size; // Convertir a Blob para obtener el tamaño
            }
        });

        return totalSize;
    };

    const sendRequest = async (data: FormData): Promise<PqrsErrorResponse> => {
        setLoading(true);

        try {
            // Mostrar el contenido de FormData en consola
            // data.forEach((value, key) => {
            //     console.log(`${key}: ${value}`);
            // });
            // Calcular el tamaño de la solicitud
            const formDataSize = calculateFormDataSize(data);
            console.log(`Tamaño de la solicitud: ${formDataSize} bytes`);

            // Verificar y cambiar typePerson a '2' si es '3', para realizar pruebas
            if (data.get("typePerson") === "3" && (!data.get("responseMediumAnonymous") || !data.get("emailAnonymous"))) {
                data.set("responseMediumAnonymous", "1");
                data.set("emailAnonymous", " ");
            }            

            // Enviar solicitud con Axios sin especificar el encabezado Content-Type
            // const response = await axios.post("https://localhost:44316/api/v1/dnda/pqrs-management", data);
            const response = await axios.post("https://apps.derechodeautor.gov.co/pqrs/api/v1/dnda/pqrs-management", data);

            setLoading(false);

            return {
                create: true,
                numberPqrs: response.data.numberPqrs || "Solicitud exitosa",
            };

        } catch (error: unknown) {
            console.error("Error:", error);

            const axiosError = error as AxiosError<PqrsErrorResponse>;

            const errorMessage = axiosError.response && axiosError.response.data && axiosError.response.data.numberPqrs
                ? `Error en la solicitud: ${axiosError.response.data.numberPqrs}`
                : "Error en la solicitud, por favor vuelva a enviar el formulario.";

            setLoading(false);
            return {
                create: false,
                numberPqrs: errorMessage,
            };
        }
    };

    return { sendRequest, loading };
};
