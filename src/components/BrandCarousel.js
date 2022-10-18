import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Brand1 from '../assets/Brands/Brand1.png';
import Brand2 from '../assets/Brands/Brand2.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BrandCarousel = () => {
    return (
        <div className="rounded-lg">
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                interval={4000}
                autoPlay={true}
            >
                <img
                    className="object-cover w-full h-full rounded-lg"
                    src={Brand1}
                    alt=""
                />
                <img
                    className="object-cover w-full h-full rounded-lg"
                    src={Brand2}
                    alt=""
                />
            </Carousel>
        </div>
    );
};

export default BrandCarousel;
