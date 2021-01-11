import React from 'react';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';

import carousel0 from '../images/intro0.png';
import carousel1 from '../images/intro1.jpg';
import carousel2 from '../images/intro2.jpg';
import carousel3 from '../images/intro3.jpg';
import carousel4 from '../images/intro4.jpg';
import carousel5 from '../images/intro5.jpg';
import carousel6 from '../images/intro6.jpg';
import carousel7 from '../images/intro7.jpg';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import product from '../images/product.jpg'
function Home() {

    return (

        <section className="home">
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel0}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel1}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel5}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel6}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel7}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            {/* Products */}

            <Product
                id="1"
                title="Amazon Basics"
                image={product}
                price="starts from $11.50"
                rating={5}
            />


        </section>

    )
}

export default Home
