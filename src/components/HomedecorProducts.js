import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomedecorProducts = () => {
      const [product, setProduct] = useState([]);
       const [productitem, setProductitem] = useState("homedecor");

      useEffect(() => {
        fetch(`http://localhost:7000/products?categories=${productitem}`)
          .then((res) => res.json())
          .then((data) => setProduct(data));
      }, []);
    return (
      <div className="flex justify-center flex-wrap">
        {product.map((item) => (
          <>
            <div className="flex justify-center flex-wrap my-6">
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

export default HomedecorProducts;