import * as S from "./styles";

export interface BackButtonProps {
  to: string;
  children: React.ReactNode;
}

export function BackButton(props: BackButtonProps): JSX.Element {
  return <S.Button {...props}>{props.children}</S.Button>;
}
