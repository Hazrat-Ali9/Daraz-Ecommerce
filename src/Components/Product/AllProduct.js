import React, { useEffect, useState } from 'react';
import useProduct from '../../Hook/useProduct';
import AllDetails from '../Home/Details/AllDetails';

const AllProduct = () => {
    const [products,setProducts] = useState()
    useEffect(()=>{
        fetch('http://localhost:7000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-14 px-5">
            {products && products
          .map((product) => (
            <AllDetails key={product._id} product={product} />
          ))}
            </div>
            
        </div>
    );
};

export default AllProduct;