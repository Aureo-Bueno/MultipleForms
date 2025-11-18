import styled from "styled-components";

export const Container = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const ContainerError = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.typography.body.small.fontSize};
  margin: ${({ theme }) => theme.spacing.xs} 0 0 0;
`;
