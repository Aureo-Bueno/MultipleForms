import styled from 'styled-components';


export const Container = styled.div<{selected: boolean;}>`
  display: flex;
  border: 0.2rem solid ${props => props.selected ? '#25CD89' : '#16195C'};
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  align-items: center;
  cursor: pointer;

  &:hover{
      border: 0.2rem solid #496459
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 0.2rem;
`;

export const Title = styled.div`
   font-size: 1rem;
   font-weight: bold;
   margin-bottom: 0.7rem;
`;

export const Description = styled.div`
   font-size: 0.8rem;
   color: #B8B8D4;
`;