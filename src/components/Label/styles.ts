import styled from "styled-components";

export const LabelComponent = styled.label`
  font-size: ${({ theme }) => theme.typography.body.regular.fontSize};
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
`;
