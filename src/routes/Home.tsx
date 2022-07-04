import React from "react";
import Carousel from 'react-bootstrap/Carousel'

import "../css/Home.css"

import Overlay from '../assets/gradient-layer.png'
import FirstSlide from '../assets/first-image.png'
import SecondSlide from '../assets/second-image.png'
import ThirdSlide from '../assets/third-image.png'
import FourthSlide from '../assets/fourth-image.png'
import FifthSlide from '../assets/fifth-image.png'
import { Container } from "react-bootstrap";

export const Home = () => {
    return (
        <Container fluid className="no-padding">
            <Carousel className="margin-carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img-overlay"
                    src={Overlay}
                    alt="Gradient layer"
                    />
                    <img
                    className="d-block w-100 slide-img"
                    src={FirstSlide}
                    alt="First slide"
                    />
                    <Carousel.Caption className="text-wrapper">
                        <p className="caption-title"> Custom Design</p>
                        <p className="caption-text"> Design for your</p>
                        <p className="caption-text"> business at</p>
                        <p className="caption-text"> every budget point</p>

                        <a href="#" className="btn caption-text" role="button"> Learn More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img-overlay"
                    src={Overlay}
                    alt="Gradient layer"
                    />
                    <img
                    className="d-block w-100 slide-img"
                    src={SecondSlide}
                    alt="Second slide"
                    />

                    <Carousel.Caption className="text-wrapper"> 
                        <p className="caption-title"> Custom Design</p>
                        <p className="caption-text"> Design for your</p>
                        <p className="caption-text"> business at</p>
                        <p className="caption-text"> every budget point</p>

                        <a href="#" className="btn caption-text" role="button"> Learn More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img-overlay"
                    src={Overlay}
                    alt="Gradient layer"
                    />
                    <img
                    className="d-block w-100 slide-img"
                    src={ThirdSlide}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="text-wrapper"> 
                        <p className="caption-title"> Custom Design</p>
                        <p className="caption-text"> Design for your</p>
                        <p className="caption-text"> business at</p>
                        <p className="caption-text"> every budget point</p>

                        <a href="#" className="btn caption-text" role="button"> Learn More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img-overlay"
                    src={Overlay}
                    alt="Gradient layer"
                    />
                    <img
                    className="d-block w-100 slide-img"
                    src={FourthSlide}
                    alt="Fourth slide"
                    />

                    <Carousel.Caption className="text-wrapper"> 
                        <p className="caption-title"> Custom Design</p>
                        <p className="caption-text"> Design for your</p>
                        <p className="caption-text"> business at</p>
                        <p className="caption-text"> every budget point</p>

                        <a href="#" className="btn caption-text" role="button"> Learn More</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-img-overlay"
                    src={Overlay}
                    alt="Gradient layer"
                    />
                    <img
                    className="d-block w-100 slide-img"
                    src={FifthSlide}
                    alt="Fifth slide"
                    />

                    <Carousel.Caption className="text-wrapper"> 
                        <p className="caption-title"> Custom Design</p>
                        <p className="caption-text"> Design for your</p>
                        <p className="caption-text"> business at</p>
                        <p className="caption-text"> every budget point</p>

                        <a href="#" className="btn caption-text" role="button"> Learn More</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}