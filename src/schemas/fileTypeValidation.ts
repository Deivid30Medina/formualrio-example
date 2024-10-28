// fileTypeValidation.ts
import { z } from "zod";
import { allowedFileTypesOptions } from "../utils/indexOptions";

export const fileTypeValidation = z.string().refine((fileName) => {
    const extension = fileName.split(".").pop()?.toLowerCase(); 
    return allowedFileTypesOptions.includes(extension as typeof allowedFileTypesOptions[number]);
}, {
    message: `Tipo de archivo no permitido. Tipos permitidos: ${allowedFileTypesOptions.join(", ")}.`,
});

// Crea una función para validar el tamaño del archivo
export const fileSizeValidation = z.number().refine((size) => size <= 100 * 1024 * 1024, { // 100 MB en bytes
    message: "El tamaño del archivo debe ser menor o igual a 100 MB.",
});
