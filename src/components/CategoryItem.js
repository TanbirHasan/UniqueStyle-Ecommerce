import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({item}) => {
    return (
      <div className="lg:my-20 h-2/4 sm:my-10 ">
        <Link to={`/categorylist/${item.cat}`}>
          
            <div class="card w-96 bg-base-100 shadow-xl  image-full mx-2">
              <figure>
                <img src={item.img} className="feature-image" alt="tshirt" />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-center">{item.name}</h2>

                <div class="card-actions justify-center align-center">
                  <button class="btn btn-primary rounded-none">Buy Now</button>
                </div>
              </div>
            </div>
          
        </Link>
      </div>
    );
};

export default CategoryItem;