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

import product from '../images/product.jpg'
import product1 from '../images/product1.jpg'
import product2 from '../images/product2.jpg'
import product3 from '../images/product3.jpg'
import product4 from '../images/product4.jpg'
import product5 from '../images/product5.jpg'
import product6 from '../images/product6.jpg'
import product7 from '../images/product7.jpg'
function Home() {

    return (

        <section className="home">
            <Carousel className="carousel">
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel0}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel1}
                        alt=" "
                    />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel2}
                        alt=" "
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel3}
                        alt=" "
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel4}
                        alt=" "
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel5}
                        alt=" "
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel6}
                        alt=" "
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="home__image d-block w-100"
                        src={carousel7}
                        alt=" "
                    />
                </Carousel.Item>
            </Carousel>

            {/* Products */}

            <div className="home__row">
                <Product
                    id="1"
                    title="Amazon Basics"
                    image={product}
                    price="$12.50"
                    rating={5}
                />
                <Product
                    id="1"
                    title="Shop by Catagory"
                    image={product1}
                    price="starts from $20.50"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1"
                    title="Amazon Basics"
                    image={product2}
                    price="$12.50"
                    rating={5}
                />
                <Product
                    id="1"
                    title="Amazon Basics"
                    image={product3}
                    price="$12.50"
                    rating={5}
                />
                <Product
                    id="1"
                    title="Amazon Basics"
                    image={product4}
                    price="$12.50"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1"
                    title="Amazon Basics"
                    image={product6}
                    price="$12.50"
                    rating={5}
                />
                <Product
                    id="1"
                    title="Amazon Basics"
                    image={product5}
                    price="$12.50"
                    rating={5}
                />
                <Product
                    id="1"
                    title="Amazon Basics"
                    image={product7}
                    price="$12.50"
                    rating={5}
                />
            </div>


        </section>

    )
}

export default Home
