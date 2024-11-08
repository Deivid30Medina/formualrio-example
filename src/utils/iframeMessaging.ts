// useIframeMessaging.ts
import { useEffect } from 'react';

const useIframeMessaging = () => {
    useEffect(() => {
        const sendHeight = () => {
            const altura = document.body.scrollHeight + 50;
            window.parent.postMessage({ altura }, "https://www.derechodeautor.gov.co");
        };

        // Enviar altura inicial al cargar
        sendHeight();

        // Escuchar cambios de tamaño de la ventana
        window.addEventListener("resize", sendHeight);

        // Escuchar mensajes de solicitud de altura desde Drupal
        window.addEventListener("message", (event) => {
            if (event.origin === "https://www.derechodeautor.gov.co" && event.data === "requestHeight") {
                sendHeight(); // Enviar altura cuando Drupal lo solicite
            }
        });

        // Limpiar los event listeners al desmontar
        return () => {
            window.removeEventListener("resize", sendHeight);
            window.removeEventListener("message", sendHeight);
        };
    }, []);
};

export default useIframeMessaging;
