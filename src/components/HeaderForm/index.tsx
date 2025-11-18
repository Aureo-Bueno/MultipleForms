import { Fragment } from "react";
import { HeaderFormProps } from "./types";
import * as S from "./styles";

export function HeaderForm({
  magicStep,
  title,
  description,
}: HeaderFormProps): JSX.Element {
  return (
    <Fragment>
      <S.Paragraph>{magicStep}</S.Paragraph>
      <S.Title>{title}</S.Title>
      <S.Paragraph>{description}</S.Paragraph>
      <S.Separator />
    </Fragment>
  );
}
