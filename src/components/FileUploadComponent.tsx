import useFileValidation from "../hooks/useFileValidation";
import { allowedFileTypesOptions } from "../utils/indexOptions";

const FileUploadComponent = () => {
  const { fileError, validatedFile, handleFileChange } = useFileValidation();

  return (
    <div className="mt-8 w-full border-2 border-gray-500 flex flex-col items-start justify-center gap-4 pb-3">
      <label className="w-full bg-gray-500 text-white text-lg font-bold px-5 py-4" htmlFor="idFileUpload">
        Adjuntar su PQRSD en caso de ser necesario
      </label>
      <input
        className=" w-72 lg:w-[600px] h-10 ml-5 border-2 rounded-md text-xl cursor-pointer"
        type="file"
        id="idFileUpload"
        name="pqrsFile"
        onChange={handleFileChange}
        accept={allowedFileTypesOptions.map((ext) => `.${ext}`).join(", ")}
      />
      <p className="text-lg px-5">
        Máximo 1 fichero.
        <br />
        límite de 100 MB.
        <br />
        Tipos permitidos: txt, rtf, pdf, doc, docx, odt, ppt, pptx, odp, xls,
        xlsx, ods.
      </p>
      {fileError && <p className="text-lg px-5 text-red-600 font-bold">{fileError}</p>}
      {validatedFile && <p className="text-lg px-5 text-green-600 font-bold animate-scale-infinite">Archivo seleccionado: {validatedFile.name}</p>}
    </div>
  );
};

export default FileUploadComponent;
