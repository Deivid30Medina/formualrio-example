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
        <label htmlFor="name">Nombres *</label>
        <input id="name" {...register("name")} placeholder="Nombre" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="idLastName">Primer apellido *</label>
        <input id="idLastName" {...register("lastName")} placeholder="Primer apellido" />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label htmlFor="idSecondLastName">Segundo Apellido:</label>
        <input id="idSecondLastName" {...register("secondLastName")} placeholder="Segundo apellido" />
        {errors.secondLastName && <p>{errors.secondLastName.message}</p>}
      </div>
    </>
  );
};

export default NaturalPerson;
