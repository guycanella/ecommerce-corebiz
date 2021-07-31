import React from 'react-dom';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
  } from 'react-bootstrap';

import corebizLogo from '../../img/corebizLogo.png';

function SectionOne() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand id='navbar-brand' href="#">
                <img id="corebizLogo" src={corebizLogo} alt="Corebiz Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Form id="searchForm" className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="O que está procurando?"
                        className="mr-2"
                        aria-label="Search"
                        style={{ border: 0 }}
                    />
                    <Button id="buttonSearch" variant="outline-success"><i class="bi bi-search"></i></Button>
                </Form>
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    navbarScroll
                >
                    <Nav.Link href="#action2"><i class="bi bi-person"></i>Minha conta</Nav.Link>
                    <Nav.Link href="#action1"><i id="shoppingCart" className="bi bi-cart4"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default SectionOne;