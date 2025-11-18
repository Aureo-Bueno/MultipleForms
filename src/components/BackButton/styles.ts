import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Button = styled(Link)`
  font-size: ${({ theme }) => theme.typography.body.regular.fontSize};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: inline-block;
  transition: ${({ theme }) => theme.transitions.default};
  margin-top: ${({ theme }) => theme.spacing.lg};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
