import * as S from "./styles";

type SelectOptionProps = {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
};

export function SelectOption({
  title,
  description,
  selected,
  onClick,
}: SelectOptionProps) {
  return (
    <S.Container onClick={onClick} selected={selected}>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>
    </S.Container>
  );
}
