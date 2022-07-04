import React from "react";
import {Row, Col} from "react-bootstrap";
import { Container } from "react-bootstrap";
import BgImg from '../assets/footer-bg.png'

import "../css/Footer.css"

export const Footer = () => {
    return (
        <Container fluid className="container-margin">                        
            <Row className="wrapper">
                <img
                className="d-block bg-img"
                src={BgImg}
                alt="Planet" 
                />
                <Col>
                    <div>
                        <p>Hellow Werld</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
