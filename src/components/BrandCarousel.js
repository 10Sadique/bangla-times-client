import React from 'react';

const BrandCarousel = () => {
    return (
        <div className="carousel carousel-center w-full bg-neutral rounded-xl">
            <div id="item1" className="carousel-item">
                <img
                    src="https://placeimg.com/250/180/arch"
                    className="rounded-lg"
                    alt=""
                />
            </div>
            <div id="item2" className="carousel-item">
                <img
                    src="https://placeimg.com/250/180/arch"
                    className="rounded-lg"
                    alt=";"
                />
            </div>
        </div>
    );
};

export default BrandCarousel;
