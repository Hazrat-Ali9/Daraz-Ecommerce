import React from 'react';
import { Link } from 'react-router-dom';

const AllDetails = ({product}) => {
    const {img,name,price,_id} = product
    return (
        <div>
          <Link to={`/details/${_id}`}>
          <div className=" w-full bg-base-100 mx-auto">
          <figure className="">
            <img
              src={img}
              alt="Shoes"
              className="h-60"
            />
          </figure>
          <div className="mx-2 text-start">
            <h2 className="card-title">{name}</h2>
            <p className="text-lg font-bold">$ {price}</p>
          </div>
        </div> 
          </Link>
           
        </div>
    );
};

export default AllDetails;