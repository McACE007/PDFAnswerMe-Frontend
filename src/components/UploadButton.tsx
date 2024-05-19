import { CirclePlus, File, LoaderCircle } from "lucide-react";
import { ChangeEvent, useRef } from "react";
import { toast } from "sonner";
import { useFile } from "../hooks/useFile";

export default function UploadButton() {
  const { isLoading, uploadFile, file, removeFile } = useFile();
  const fileInputRef = useRef(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (file?.type !== 'application/pdf') {
      toast.error("Please only upload a PDF file", { duration: 2000 })
      return
    }
    uploadFile(file)
  };

  return (

    <div className="flex items-center justify-center space-x-[19px] md:space-x-[36px]">

      {file?.name && (
        <button onClick={async () => {
          await removeFile();
          if (fileInputRef && fileInputRef.current)
            fileInputRef.current.value = null;
          toast.warning("PDF file removed", {
          })
        }}>
          <div className="flex text-aigreen justify-center items-center space-x-[10px] hover:text-destructive group">
            <div className="border-aigreen/45 group-hover:border-destructive/45 border-[1.5px] p-[5px] md:p-[6px] rounded-[4px]">
              <File height={17} width={14} />
            </div>

            <div className="font-medium font-inter text-[14px] flex-wrap">
              {file.name}
            </div>
          </div>
        </button>
      )}

      <label htmlFor="file-upload">
        <div className="flex justify-center items-center size-[38px] border-[1.5px] border-black hover:border-aigreen hover:text-aigreen rounded-lg md:w-[180px] md:h-[39px] md:space-x-[15px]">
          {isLoading
            ? (<LoaderCircle size={18} className="animate-spin" />)
            : (<CirclePlus size={18} />)}
          <span className="font-semibold text-[14px] hidden md:block font-inter">Upload PDF</span>
        </div>
        <input
          type="file"
          id="file-upload"
          accept=".pdf"
          onChange={handleFileChange}
          hidden
          ref={fileInputRef}
        />
      </label>
    </div >
  )
}

