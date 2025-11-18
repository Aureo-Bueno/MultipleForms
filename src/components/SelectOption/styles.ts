import styled from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  border: 0.2rem solid
    ${({ theme, selected }) =>
      selected ? theme.colors.success : theme.colors.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  background-color: transparent;

  &:hover {
    border-color: ${({ theme, selected }) =>
      selected ? theme.colors.success : theme.colors.border_hover};
    background-color: ${({ theme }) => theme.colors.primary.light}33;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.typography.heading.h3.fontSize};
  font-weight: ${({ theme }) => theme.typography.heading.h3.fontWeight};
  margin-bottom: 0.7rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.typography.body.xs.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
