import React from "react";
import {Row, Col} from "react-bootstrap";
import { Container } from "react-bootstrap";

import BgImg from '../assets/footer-bg.png';
import FB from '../assets/fb.png';
import LAZADA from '../assets/lazada.png';
import WS from '../assets/ws.png'
import YOUTUBE from '../assets/youtube.png'
import SHOPEE from '../assets/shopee.png'

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
                <Col sm={12} lg={6} className="address-margin d-flex justify-content-center">
                    <div className="address">
                        <p className="address-text">MTO GLOBAL (1234567890)</p>
                        <p className="address-text">Persiaran Ara Kiri, Bangsar, 59100 Kuala Lumpur, Malaysia</p>                        
                        <br></br>
                        <p className="address-text">Mondays to Saturdays 11.00am - 7.00pm</p>
                        <p className="address-text">info@mtoglobal.my + 6 03-2859 2109</p>                        
                    </div>
                </Col>
                <Col sm={12} lg={6}>
                    <div className="icon">
                        <a href="#"><img src={SHOPEE} alt="shopee"/></a>
                        <a href="#"><img src={LAZADA} alt="lazada" className="icon-img"/></a>
                        <a href="#"><img src={FB} alt="Facebook" className="icon-img"/></a>
                        <a href="#"><img src={YOUTUBE} alt="Youtube" className="icon-img"/></a>
                        <a href="#"><img src={WS} alt="Whatsapp " className="icon-img"/></a> 
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
