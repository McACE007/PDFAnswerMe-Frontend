import { useContext } from "react";
import { FileContext } from "../contexts/FileContext";

export function useFile() {
  return useContext(FileContext);
}
