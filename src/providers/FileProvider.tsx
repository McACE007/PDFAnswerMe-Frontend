import { ReactNode, useState } from "react";
import { FileContext } from "../contexts/FileContext";
import axios from "axios";

export default function FileProvider({ children }: { children: ReactNode }) {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setLoading] = useState(false);

  const uploadFile = async (file: File) => {
    console.log(file)
    console.log("hey")
    try {
      setLoading(prev => !prev);
      const formData = new FormData();
      formData.append('file', file)
      axios.post("http://127.0.0.1:8000/upload-file", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      setLoading(prev => !prev);
      setFile(file);
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }

  const removeFile = async () => {
    try {
      setLoading(prev => !prev);
      await new Promise((res) => {
        setTimeout(res, 2000);
      })
      setLoading(prev => !prev);
      setFile(null);
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }

  return (
    <FileContext.Provider value={{ file, isLoading, uploadFile, removeFile }}>
      {children}
    </FileContext.Provider>
  )
}

