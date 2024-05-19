import { ReactNode, useState } from "react";
import { FileContext } from "../contexts/FileContext";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function FileProvider({ children }: { children: ReactNode }) {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setLoading] = useState(false);
  const { userId } = useAuth();
  const navigate = useNavigate();

  const uploadFile = async (file: File) => {
    try {
      setLoading(prev => !prev);
      const formData = new FormData();
      formData.append('file', file)
      formData.append('userId', userId as string)
      const response = await axios.post("http://127.0.0.1:8000/upload-file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      setLoading(prev => !prev);
      setFile(file);
      navigate('/chat/81a6a6d5-a952-4a16-8281-005ecee43a5c', { replace: true })
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }

  const removeFile = async () => {
    try {
      setFile(null);
      navigate('/chat', { replace: true })
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

