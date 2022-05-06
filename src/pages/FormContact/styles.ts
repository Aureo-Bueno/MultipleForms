import styled from 'styled-components';

export const Container = styled.div`
    p{
        font-size: 0.9rem;
        color: #B8B8D4;
    }

    h1 {
        margin: 0;
        padding:0;
        font-size: 1.6rem;
    }

    hr {
        height: 0.1rem;
        border: 0;
        background-color: #16195C;
        margin: 1rem 0;
    }

    label {
        font-size: 1rem;
        display: block;
        margin-bottom: 1rem;

        input {
            display: block;
            margin-top: 1rem;
            box-sizing: border-box;
            width: 100%;
            padding: 1rem 1rem;
            border: 0.2rem solid #25cd89;
            border-radius: 1rem;
            color: #FFF;
            outline: 0;
            font-size: 1rem;
            background-color: #02044A;
        }
    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 1rem;
        font-weight: bold;
        padding: 1rem 3rem;
        border: 0;
        border-radius: 3rem;
        cursor: pointer;
        margin-top: 3rem;
    }


    .backButton {
        font-size: 1rem;
        text-decoration: none;
        padding: 2rem 4rem;
        color: #B8B8D4;
    }
`;