import React from 'react-dom';
import {
    Navbar,
    Nav,
    FormControl,
} from 'react-bootstrap';
import * as S from './styled';

import corebizLogo from '../../img/corebizLogo.png';

function SectionOne() {

    return (
        <Navbar expand="lg">
            <S.NavbarBrand href="#">
                <img src={corebizLogo} alt="Corebiz Logo" />
            </S.NavbarBrand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse >
                <S.form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="O que está procurando?"
                        className="mr-2"
                        aria-label="Search"
                        style={{ border: 0 }}
                    />
                    <S.Btn id="buttonSearch" variant="outline-success"><i className="bi bi-search"></i></S.Btn>
                </S.form>
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    navbarScroll
                >
                    <S.navLink href="#action2"><i className="bi bi-person"></i>Minha conta</S.navLink>
                    <S.navLink href="#action1">
                        <i id="shoppingCart" className="bi bi-cart4"><span>{Object.keys(localStorage).length}</span></i>
                    </S.navLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default SectionOne;