import { FormState } from "./FormState";
import { FormAction } from "./FormActions";

export type FormContextType = {
  state: FormState;
  dispatch: (action: FormAction) => void;
};
