import styled from "styled-components";

const shadeHeight = window.screen.height / 1.5;

export const mainProducts = styled.div`
    height: ${shadeHeight}px;
    padding-top: 2%;

    @media(max-width: 600px){
        padding-top: 5%;
    }

    h4{
        font-weight: 900;
        font-size: 20px;
        width: 70%;
        margin-left: 15%;
        margin-bottom: -1%;

        @media(max-width: 600px){
            margin-left: 5%;
            width: 90%;
            font-size: 30px;
        }
    }
    
    hr{
        width: 4.5%;
        margin-left: 15%;
        border: 4.3px solid gray;
        margin-bottom: 2%;

        @media(max-width: 600px){
            width: 10%;
            margin-left: 5%;
        }
    }
`;

export const productsCarousel = styled.div`
    width: 70%;
    margin-left: 15%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 600px){
        margin-left: 5%;
        width: 90%;
        flex-wrap: wrap;
    }
`;

export const productItem = styled.div`
    position: relative;
    width: 18%;
    display: grid;
    padding-bottom: 2%;

    @media(max-width: 600px){
        width: 50%;
    }

    p{
        text-align: center;
    }

    img{
        max-width: 100%;
        height: auto;

        @media(max-width: 600px){
        width: 100%;
    }
    }

    &:hover{
        background: #E6E8EA;

        button{
            visibility: visible;
        }
    }
`;

export const textStyle = styled.span`
    font-size: ${props => props.fontSize ? props.fontSize : "12px"};
    font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
    color: ${props => props.Color ? props.Color : '#000000'};
`;

export const offSale = styled.div`
    position: absolute;
    right: 0;
    width: 0;
    height: 0;
    border-top: 72px solid #F8475F;
    border-left: 72px solid transparent;
    margin-left: 134px;

    &:before{
        content: 'OFF';
        position: absolute;
        top: -65px;
        right: 10px;
        font-weight: 900;
        font-size: 16px;
        color: #FFFFFF;
    }
`;

export const Button = styled.button`
    font-size: 12px;
    font-weight: 700;
    width: 60%;
    margin: auto;
    padding: 3% 0;
    border-radius: 6px;
    background: #000000;
    color: #FFFFFF;
    visibility: hidden;
`;