import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/carousel.css';

export function MyCarousel() {
    return (
        <Carousel className="my-carousel" interval={5000}>
            <Carousel.Item className="my-carousel">
                <img
                    className="d-block w-100 my-carousel-img"
                    src="https://cf.ppt-online.org/files/slide/x/xbIYecFduiHMJ8ftTnkGoAj39Z7r20PCLNwW1s/slide-7.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className="my-carousel">
                <img
                    className="d-block w-100 my-carousel-img"
                    src="https://habr.com/share/publication/307220/4ab935f5b389ab6d950997229c5e5532/"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className="my-carousel">
                <img
                    className="d-block w-100 my-carousel-img"
                    src="https://opengraph.githubassets.com/5de36b352500f4d2f3c5c13b1a33916efae38576e4bb47b038a60f2005117c85/sergmsk/Knuth-Morris-Pratt-algorithm"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}