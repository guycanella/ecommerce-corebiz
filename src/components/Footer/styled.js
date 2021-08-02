import styled from "styled-components";

export const footerParent = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: #000000;
    padding: 2% 0;

    @media (max-width: 600px){
        display: block;
    }
`;

export const footerDiv = styled.div`
    width: 17%;
    display: ${props => props.flex ? 'flex' : 'block'};
    justify-content: center;

    @media (max-width: 600px){
        margin-left: 5%;
        width: 90%;
    }

    h4{
        font-weight: 700;
        font-size: 20px;
        padding: 5% 0;
        margin-bottom: -5%;
        color: #FFFFFF;
    }

    p{
        font-size: 13px;
        line-height: 2em;
        color: #FFFFFF;

        @media (max-width: 600px){
            font-size: 1.3em;
        }
    }

    hr{
        border: 4px solid #FFFFFF;
        background: #FFFFFF;
        width: 20%;

        @media (max-width: 600px){
            width: 10%;
        }
    }
`;

export const footerButton = styled.button`
    width: 90%;
    font-size: 12px;
    font-weight: 600;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10%;
    padding: 2% 0;
    display: inline-block;

    @media (max-width: 600px){
        margin-left: 10%;
        width: 80%;
    }
    
    i{
        font-size: 2em;
        margin-right: 10%;
        vertical-align: middle;
    }
    
    span{
        width: 60%;
        display: inherit;
        text-align: center;
        padding: 0 0;
        vertical-align: middle;
    }
`;

export const logos = styled.div`
    width: 50%;
    padding-top: 20%;

    @media (max-width: 600px){
        width: 30%;
        margin-left: 10%;
    }

    img{
        margin-top: -30%;

        @media (max-width: 600px){
            width: 60%;
            margin-top: -15%;
        }
    }

    p{
        font-size: 10px;
        color: #FFFFFF;
    }
`;