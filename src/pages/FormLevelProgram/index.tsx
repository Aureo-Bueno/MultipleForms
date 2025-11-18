import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../components/SelectOption";
import { Theme } from "../../components/Theme";
import * as S from "./styles";
import { FormActions, useForm } from "../../context/form";
import { HeaderForm } from "../../components/HeaderForm";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

export function FormLevelProgram(): JSX.Element {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
      return;
    }

    dispatch({
      type: FormActions.SET_CURRENT_STEP,
      payload: 2,
    });
  }, []);

  const handleNextStep = (): void => {
    if (state.name !== "") {
      navigate("/contact");
    } else {
      alert("Preencha os dados.");
    }
  };

  const setLevel = (level: 0 | 1): void => {
    dispatch({
      type: FormActions.SET_LEVEL,
      payload: level,
    });
    setIsButtonDisabled(false);
  };

  return (
    <Theme>
      <S.Container>
        <HeaderForm
          magicStep="Passo 2/3"
          title={`${state.name}, o que melhor descreve você?`}
          description="Escolha a opção que melhor condiz com seu estado atual."
        />
        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou desenvolvedor"
          description="Comecei a programar há 2 anos ou mais"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <BackButton to="/">Voltar</BackButton>
        <Button onClick={handleNextStep} disabled={isButtonDisabled}>
          Próximo
        </Button>
      </S.Container>
    </Theme>
  );
}
