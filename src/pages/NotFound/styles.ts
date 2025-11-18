import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.text.primary};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Content = styled.div`
  text-align: center;
  max-width: 30rem;

  h1 {
    font-size: ${({ theme }) => theme.typography.heading.h1.fontSize};
    font-weight: ${({ theme }) => theme.typography.heading.h1.fontWeight};
    margin: ${({ theme }) => theme.spacing.md} 0
      ${({ theme }) => theme.spacing.sm} 0;
  }

  p {
    font-size: ${({ theme }) => theme.typography.body.small.fontSize};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  .backButton {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.xxl};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    transition: ${({ theme }) => theme.transitions.default};
    font-weight: 700;

    &:hover {
      background-color: ${({ theme }) => theme.colors.success_hover};
      transform: translateY(-2px);
    }
  }
`;

export const ErrorCode = styled.div`
  font-size: 6rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  opacity: 0.8;
`;
