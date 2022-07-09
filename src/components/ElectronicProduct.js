import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ElectronicProduct = () => {
    const [product,setProduct] = useState([])
    const [productitem,setProductitem] = useState("electronics")

      const handleProduct = (item) => {
        setProductitem(item);
      };

    useEffect(() => {
        fetch(`http://localhost:7000/products?categories=${productitem}`)
          .then((res) => res.json())
          .then((data) => setProduct(data));  
    }, [product])



        // useEffect(() => {
        //   fetch(`http://localhost:8000/api/products?categories=${productitem}`)
        //     .then((res) => res.json())
        //     .then((data) => setProduct(data));
        // }, []);

        // console.log(product);


    return (
      <div className="flex">
        <div className="flex flex-col  my-5">
          <button
            className="btn btn-primary bg-orange-300 border-none text-black mx-2 rounded-none my-2"
            onClick={() => handleProduct("SmartPhones")}
          >
            Mobile
          </button>
          <button
            className="btn btn-primary bg-orange-300 border-none text-black  mx-2 rounded-none  my-2"
            onClick={() => handleProduct("tv")}
          >
            Tv
          </button>
          <button
            className="btn btn-primary bg-orange-300 border-none text-black  mx-2 rounded-none  my-2"
            onClick={() => handleProduct("refrigerator")}
          >
            Refrigerator
          </button>
        </div>

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
      </div>
    );
};

export default ElectronicProduct;