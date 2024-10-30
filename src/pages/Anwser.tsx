import { useLocation, useNavigate } from "react-router-dom";

const Anwser = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const { message } = location.state || {};

    const handleGoBack = () => {
        // Navegar a la ruta y pasar un mensaje
        navigate("/pqrs-dnda");
    };

    return (
        <div>
            <h1>Respuesta</h1>
            {message ? <p>{message}</p> : <p>No se recibió mensaje.</p>}
            <button onClick={handleGoBack}>
                Volver al formulario
            </button>
        </div>
    );
};

export default Anwser;
