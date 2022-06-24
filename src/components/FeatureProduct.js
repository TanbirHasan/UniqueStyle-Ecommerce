import React from 'react';

const FeatureProduct = () => {
    return (
      <div className='mt-20'>
        <h2 className="text-3xl font-bold text-center mb-10">
          Feature Product
        </h2>
        <div className="flex  justify-center align-center">
          <div class="card w-96 bg-base-100 shadow-xl h-2/4  image-full mx-2">
            <figure>
              <img
                src="https://i.ibb.co/9ypxY0c/s-ts-612-moonvelly-original-imagdhwwapdfta59.webp"
                className="feature-image"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-center">T-Shirt</h2>

              <div class="card-actions justify-center align-center">
                <button class="btn btn-primary rounded-none">Buy Now</button>
              </div>
            </div>
          </div>

          <div class="card w-96 bg-base-100 shadow-xl  h-2/4  image-full mx-2">
            <figure>
              <img
                src="https://i.ibb.co/qD87hB0/Shoes.webp"
                className="feature-image"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes</h2>

              <div class="card-actions justify-center">
                <button class="btn btn-primary rounded-none">Buy Now</button>
              </div>
            </div>
          </div>

          <div class="card w-96 bg-base-100 shadow-xl  h-2/4  image-full mx-2">
            <figure>
              <img
                src="https://i.ibb.co/qjXhvPN/Womens-top.webp"
                className="feature-image"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Women Tops</h2>

              <div class="card-actions justify-center">
                <button class="btn btn-primary rounded-none">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary rounded-none my-10 ">
            See All Products
          </button>
        </div>
      </div>
    );
};

export default FeatureProduct;