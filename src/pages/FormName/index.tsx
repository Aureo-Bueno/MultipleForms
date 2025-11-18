import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import * as S from "./styles";
import { FormActions, useForm } from "../../context/form";
import { Button } from "../../components/Button";
import FormField from "../../components/FormField";
import { HeaderForm } from "../../components/HeaderForm";

export function FormName(): JSX.Element {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [nameError, setNameError] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    dispatch({
      type: FormActions.SET_CURRENT_STEP,
      payload: 1,
    });
  }, []);

  const handleNextStep = (): void => {
    if (state.name !== "") {
      navigate("/level-program");
    } else {
      alert("Por favor, preencha o seu nome.");
    }
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;

    if (value.length > 40) {
      setNameError("O nome não pode ter mais de 40 caracteres.");
      return;
    }

    if (value.length === 1 && value === " ") {
      setNameError("O nome não pode começar com espaço.");
      return;
    }

    setIsButtonDisabled(value.trim() === "");
    setNameError("");

    dispatch({
      type: FormActions.SET_NAME,
      payload: value,
    });
  };

  return (
    <Theme>
      <S.Container>
        <HeaderForm
          magicStep="Passo 1/3"
          title="Vamos começar com o seu nome"
          description="Preencha o campo abaixo com o seu nome completo."
        />
        <FormField
          label="Seu nome completo"
          type="text"
          value={state.name}
          onChange={handleChangeName}
          error={nameError}
        />

        <Button onClick={handleNextStep} disabled={isButtonDisabled}>
          Próximo
        </Button>
      </S.Container>
    </Theme>
  );
}
