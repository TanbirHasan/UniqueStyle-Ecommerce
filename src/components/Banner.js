import React from 'react';

const Banner = () => {
    return (
      <div className="flex justify-center">
        <div className="w-2/4 px-20 py-20 my-10">
          <h2 className="text-4xl font-bold py-3">
            Make Your
            <br />
          </h2>
          <h2 className="text-4xl font-bold">Stylish Look</h2>
          <p className="text-xl py-3">
            Uniqe Style bring you some unique desing cloth. Every Item is choose
            by perfection.Which will make a Fashion Pro
          </p>
          <button className="btn btn-succes">Shop Now</button>
        </div>
        <div className="w-2/4">
          <img
            src="https://i.ibb.co/6bSxdCP/pexels-jack-winbow-1457983.jpg"
            className="w-full h-3/4 object-cover "
            alt="style"
          />
        </div>
      </div>
    );
};

export default Banner;