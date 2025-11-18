import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.text.primary};
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 60rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Sidebar = styled.div`
  width: 18rem;
  min-width: 15rem;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

export const Page = styled.div`
  flex: 1;
  padding-left: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
`;
