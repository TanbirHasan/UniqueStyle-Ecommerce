import React, { useEffect, useState } from 'react';
import Countdown from "react-countdown";
import Carousel from "react-grid-carousel";



const DealsoftheDay = () => {
     const [product, setProduct] = useState([]);

     useEffect(() => {
       fetch("http://localhost:7000/dealsproducts")
         .then((res) => res.json())
         .then((data) => setProduct(data));
     }, []);

    return (
      <div className="px-10 py-10 my-5 bg-[#FA8072]">
        <div className="flex justify-between mb-10">
          <h2 className="text-2xl font-bold">Top Deals of the Day</h2>
          <div>
            <h3 className="text-2xl font-bold mb-5">
              Hurry Up! Offer ends in:
            </h3>
            <Countdown
              date={Date.now() + 10000000}
              className="bg-orange-300 px-5 py-5 mt-5"
            />
          </div>
        </div>
       
          <Carousel cols={3} rows={1}  loop={true} autoplay={5000} className="mt-10">
            {product.map((product) => (
              <Carousel.Item>
                <div class="card w-96 bg-base-100 shadow-xl rounded-none">
               
                    <img src={product.img} alt="product" />
               
                  <div class="card-body">
                    <h2 class="card-title">
                    {product.title}
                      <div class="badge badge-secondary w-2/4">Deals of the day</div>
                    </h2>
                    <p>{product.desc.slice(0,150)}</p>
                    <div class="card-actions justify-end">
                      <div class="badge badge-outline">Fashion</div>
                      <div class="badge badge-outline">Products</div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
      
      </div>
    );
};

export default DealsoftheDay;