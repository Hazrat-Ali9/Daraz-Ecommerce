import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const { name } = useParams();
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`http://localhost:7000/category?name=${name}`);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, [name])
    return (
        <div>
      <h2>Products in Category: {name}</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.img} alt={product.name} />
            <p>{product.productName}</p>
            <p>{product.details}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default Category;