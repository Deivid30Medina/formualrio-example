import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../schemas/formularioSchema";
import ResponseMedium from "./ResponseMedium";
import NitAndBusinnesName from "./NitAndBusinnesName";

type LegalPersonProps = {
    register: UseFormRegister<FormularioData>;
    errors: FieldErrors<FormularioData>;
};

const LegalPerson = ({ register, errors }: LegalPersonProps) => {
    return (
        <>
            <NitAndBusinnesName register={register} errors={errors} />

            <ResponseMedium register={register} errors={errors} />

        </>
    );
};

export default LegalPerson
