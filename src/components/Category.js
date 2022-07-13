import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';

const Category = () => {
    const [items,setItems] = useState([])
    const [product , setProduct] = useState([])

    useEffect(() =>{
        fetch("Categorydata.json")
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

 

    console.log(items)
    return (
      <div className="flex justify-center align-center lg:flex-row sm:flex flex-col">
        {items.map((items) => (
          <CategoryItem key={items.key} item={items}  />
        ))}
      </div>
    );
};

export default Category;