
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css';
import Slide1 from '../assets/carousel/img/Slide1.jpeg'
import Slide2 from '../assets/carousel/img/Slide2.jpeg'


const Home = () => {
    return (
        <div id="home-page">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img
                        className=" w-100 h-100 custom img"
                        src={Slide1}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 custom img"
                        src={Slide2}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default Home;