import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../../schemas/formularioSchema";
import NitAndBusinnesName from "./NitAndBusinnesName";
import ResponseMedium from "../ShareForm/ResponseMedium";


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
