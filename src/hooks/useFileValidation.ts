import { useState } from "react";
import { formularioSchema } from "../schemas/formularioSchema";

const useFileValidation = () => {
  const [fileError, setFileError] = useState<string | null>(null);
  const [validatedFile, setValidatedFile] = useState<File | null>(null);

  const validateFile = (file: File) => {
    const fileData = {
      tipoDocumento: file.name,
      sizeDocument: file.size,
    };

    const result = formularioSchema.safeParse(fileData);
    if (!result.success) {
      // Si la validación falla, configura el mensaje de error
      setFileError(result.error.errors[0].message);
      setValidatedFile(null);
    } else {
      // Si es exitoso, limpia el error y guarda el archivo validado
      setFileError(null);
      setValidatedFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) validateFile(file);
  };

  return { fileError, validatedFile, handleFileChange };
};

export default useFileValidation;
