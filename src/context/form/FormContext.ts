import { createContext } from "react";
import { FormContextType } from "./types";

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);
