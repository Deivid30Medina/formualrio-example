import useFileValidation from "../hooks/useFileValidation";
import { allowedFileTypesOptions } from "../utils/indexOptions";

const FileUploadComponent = () => {
  const { fileError, validatedFile, handleFileChange } = useFileValidation();

  return (
    <div>
      <label htmlFor="idFileUpload">
        Adjuntar su PQRSD en caso de ser necesario
      </label>
      <input
        type="file"
        id="idFileUpload"
        name="pqrsFile"
        onChange={handleFileChange}
        accept={allowedFileTypesOptions.map((ext) => `.${ext}`).join(", ")}
      />
      <p>
        Máximo 1 fichero.
        <br />
        límite de 100 MB.
        <br />
        Tipos permitidos: txt, rtf, pdf, doc, docx, odt, ppt, pptx, odp, xls,
        xlsx, ods.
      </p>
      {fileError && <p style={{ color: "red" }}>{fileError}</p>}
      {validatedFile && <p>Archivo seleccionado: {validatedFile.name}</p>}
    </div>
  );
};

export default FileUploadComponent;
