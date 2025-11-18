export enum FormActions {
  SET_CURRENT_STEP = "SET_CURRENT_STEP",
  SET_NAME = "SET_NAME",
  SET_LEVEL = "SET_LEVEL",
  SET_EMAIL = "SET_EMAIL",
  SET_GITHUB = "SET_GITHUB",
}

export type FormAction =
  | { type: FormActions.SET_CURRENT_STEP; payload: number }
  | { type: FormActions.SET_NAME; payload: string }
  | { type: FormActions.SET_LEVEL; payload: 0 | 1 }
  | { type: FormActions.SET_EMAIL; payload: string }
  | { type: FormActions.SET_GITHUB; payload: string };
