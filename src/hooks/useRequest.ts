import axios, { AxiosError } from "axios";
import { useState } from "react";

interface PqrsErrorResponse {
    create: boolean;
    numberPqrs: string;
}

export const useRequest = () => {
    const [loading, setLoading] = useState(false);

    const sendRequest = async (data: FormData): Promise<PqrsErrorResponse> => {
        setLoading(true);

        try {
            // Mostrar el contenido de FormData en consola
            data.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            // Verificar y cambiar typePerson a '2' si es '3', para realizar pruebas
            if (data.get("typePerson") === "3" && (!data.get("responseMediumAnonymous") || !data.get("emailAnonymous"))) {
                data.set("responseMediumAnonymous", "1");
                data.set("emailAnonymous", " ");
            }            

            // Enviar solicitud con Axios sin especificar el encabezado Content-Type
            const response = await axios.post("https://localhost:44316/api/v1/dnda/pqrs-management", data);

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
