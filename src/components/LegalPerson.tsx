import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../schemas/formularioSchema";

type LegalPersonProps = {
    register: UseFormRegister<FormularioData>;
    errors: FieldErrors<FormularioData>;
};

const LegalPerson = ({ register, errors }: LegalPersonProps) => {
    return (
        <>
            <div>
                <label>NIT:</label>
                <input {...register("nit")} placeholder="NIT" />
                {errors.nit && <p>{errors.nit.message}</p>}
            </div>
            <div>
                <label>Razón Social:</label>
                <input {...register("razonSocial")} placeholder="Razón Social" />
                {errors.razonSocial && <p>{errors.razonSocial.message}</p>}
            </div>
        </>
    );
};

export default LegalPerson
