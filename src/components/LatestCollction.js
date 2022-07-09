import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

const LatestCollction = () => {

    const [product,setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7000/allproducts")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
      <div>
        <h2 className="text-3xl bold text-center mb-10">
          Our Latest Collection
        </h2>
        <div className="flex justify-center flex-wrap">
          {product.slice(0, 6).map((item) => (
            <>
              <div className="flex justify-center flex-wrap">
                <div class="card card-compact w-96 bg-base-100 shadow-xl mx-3 my-5">
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

                    <p>{item.desc.slice(0, 150)}...</p>
                    {/* <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div> */}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
};

export default LatestCollction;