import { ReactNode, useReducer, useMemo } from "react";
import { FormContext } from "./FormContext";
import { formReducer, initialFormState } from "./reducer";

type FormProviderProps = {
  children: ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
