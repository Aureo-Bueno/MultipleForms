import { ReactNode } from "react";
import * as S from "./styles";
import { Header } from "../Header";
import { SideBarItem } from "../SidebarItem";
import { useForm } from "../../context/form";

type ThemeProps = {
  children: ReactNode;
};

export function Theme({ children }: ThemeProps) {
  const { state } = useForm();

  return (
    <S.Container>
      <S.Area>
        <Header />
        <S.Steps>
          <S.Sidebar>
            <SideBarItem
              title="Pessoal"
              description="Se Identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />

            <SideBarItem
              title="Profissional"
              description="Seu nivel"
              icon="book"
              path="/second"
              active={state.currentStep === 2}
            />

            <SideBarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/third"
              active={state.currentStep === 3}
            />
          </S.Sidebar>
          <S.Page>{children}</S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
}
