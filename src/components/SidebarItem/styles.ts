import styled from "styled-components";

export const Container = styled.div`
    margin: 2rem 0;
    cursor: pointer;
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 40rem;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #FFF;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 0.8rem;
    color: #B8B8D4;
`;

export const IconArea = styled.div<{ active: boolean; }>`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25CD89' : '#494A7C'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Point = styled.div<{ active: boolean; }>`
    width: 0.4rem;
    height: 0.4rem;
    border: 0.3rem solid #494A7C;
    border-radius: 50%;
    margin-left: 25rem;
    margin-right: -90rem;
    background-color: ${props => props.active ? '#25CD89' : '#02044A'};
`;