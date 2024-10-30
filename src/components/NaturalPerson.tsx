import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../schemas/formularioSchema";
import TypeDocument from "./TypeDocument";
import NumberDocument from "./NumberDocument";
import NamesAndLastName from "./NamesAndLastName";
import ResponseMedium from "./ResponseMedium";

type NaturalPersonProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
};

const NaturalPerson = ({ register, errors }: NaturalPersonProps) => {
  return (
    <>
      <TypeDocument register={register} errors={errors} />

      <NumberDocument register={register} errors={errors} />

      <NamesAndLastName register={register} errors={errors} />

      <ResponseMedium register={register} errors={errors} />
    </>
  );
};

export default NaturalPerson;
