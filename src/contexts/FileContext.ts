import { createContext } from "react";

type ContextTypes = {
  file: File | null;
  isLoading: boolean;
  uploadFile: (file: File) => void;
  removeFile: () => void;
}

export const FileContext = createContext<ContextTypes>({
  file: null,
  isLoading: false,
  uploadFile: (file: File) => { file },
  removeFile: () => { },
});
