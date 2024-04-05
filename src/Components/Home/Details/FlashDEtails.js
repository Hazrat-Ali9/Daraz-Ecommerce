import React from 'react';

const FlashDEtails = ({product}) => {
    const {img,name,price} = product
    return (
        <div>
            <div className=" w-full bg-base-100 mx-auto mt-5">
            <figure className="">
              <img
                src={img}
                alt="Shoes"
                className="h-40"
              />
            </figure>
            <div className="mx-2 text-start">
              <h2 className="card-title">{name}</h2>
              <div className="flex justify-between">
                <p className="text-md font-semibold">$ {price}</p>
                <p className="text-md font-semibold">$ 230</p>
              </div>
              <div className="mt-2">
                <dl>
                  <dd class="flex items-center mb-3">
                    <div class="w-full bg-yellow-400 rounded h-2.5 dark:bg-yellow-400 me-2">
                      <div class="bg-yellow-400"></div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
    );
};

export default FlashDEtails;