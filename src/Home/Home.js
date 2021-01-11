import React from 'react';
import carousel0 from '../images/intro0.png';
import carousel1 from '../images/intro1.jpg';
import carousel2 from '../images/intro2.jpg';
import carousel3 from '../images/intro3.jpg';
import carousel4 from '../images/intro4.jpg';
import carousel5 from '../images/intro5.jpg';
import carousel6 from '../images/intro6.jpg';
import carousel7 from '../images/intro7.jpg';
function Home() {

    const carousel = [
        {
            img: carousel0
        },
        {
            img: carousel1
        },
        {
            img: carousel2
        },
        {
            img: carousel3
        },
        {
            img: carousel4
        },
        {
            img: carousel5
        },
        {
            img: carousel6
        },
        {
            img: carousel7
        }

    ]

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
