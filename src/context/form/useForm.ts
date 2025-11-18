import { useContext } from "react";
import { FormContext } from "./FormContext";

export const useForm = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useForm deve ser utilizado dentro do FormProvider");
  }

  return context;
};
