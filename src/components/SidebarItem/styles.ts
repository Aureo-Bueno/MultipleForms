import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin: 0;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.typography.heading.h3.fontWeight};
  font-size: ${({ theme }) => theme.typography.heading.h3.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.typography.body.xs.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const IconArea = styled.div<{ active: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.success : theme.colors.primary.lighter};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const Point = styled.div<{ active: boolean }>`
  width: 0.4rem;
  height: 0.4rem;
  border: 0.3rem solid ${({ theme }) => theme.colors.primary.lighter};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.success : theme.colors.primary.dark};
  margin-left: ${({ theme }) => theme.spacing.sm};
`;
