import { z } from "zod";
import { requestOptions, reasonForRequestOptions, typeDocumentOptions, responseMedium, populationOptions, disabilityOptions, typePersonOptions, allowedFileTypesOptions } from "../utils/indexOptions";

const MAX_FILE_SIZE = 100 * 1024 * 1024;

export const allowedFileTypesOptions2 = [
  "txt",
  "rtf",
  "pdf",
  "doc",
  "docx",
  "odt",
  "ppt",
  "pptx",
  "odp",
  "xls",
  "xlsx",
  "ods"
] as const;

const checkFileType = (file: File) => {
  const extension = file.name.split('.').pop();
  console.log(`Extensión del archivo 2: ${extension}`);

  if (extension) {
    const isValid = allowedFileTypesOptions.includes(extension as typeof allowedFileTypesOptions2[number]);
    console.log(`Extensión respuesta: ${isValid}`);
    return isValid;
  } else {
    console.log("No se pudo determinar la extensión del archivo.");
    return false;
  }
};



export const formularioSchema = z.object({
  typeRequest: z.enum(
    requestOptions.map(option => option.value) as [string, ...string[]],
    {
      errorMap: () => ({ message: "Tipo de solicitud es requerido" }),
    }
  )
    .optional()
  ,

  reasonRequest: z.enum(
    reasonForRequestOptions.map(option => option.value) as [string, ...string[]],
    {
      errorMap: () => ({ message: "Motivo de la solicitud es requerido" }),
    }
  )
    .optional()
  ,

  typePerson: z.enum(
    typePersonOptions.map(option => option.value) as [string, ...string[]],
    {
      errorMap: () => ({ message: "Tipo de solicitante es requerido" }),
    }
  )
    .optional()
  ,

  typeDocument: z.enum(
    typeDocumentOptions.map(option => option.value) as [string, ...string[]],
    {
      errorMap: () => ({ message: "Tipo de documento es requerido" }),
    }
  )
    .optional()
  ,

  numberDocument: z.string()
    .min(5, "Longitud mínima de 5")
    .max(15, "Longitud máxima de 15")
    .trim()
    .optional()
  ,

  name: z.string()
    .min(1, "Nombre requerido")
    .max(50, "Demasiado largo")
    .trim()
    .optional()
  ,

  lastName: z.string()
    .min(1, "Primer Apellido requerido")
    .max(50, "Primer Apellido demasiado largo")
    .trim()
    .optional()
  ,

  secondLastName: z.string()
    .max(50, "Segundo apellido demasiado largo")
    .trim()
    .optional()
    .nullable()
  ,

  nit: z.string()
    .min(8, "Nit demsadiado corto.")
    .max(11, "Nit demasiado largo")
    .trim()
    .refine((nit) => !isNaN(parseFloat(nit)),
      "El campo nit debe ser un número."
    )
    .optional()
  ,

  razonSocial: z.string()
    .min(1, "Razón social es requerida")
    .max(50, "Razón social es demasiado largo")
    .trim()
    .optional()
  ,

  responseMedium: z.enum(
    responseMedium.map(option => option.value) as [string, ...string[]],
    {
      errorMap: () => ({ message: "El medio de respuesta es requerido" }),
    }
  )
    .optional()
  ,

  email: z.string().email(
    "Por favor escriba un email valido."
  )
    .trim()
    .optional()
  ,

  responseMediumAnonymous: z
    .enum(responseMedium.map(option => option.value) as [string, ...string[]])
    .nullable()
    .optional(),

  emailAnonymous: z
    .string()
    .trim()
    .optional()
    .nullable()
    .refine(
      (emailAnonymous) => {
        // Solo valida si `emailAnonymous` tiene contenido
        return !emailAnonymous || z.string().email().safeParse(emailAnonymous).success;
      },
      {
        message: "Por favor, escribe un correo electrónico válido.",
      }
    ),
    
  phoneNumber: z.string()
    .trim()
    .optional()
    .refine(
      (telefono) => !telefono || (telefono.length === 10 && /^\d+$/.test(telefono)),
      {
        message: "Debe contener exactamente 10 dígitos y solo debe incluir números",
      }
    )
  ,

  descriptionPqrs: z.string()
    .min(20, "Mínimo 20 caracteres.")
    .max(5000, "Máximo 5000 caracteres.")
    .trim()
    .optional()
  ,

  typePopulation: z.enum(
    populationOptions.map(option => option.value) as [string, ...string[]],
    {
      errorMap: () => ({ message: "La caracterización ciudadana es requerido." }),
    }
  )
    .optional()
  ,

  typeDisability: z.enum(
    disabilityOptions.map(option => option.value) as [string, ...string[]],
    {
      errorMap: () => ({ message: "La caracterización ciudadana es requerido." }),
    }
  )
    .optional()
  ,

  pqrsFile: z
    .instanceof(File)
    .optional()
    .nullable()
    .refine((file) => {
      return !file || file.size <= MAX_FILE_SIZE;
    }, 'El tamaño del archivo debe ser menor de 3MB.')
    .refine(file => {
      return !file || checkFileType(file);
    }, `Solo se admiten formatos: ${allowedFileTypesOptions.join(', ')}.`)
  ,


  aceptaTerminos: z.boolean()
    .refine((val) => val === true, {
      message: "Debes aceptar los términos del servicio.",
    })
    .optional()
    .nullable()
  ,

})
  .refine((data) => data.typePerson === "natural" ? !!data.name : true, {
    message: "Nombre requerido para persona natural",
    path: ["name"],
  })
  .refine((data) => data.typePerson === "natural" ? !!data.lastName : true, {
    message: "Primer apellido requerido para persona natural",
    path: ["lastName"],
  })
  .refine((data) => data.typePerson === "natural" ? !!data.typeDocument : true, {
    message: "Tipo de documento es requerido",
    path: ["typeDocument"],
  })
  .refine((data) => data.typePerson === "natural" ? !!data.numberDocument : true, {
    message: "Número de documento es requerido",
    path: ["numberDocument"],
  })
  .refine((data) => data.typePerson === "natural" ? !!data.typePopulation : true, {
    message: "Tipo de población es requerido",
    path: ["typePopulation"],
  })
  .refine((data) => data.typePerson === "natural" ? !!data.typeDisability : true, {
    message: "Tipo de discapacidad es requerido",
    path: ["typeDisability"],
  })
  .refine((data) => data.typePerson === "juridica" ? !!data.nit : true, {
    message: "NIT requerido para persona jurídica",
    path: ["nit"],
  })
  .refine((data) => data.typePerson === "juridica" ? !!data.razonSocial : true, {
    message: "Razón social requerida para persona jurídica",
    path: ["razonSocial"],
  })
  .refine(
    (data) => {
      // Condición personalizada para requerir `emailAnonymous` solo si `responseMediumAnonymous` tiene valor
      return data.responseMediumAnonymous ? !!data.emailAnonymous : true;
    },
    {
      message: "El email es requerido cuando se selecciona un medio de respuesta.",
      path: ["emailAnonymous"],
    }
  );


// Define el tipo TypeScript basado en el esquema
export type FormularioData = z.infer<typeof formularioSchema>;
