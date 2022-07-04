import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const BannerPic = () => {
    return (
      <div>
        <Carousel autoPlay={true}>
          <div>
            <img src="https://i.ibb.co/Vt6qWhy/Exciting-Offer-1.png" />
          </div>
          <div>
            <img src="https://i.ibb.co/0DdxdtN/Exciting-Offer-2.png" />
          </div>
          <div>
            <img src="https://i.ibb.co/Vt6qWhy/Exciting-Offer-1.png" />
          </div>
        </Carousel>
      </div>
    );
};

export default BannerPic;