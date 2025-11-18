import { ButtonProps } from "./types";
import * as S from "./styles";
import { PropsWithChildren } from "react";

export function Button({
  children,
  type = "button",
  ...props
}: PropsWithChildren<ButtonProps> & { type?: "button" | "reset" | "submit" }) {
  return (
    <S.Button type={type} {...props}>
      {children}
    </S.Button>
  );
}
