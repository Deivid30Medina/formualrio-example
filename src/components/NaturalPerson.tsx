import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../schemas/formularioSchema";

type NaturalPersonProps = {
    register: UseFormRegister<FormularioData>;
    errors: FieldErrors<FormularioData>;
};

const NaturalPerson = ({ register, errors }: NaturalPersonProps) => {
    return (
        <>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input id="name" {...register("name")} placeholder="Nombre" />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Apellido:</label>
                <input {...register("apellido")} placeholder="Apellido" />
                {errors.apellido && <p>{errors.apellido.message}</p>}
            </div>
        </>
    )
}

export default NaturalPerson
