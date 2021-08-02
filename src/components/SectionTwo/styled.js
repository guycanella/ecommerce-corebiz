import styled from "styled-components";
import { Carousel } from 'react-bootstrap';


export const carousel = styled(Carousel)`
    button{
        width: 10px !important;
        height: 10px !important;
        border-radius: 100%;
    }

    @media(max-width: 600px){
        img{
            width: 100%;
        }
    }
`;

export const shadeScreen = styled.div`
    background: #000000;
    width: 50%;
    float: left;
    position: absolute;

    @media(max-width: 600px){
        width: 100%;
        opacity: 0.7;
    }
`;

export const text = styled.div`
    width: 55%;
    margin-left: 32%;
    margin-top: 15%;

    @media(max-width: 600px){
        margin-left: 5%;
        width: 90%;
    }

    h1{
        font-weight: 900;
        color: #FFFFFF;

        @media(max-width: 600px){
            font-size: 3.2em;
            font-family: 'Nunito';
        }
    }

    h2{
        font-weight: 500;
        color: #fff;

        @media(max-width: 600px){
            font-size: 2.7em;
        }
    }
`;

