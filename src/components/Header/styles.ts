import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.border};

  h1 {
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.typography.heading.h1.fontSize};
    font-weight: ${({ theme }) => theme.typography.heading.h1.fontWeight};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: ${({ theme }) => theme.spacing.sm} 0 0 0;
  }
`;
