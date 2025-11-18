import styled from "styled-components";

export const Input = styled.input`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.sm};
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 0.2rem solid ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.primary.dark};
  font-size: ${({ theme }) => theme.typography.body.regular.fontSize};
  outline: 0;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    border-color: ${({ theme }) => theme.colors.success_hover};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.success}33;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;
