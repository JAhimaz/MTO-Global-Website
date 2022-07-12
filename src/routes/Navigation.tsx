import React from "react";
import {Navbar, Nav, Row, Col} from "react-bootstrap";
import { Container } from "react-bootstrap";
import Logo from '../assets/logo.png';
import Logo2 from '../assets/logo-hover.png';

import "../css/Navigation.css"

export const Navigation = () => {
    
    return (

        <Navbar className="navbar-bgcolor center-margin" expand="lg">            
            <Container fluid className="no-margin">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Row className="full-width">                    
                    <Navbar.Collapse className="full-width">                    
                        <Nav className="navbar-links full-width">                    
                            <Col lg={2}>
                                <Nav.Link href="#home" role="button" className="box-shadow">OUR SERVICE</Nav.Link>
                            </Col>
                            <Col lg={2} >
                                <Nav.Link href="#link" className="box-shadow">HOW TO ORDER</Nav.Link>
                            </Col>
                            <Col lg={2} className="logo-column">
                                <Navbar.Brand className="logo-position" href="#home">
                                <div id="logo">
                                    <img
                                    src={Logo} 
                                    className="navigation-logo box-shadow" 
                                    alt="MTO GLobal"
                                    />
                                </div>                                                              
                                </Navbar.Brand>
                                <Navbar.Brand className="logo-position-2" href="#home">
                                <div id="logo">
                                    <img
                                    src={Logo2} 
                                    className="navigation-logo-2 box-shadow" 
                                    alt="MTO GLobal"
                                    /> 
                                </div>
                                </Navbar.Brand>                                 
                            </Col>
                            <Col lg={2} >
                                <Nav.Link href="#link" className="box-shadow">ONLINE STORE</Nav.Link>
                            </Col>
                            <Col lg={2} >
                                <Nav.Link href="#link" className="box-shadow">WHERE TO FIND US</Nav.Link>
                            </Col>                                                
                        </Nav>
                    </Navbar.Collapse>
                </Row>
            </Container>
        </Navbar>
    );
}
