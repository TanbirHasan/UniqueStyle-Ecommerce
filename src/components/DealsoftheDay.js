import React, { useEffect, useState } from 'react';
import Countdown from "react-countdown";
import Carousel from "react-grid-carousel";
import { Link } from 'react-router-dom';



const DealsoftheDay = () => {
     const [product, setProduct] = useState([]);

     useEffect(() => {
       fetch("http://localhost:7000/dealsproducts")
         .then((res) => res.json())
         .then((data) => setProduct(data));
     }, []);

    return (
      <div className="px-10 py-10 my-5 bg-orange-300">
        <div className="flex justify-between lg:flex-row mb-10 sm:flex flex-col">
          <h2 className="text-2xl font-bold">Top Deals of the Day</h2>
          <div>
            <h3 className="text-2xl font-bold mb-5">
              Hurry Up! Offer ends in:
            </h3>
            <Countdown
              date={Date.now() + 10000000}
              className="bg-white px-5 py-5 mt-5"
            />
          </div>
        </div>

        <Carousel
          cols={3}
          rows={1}
          loop={true}
          autoplay={5000}
          className="mt-10"
        >
          {product.map((product) => (
            <Carousel.Item>
              <div class="card lg:w-96 bg-base-100 shadow-xl rounded-none sm:w-full">
                <img src={product.img} alt="product" />

                <div class="card-body deals-card ">
                  <Link to={`/dealsoftheday/${product._id}`}>
                    <h3 class="deals-title">{product.title}</h3>
                  </Link>
                  <div class="badge badge-secondary lg:w-2/4 sm:w-full">
                    Deals of the day
                  </div>
                  <p>{product.desc.slice(0, 150)}</p>
                  <div class="card-actions lg:justify-end sm:justify-start">
                    {product?.categories?.map((cat) => (
                      <>
                        <div class="badge badge-outline">{cat}</div>
                      </>
                    ))}
                  </div>
                  <h5 className=" font-bold">
                    Discounts : TK{product.discount}
                  </h5>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
};

export default DealsoftheDay;