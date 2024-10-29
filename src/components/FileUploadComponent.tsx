import { useState } from "react";
import { allowedFileTypesOptions } from "../utils/allowedFileTypesOptions";
import { FormularioData } from "../schemas/formularioSchema";
import { FieldErrors, UseFormRegister, UseFormSetError } from "react-hook-form";

type FileProps = {
  register: UseFormRegister<FormularioData>;
  errors: FieldErrors<FormularioData>;
  setError: UseFormSetError<FormularioData>;
  onFileChange: (file: File | null) => void;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB en bytes

const FileUploadComponent = ({ register, errors, setError, onFileChange }: FileProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isFileTypeValid, setIsFileTypeValid] = useState<boolean>(true); // Estado para validar tipo de archivo

  const checkFileType = (file: File) => {
    const extension = file.name.split('.').pop();
    return allowedFileTypesOptions.includes(extension as typeof allowedFileTypesOptions[number]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;

    // Validaciones
    if (selectedFile) {
      const fileTypeValid = checkFileType(selectedFile);
      setIsFileTypeValid(fileTypeValid); // Actualiza el estado de validez de tipo de archivo

      // Si el tipo de archivo no es válido
      if (!fileTypeValid) {
        setError("pqrsFile", {
          type: "manual",
          message: `Tipo de archivo no válido. Solo se admiten: ${allowedFileTypesOptions.join(", ")}.`,
        });
        setFile(null); // Limpiar el estado del archivo
        onFileChange(null); // Informar al padre que no hay archivo válido
        event.target.value = ""; // Limpiar el valor del input
        return; // Salir si el tipo de archivo no es válido
      }

      // Verificar el tamaño del archivo
      if (selectedFile.size > MAX_FILE_SIZE) {
        setError("pqrsFile", {
          type: "manual",
          message: "El tamaño del archivo debe ser menor de 5MB.",
        });
        setFile(null); // Limpiar el estado del archivo
        onFileChange(null); // Informar al padre que no hay archivo válido
        event.target.value = ""; // Limpiar el valor del input
        return; // Salir si el tamaño no es válido
      }

      // Si todas las validaciones pasan, actualiza el archivo y limpia el error
      setFile(selectedFile);
      onFileChange(selectedFile); // Informar al padre sobre el archivo válido
      setError("pqrsFile", { type: "manual", message: "" }); // Limpiar error
    } else {
      // Si no hay archivo seleccionado, limpia el estado y el valor del input
      setFile(null);
      onFileChange(null);
      event.target.value = ""; // Limpiar el valor del input
    }
  };

  return (
    <div className="mt-8 w-full border-2 border-gray-500 flex flex-col items-start justify-center gap-4 pb-3">
      <label className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4" htmlFor="idFileUpload">
        Adjuntar su PQRSD en caso de ser necesario
      </label>
      <input
        className="w-72 lg:w-[600px] h-10 ml-5 border-2 rounded-md text-xl cursor-pointer"
        type="file"
        id="idFileUpload"
        accept={allowedFileTypesOptions.map(type => `.${type}`).join(", ")}
        onChange={handleFileChange}
      />
      <p className="text-lg px-5">
        Máximo 1 fichero.
        <br />
        Límite de 5 MB.
        <br />
        Tipos permitidos: {allowedFileTypesOptions.join(", ")}.
      </p>
      {file && isFileTypeValid && ( // Mostrar mensaje de éxito solo si el archivo es válido
        <p className="text-lg px-5 text-green-600 font-bold animate-scale-infinite">
          Archivo seleccionado: {file.name}
        </p>
      )}
      {errors.pqrsFile && (
        <p className="text-lg px-5 text-red-500">{errors.pqrsFile.message}</p>
      )}
    </div>
  );
};

export default FileUploadComponent;
