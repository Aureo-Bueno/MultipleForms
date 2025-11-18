import { ChangeEvent } from "react";

export type FormFieldProps = {
  label: string;
  id?: string;
  name?: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};
