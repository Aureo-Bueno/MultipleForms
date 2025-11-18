import { FormState, FormAction, FormActions } from "../types";

export const formReducer = (
  state: FormState,
  action: FormAction
): FormState => {
  switch (action.type) {
    case FormActions.SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };

    case FormActions.SET_NAME:
      return { ...state, name: action.payload };

    case FormActions.SET_LEVEL:
      return { ...state, level: action.payload };

    case FormActions.SET_EMAIL:
      return { ...state, email: action.payload };

    case FormActions.SET_GITHUB:
      return { ...state, github: action.payload };

    default:
      return state;
  }
};
