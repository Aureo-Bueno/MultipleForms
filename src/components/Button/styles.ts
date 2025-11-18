import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.body.regular.fontSize};
  font-weight: 700;
  padding: ${({ theme }) => theme.spacing.sm}
    ${({ theme }) => theme.spacing.xxl};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.success_hover};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
