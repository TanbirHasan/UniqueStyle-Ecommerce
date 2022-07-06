import React from 'react';
import { useLocation } from 'react-router-dom';
import Products from './Products';

const Categorylist = () => {
     const location = useLocation();
     const cat = location.pathname.split("/")[2];
     console.log(cat)
    return (
        <div className='my-10'>

         
            <Products cat={cat}/>
            
        </div>
    );
};

export default Categorylist;