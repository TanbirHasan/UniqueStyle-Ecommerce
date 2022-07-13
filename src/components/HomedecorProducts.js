import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";

const PER_PAGE = 9;

const HomedecorProducts = () => {
      const [product, setProduct] = useState([]);
       const [productitem, setProductitem] = useState("homedecor");
       const [currentPage, setCurrentPage] = useState(0);

      useEffect(() => {
        fetch(`http://localhost:7000/products?categories=${productitem}`)
          .then((res) => res.json())
          .then((data) => setProduct(data));
      }, []);



       function handlePageClick({ selected: selectedPage }) {
         console.log("selected", selectedPage);
         setCurrentPage(selectedPage);
       }

       const offset = currentPage * PER_PAGE;
       console.log("Offset", offset);

       const currentPageData = product
         .slice(offset, offset + PER_PAGE)
         .map((res, index) => (
           <div className="flex justify-center flex-wrap">
             <div class="card card-compact w-96 bg-base-100 shadow-xl my-5 mx-5">
               <figure>
                 <img
                   src={res.img}
                   alt="Shoes"
                   className=" object-cover"
                   style={{ width: "auto", height: "200px" }}
                 />
               </figure>
               <div class="card-body">
                 <Link to={`/product/${res._id}`}>
                   <h2 class="card-title">{res.title}</h2>
                 </Link>

                 <p>{res.desc}</p>
                 {/* <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div> */}
               </div>
             </div>
           </div>
         ));

       const pageCount = Math.ceil(product.length / PER_PAGE);
    return (
      <div>
        <div className="flex justify-center flex-wrap mt-10">
          {currentPageData}
        </div>
        <div className='flex justify-center'>
          <ReactPaginate  
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel="..."
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disbled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
    );
};

export default HomedecorProducts;