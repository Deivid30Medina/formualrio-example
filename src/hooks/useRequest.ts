// Importa Axios
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
            // Crea un nuevo FormData y añade los pares clave-valor
            const formData = new FormData();
            data.forEach((value, key) => {
                formData.append(key, value);
            });

            // Enviar solicitud con Axios
            const response = await axios.post("https://localhost:44316/api/v1/dnda/pqrs-management", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",  // Axios lo establece automáticamente
                },
            });

            setLoading(false);

            return {
                create: true,
                numberPqrs: response.data.numberPqrs || "Solicitud exitosa",
            };

        } catch (error: unknown) {
            console.error("Error:", error);

            const axiosError = error as AxiosError<PqrsErrorResponse>; // Asegúrate de usar la interfaz aquí

            const errorMessage = axiosError.response && axiosError.response.data && axiosError.response.data.numberPqrs
                ? `Error en la solicitud: ${axiosError.response.data.numberPqrs}`
                : "Error en la solicitud, por favor vuelva a enviar el formulario.";

            setLoading(false);
            return {
                create: false,
                numberPqrs: errorMessage,
            };
        }



    }

    return { sendRequest, loading };
};
