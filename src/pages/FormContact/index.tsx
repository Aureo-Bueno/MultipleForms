import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import * as S from "./styles";
import { FormActions, useForm } from "../../context/form";
import FormField from "../../components/FormField";
import { Button } from "../../components/Button";
import { HeaderForm } from "../../components/HeaderForm";
import { BackButton } from "../../components/BackButton";

export function FormContact(): JSX.Element {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [githubError, setGithubError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
      return;
    }

    dispatch({
      type: FormActions.SET_CURRENT_STEP,
      payload: 3,
    });
  }, []);

  const handleNextStep = (): void => {
    if (state.email !== "" && state.github !== "") {
      console.log(state);
    } else {
      alert("Preencha os dados.");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    dispatch({
      type: FormActions.SET_EMAIL,
      payload: value,
    });

    if (value && !emailRegex.test(value)) {
      setEmailError("E-mail inválido");
    } else {
      setEmailError("");
    }
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[\w-]+\/?$/;

    dispatch({
      type: FormActions.SET_GITHUB,
      payload: value,
    });

    if (value && !githubRegex.test(value)) {
      setGithubError("Formato inválido");
    } else {
      setGithubError("");
    }
  };

  return (
    <Theme>
      <S.Container>
        <HeaderForm
          magicStep="Passo 3/3"
          title={`Legal ${state.name}, onde te achamos?`}
          description="Preencha com seus contatos para conseguirmos entrar em contato"
        />
        <FormField
          label="Qual seu E-mail?"
          type="email"
          value={state.email}
          onChange={handleEmailChange}
          error={emailError}
        />

        <FormField
          label="Qual seu GitHub?"
          type="url"
          value={state.github}
          onChange={handleGithubChange}
          error={githubError}
        />

        <BackButton to="/level-program">Voltar</BackButton>
        <Button onClick={handleNextStep}>Finalizar Cadastro</Button>
      </S.Container>
    </Theme>
  );
}
