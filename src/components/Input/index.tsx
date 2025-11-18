import { PropsWithChildren } from "react";
import { InputProps } from "./types";
import * as S from "./styles";

export function Input({ children, ...props }: PropsWithChildren<InputProps>) {
  return <S.Input {...props}>{children}</S.Input>;
}
