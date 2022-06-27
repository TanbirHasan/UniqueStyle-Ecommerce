import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const {id} = useParams();
    return (
        <div>
            <h3>Product Id is : {id}</h3>
            
        </div>
    );
};

export default ProductDetails;