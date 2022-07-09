import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

const Products = ({cat}) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          cat
            ? `http://localhost:7000/products?categories=${cat}`
            : "http://localhost:7000/products"
        );
        setProducts(response.data);
      } catch (err) {}
    };
    getProduct();
  }, [cat]);

     
    return (
      <div className="flex justify-center flex-wrap">
        {products.map((item) => (
          <>
            <div className="flex justify-center flex-wrap">
              <div class="card card-compact w-96 bg-base-100 shadow-xl mx-3">
                <figure>
                  <img
                    src={item.img}
                    alt="Shoes"
                    className=" object-cover"
                    style={{ width: "auto", height: "200px" }}
                  />
                </figure>
                <div class="card-body">
                  <Link to={`/product/${item._id}`}>
                    <h2 class="card-title">{item.title}</h2>
                  </Link>

                  <p>{item.desc}</p>
                  {/* <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div> */}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    );
};

export default Products;