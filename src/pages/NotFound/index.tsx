import { Link } from "react-router-dom";
import * as S from "./styles";

export function NotFound(): JSX.Element {
  return (
    <S.Container>
      <S.Content>
        <S.ErrorCode>404</S.ErrorCode>
        <h1>Página Não Encontrada</h1>
        <p>A página que você está procurando não existe.</p>
        <Link to="/" className="backButton">
          Voltar para a página inicial
        </Link>
      </S.Content>
    </S.Container>
  );
}
