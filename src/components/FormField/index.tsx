import { Fragment } from "react";
import { Label } from "../Label";
import { Input } from "../Input";
import { FormFieldProps } from "./types";
import * as S from "./styles";

export default function FormField({
  label,
  id,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  error,
}: FormFieldProps): JSX.Element {
  return (
    <S.Container>
      <Label htmlFor={id || name}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <S.ContainerError>{error}</S.ContainerError>}
    </S.Container>
  );
}
