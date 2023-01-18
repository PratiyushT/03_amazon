import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const banners = [
    { img: "https://links.papareact.com/gi1", id: "m1" },
    { img: "https://links.papareact.com/6ff", id: "m2" },
    { img: "https://links.papareact.com/7ma", id: "m3" },
];

export default function Banner() {

    return (
        <div className="relative">

            <div className="absolute bottom-0 z-20 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent "></div>

            <Carousel
                interval={2000}
                showArrows={false}
                showIndicators={false}
                statusFormatter={() => null}
                showThumbs={false}
                infiniteLoop
                autoPlay={true}
            >
                {banners.map(banner => (
                    <img key={banner.id} src={banner.img} loading="lazy" />
                ))}
            </Carousel>
        </div>
    );
}
