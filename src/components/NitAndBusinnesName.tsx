import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormularioData } from "../schemas/formularioSchema";

type NitAndBusinnesNameProps = {
    register: UseFormRegister<FormularioData>;
    errors: FieldErrors<FormularioData>;
};

const NitAndBusinnesName = ({ register, errors }: NitAndBusinnesNameProps) => {
    return (
        <>
            <div className={`mt-8 w-full border-2 flex flex-col items-start justify-center gap-4 pb-3 ${(errors.nit || errors.razonSocial) ? "border-red-500 bg-red-100" : "border-gray-500"}`}>
                <h3 className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4">Nit y Razón sociual *</h3>
                <div className="px-5 flex flex-col items-start justify-center">
                    <label htmlFor="nit" className="text-lg">NIT *</label>
                    <input className="w-64 px-5 border-2 h-14 lg:w-[600px] border-gray-400 rounded-md text-xl" id="nit" {...register("nit")} placeholder="NIT" />
                    {errors.nit && <p className="px-5 text-red-600 font-bold animate-scale-infinite">{errors.nit.message}</p>}
                </div>
                <div className="px-5 flex flex-col items-start justify-center">
                    <label className="text-lg" htmlFor="razonSocial">Razón Social *</label>
                    <input className="w-64 px-5 border-2 h-14 lg:w-[600px] border-gray-400 rounded-md text-xl" id="razonSocial" {...register("razonSocial")} placeholder="Razón Social" />
                    {errors.razonSocial && <p className="px-5 text-red-600 font-bold animate-scale-infinite">{errors.razonSocial.message}</p>}
                </div>
            </div>
        </>
    );
};

export default NitAndBusinnesName
