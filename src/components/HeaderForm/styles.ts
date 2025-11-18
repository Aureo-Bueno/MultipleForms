import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.typography.body.small.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.typography.heading.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.heading.h2.fontWeight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Separator = styled.hr`
  height: 0.1rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;
