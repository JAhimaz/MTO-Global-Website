import React from "react";
import Carousel from 'react-bootstrap/Carousel'

import "../css/Home.css"

import FirstSlide from '../assets/first-image.png'
import SecondSlide from '../assets/second-image.png'
import ThirdSlide from '../assets/third-image.png'
import FourthSlide from '../assets/fourth-image.png'
import FifthSlide from '../assets/fifth-image.png'

export const Home = () => {
    return (
        <Carousel className="margin-carousel">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={FirstSlide}
                alt="First slide"
                />
                <Carousel.Caption className="text-wrapper">
                    <h3 className="text-bg"> Custom Design</h3>
                    <h1 className="text-bg"> Design for your business at every budget point</h1>
                    <h1 className="text-bg"> business at</h1>
                    <h1 className="text-bg"> every budget point</h1>

                    <h1 className="text-bg"> Learn More</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={SecondSlide}
                alt="Second slide"
                />

                <Carousel.Caption className="text-wrapper"> 
                    <h3 className="text-bg"> Custom Design</h3>
                    <h1 className="text-bg"> Design for your business at every budget point</h1>
                    <h1 className="text-bg"> business at</h1>
                    <h1 className="text-bg"> every budget point</h1>

                    <h1 className="text-bg"> Learn More</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ThirdSlide}
                alt="Third slide"
                />

                <Carousel.Caption className="text-wrapper"> 
                    <h3 className="text-bg"> Custom Design</h3>
                    <h1 className="text-bg"> Design for your business at every budget point</h1>
                    <h1 className="text-bg"> business at</h1>
                    <h1 className="text-bg"> every budget point</h1>

                    <h1 className="text-bg"> Learn More</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={FourthSlide}
                alt="Fourth slide"
                />

                <Carousel.Caption className="text-wrapper"> 
                    <h3 className="text-bg"> Custom Design</h3>
                    <h1 className="text-bg"> Design for your business at every budget point</h1>
                    <h1 className="text-bg"> business at</h1>
                    <h1 className="text-bg"> every budget point</h1>

                    <h1 className="text-bg"> Learn More</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={FifthSlide}
                alt="Fifth slide"
                />

                <Carousel.Caption className="text-wrapper"> 
                    <h3 className="text-bg"> Custom Design</h3>
                    <h1 className="text-bg"> Design for your business at every budget point</h1>
                    <h1 className="text-bg"> business at</h1>
                    <h1 className="text-bg"> every budget point</h1>

                    <h1 className="text-bg"> Learn More</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}