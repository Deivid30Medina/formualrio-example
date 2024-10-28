import { z } from "zod";

// Define los campos para ambos tipos de personas
export const formularioSchema = z.object({
  tipoPersona: z.enum(["natural", "juridica"]),
  name: z.string().min(2, "Nombre requerido").optional(),
  apellido: z.string().min(2, "Apellido requerido").optional(),
  nit: z.string().min(5, "NIT requerido").optional(),
  razonSocial: z.string().min(2, "Razón social requerida").optional(),
});

// Define el tipo TypeScript basado en el esquema
export type FormularioData = z.infer<typeof formularioSchema>;
