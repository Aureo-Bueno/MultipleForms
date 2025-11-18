import { PropsWithChildren } from "react";
import { LabelProps } from "./types";
import * as S from "./styles";

export function Label({ children, ...props }: PropsWithChildren<LabelProps>) {
  return <S.LabelComponent {...props}>{children}</S.LabelComponent>;
}
