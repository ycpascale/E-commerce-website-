import React from 'react';
import './NavbarMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo_size.jpg'
import { Link } from "react-router-dom";

function NavbarMenu() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="header-icon" >
                        <FontAwesomeIcon icon="search" size="lg" />
                    </Col>
                    <Col xs={6} className= "header-logo">
                        <Link to="/">
                            <img src={logo} alt="Logo of the jewelry shop"/>
                        </Link>
                    </Col>
                    <Col className="header-icon" >
                        <span style={{paddingRight: "25px"}} ><FontAwesomeIcon icon={['far', 'user']} size="lg"/></span>
                        <FontAwesomeIcon icon="shopping-cart" size="lg" />
                    </Col>
                </Row>
            </Container>    
            <div>
                <Navbar bg="light" expand="lg" className="justify-content-center">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                    {/* <Nav.Link href="#home">What's new</Nav.Link> */}
                    <NavDropdown title="What's new" id="basic-nav-dropdown" className="dropdown-item">
                        <NavDropdown.Item href="/contact">New feature 1</NavDropdown.Item>
                        <NavDropdown.Item href="/">New feature 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">New feature 3</NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link href="#link">Bracelets</Nav.Link> */}
                    <NavDropdown title="Bracelets" id="basic-nav-dropdown" className="dropdown-item">
                        <NavDropdown.Item href="#action/3.1">Gold Bracelets</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Silver Bracelets</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Funsy Bracelets</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Necklaces" id="basic-nav-dropdown" className="dropdown-item">
                        <NavDropdown.Item href="#action/3.1">Gold necklackes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Silver necklackes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Funsy necklackes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default NavbarMenu;