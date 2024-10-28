import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formularioSchema, FormularioData } from "../schemas/formularioSchema";
import NaturalPerson from "./NaturalPerson";
import LegalPerson from "./LegalPerson";

const Formulario = () => {
    const [tipoPersona, setTipoPersona] = useState<"natural" | "juridica">("natural");

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormularioData>({
        resolver: zodResolver(formularioSchema),
    });

    const onSubmit = (data: FormularioData) => {
        console.log("Datos del formulario:", data);
    };

    const handleTipoPersonaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newTipo = event.target.value as "natural" | "juridica";
        setTipoPersona(newTipo);
        reset({ tipoPersona: newTipo }); 
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Tipo de Persona:</label>
                <select {...register("tipoPersona")} onChange={handleTipoPersonaChange}>
                    <option value="natural">Persona Natural</option>
                    <option value="juridica">Persona Jurídica</option>
                </select>
            </div>

            {tipoPersona === "natural" && (
                <NaturalPerson register={register} errors={errors} />
            )}

            {tipoPersona === "juridica" && (
                <LegalPerson register={register} errors={errors} />
            )}

            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
