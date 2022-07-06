import React from 'react';
import {Link} from 'react-router-dom'

const SecondHeader = () => {
    return (
      <div className="my-10 border-b-4">
        <h2 className="text-2xl bold text-center my-10">
          Explore Our Products
        </h2>
        <div className="flex justify-evenly">
          <div className="flex flex-col justify-center items-center">
            <Link to="/electronicproducts">
              <img
                src="https://i.ibb.co/jMLrFWh/headerelectronicsimage.jpg"
                alt="electronics"
                style={{ height: "100px", width: "150px" }}
              />
            </Link>

            <h3>Electronics</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link to="/fashionproducts">
              <img
                src="https://i.ibb.co/Fqdvf0Z/headerfahionimage.png"
                alt="fashion"
                style={{ height: "100px", width: "150px" }}
              />
            </Link>

            <h3>Fashion</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link to="/homedecorproducts">
              <img
                src="https://i.ibb.co/nPY2L8h/homedecor.jpg"
                alt="home"
                style={{ height: "100px", width: "150px" }}
              />
            </Link>

            <h3>Home-Decor</h3>
          </div>
        </div>
      </div>
    );
};

export default SecondHeader;