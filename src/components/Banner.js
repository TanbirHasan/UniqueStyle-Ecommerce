import React from 'react';

const Banner = () => {
    return (
      <div className="flex justify-center h-screen lg:flex-row sm:flex flex-col">
        <div className="lg:w-2/4 lg:px-20 py-20 my-10 sm:w-full px-10 mt-10 py-10">
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
        <div className="lg:w-2/4 sm:w-full">
          <img
            src="https://i.ibb.co/6bSxdCP/pexels-jack-winbow-1457983.jpg"
            className="w-full h-full object-cover "
            alt="style"
          />
        </div>
      </div>
    );
};

export default Banner;