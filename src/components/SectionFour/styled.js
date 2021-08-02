import styled from "styled-components";

export const newsletter = styled.div`
    padding: 3% 0;
    background: #F2F2F2;

    h4{
        text-align: center;
        font-size: 22px;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        margin-bottom: 2%;

        @media(max-width: 600px){
            margin-left: 5%;
            width: 94%;
            font-size: 2em;
            text-align: left;
            margin-bottom: 5%;
        }
    }
`;

export const newsMsg = styled.div`
    width: 40%;
    margin-left: 30%;
    padding-bottom: 3%;

    @media (max-width: 600px){
        margin-left: 5%;
        width: 90%;
        padding-bottom: 20%;
    }

    p{
        text-align: center;
        font-family: 'Lato';
        font-size: 12px;
        font-weight: 400;

        @media (max-width: 600px){
            font-size: 1em;
        }
    }

    button{
        padding: 2% 0;
        margin-left: 25%;

        @media (max-width: 600px){
            margin-top: 10%;
            margin-left: 5%;
            width: 90%;
        }
    }
`;

export const newsForm = styled.form`
    display: flex;
    justify-content: center;

    @media (max-width: 600px){
        display: block;
        padding-bottom: 15%;
    }
`;

export const formItem = styled.div`
    width: 20%;
    margin-right: 1%;

    @media (max-width: 600px){
        margin-left: 5%;
        width: 90%;
    }
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid ${props => props.borderColor ? props.borderColor : "#BDBDBD"};
    border-radius: 5px;
    padding: 5% 5%;
    font-family: 'Lato';
    font-size: 12px;

    @media (max-width: 600px){
        padding: 4% 2%;
    }
`;

export const msgError = styled.p`
    color: #D7182A;
    font-size: 12px;
    visibility: ${props => props.vis ? props.vis : 'hidden'};
`;

export const formButton = styled.button`
    width: 50%;
    border-radius: 5px;
    background: #000000;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 14px;
    font-family: 'Lato';
    padding: 4% 0;
    float: left;

    @media (max-width: 600px){
        width: 100%;
    }
`;
