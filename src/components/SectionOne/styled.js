import styled, { createGlobalStyle } from "styled-components";
import {
    Navbar,
    Nav,
    Form,
    Button
} from 'react-bootstrap';

const smoothRed = "#F8475F";
const smoothGray = "#CEC9C9";

createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

    *{
        font-family: 'Nunito', sans-serif;
        -moz-box-sizing: border-box; 
        -webkit-box-sizing: border-box; 
        box-sizing: border-box;
    }
`;

export const NavbarBrand = styled(Navbar.Brand)`
    margin-left: 19%;
    margin-right: 7%;
    margin-left: 13%;
    padding-bottom: 2%;
`;

export const form = styled(Form)`
    width: 60%;
    border-bottom: 3px solid ${smoothGray};
    margin-right: 3%;

    input[type=search]:focus{
        box-shadow: inset 0 0px 0 #ddd;
    }
`;

export const Btn = styled(Button)`
    color: #000000;
    border: none;
    background: #ffffff;

    &:hover{
        background: #ffffff;
    }
`;

export const navLink = styled(Nav.Link)`

    i{
        color: #000000;
        cursor: pointer;
        font-size: 1.2em;

        span{
            position: absolute;
            background: ${smoothRed};
            color: #ffffff;
            font-weight: 700;
            font-size: 10px;
            width: 12px;
            height: 12px;
            text-align: center;
            border-radius: 50%;
            top: 40%;
            right: 14%;
        }
    }
`;