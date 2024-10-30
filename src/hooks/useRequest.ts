// useRequest.tsx
import { useState } from "react";

interface RequestResponse {
    success: boolean;
    message: string;
}

export const useRequest = () => {
    const [loading, setLoading] = useState(false);

    const sendRequest = async (data: FormData): Promise<RequestResponse> => {
        setLoading(true);
        try {
            data.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            await new Promise((resolve) => setTimeout(resolve, 5000));

            const simulateError = true;

            if (simulateError) {
                throw new Error("Simulación de error en la solicitud");
            }

            // Simulación de respuesta exitosa
            const result = { message: "creado" };

            setLoading(false);

            return {
                success: true,
                message: result.message || "Solicitud exitosa",
            };

            // Comentado: puedes descomentar esto más tarde para realizar la solicitud real
            /*
            const response = await fetch("/your-endpoint", {
                method: "POST",
                body: data,
            });
    
            if (!response.ok) throw new Error("Error en la solicitud");
    
            const result = await response.json();
            setLoading(false);
    
            return {
                success: true,
                message: result.message || "Solicitud exitosa",
            };
            */
        } catch (error) {
            console.error(error);
            setLoading(false);
            return {
                success: false,
                message: "Error en la solicitud, por favor vuelva a enviar el formulario.",
            };
        }
    };


    return { sendRequest, loading };
};
