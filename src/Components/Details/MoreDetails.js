import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MoreDetails = ({ userId }) => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:7000/product/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return (
    <div>
      <div class="mx-5">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <img
                  className="object-cover w-72 h-72 mx-auto"
                  src={service.img}
                  alt=""
                />
                <div className="grid grid-cols-4 md:grid-cols-4 gap-5 mt-10">
                  <img
                    className="object-cover h-28 w-32"
                    src={service.img}
                    alt=""
                  />
                  <img
                    className="object-cover h-28 w-32"
                    src={service.img}
                    alt=""
                  />
                  <img
                    className="object-cover h-28 w-32"
                    src={service.img}
                    alt=""
                  />
                  <img
                    className="object-cover h-28 w-32"
                    src={service.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <div className="flex">
                  <button
                    type="button"
                    class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-orange-600 rounded-md border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-orange-600 dark:text-white dark:hover:text-white dark:hover:bg-orange-600"
                  >
                    Alternative
                  </button>
                  <button
                    type="button"
                    class="text-white w-full bg-orange-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-gray-600 dark:bg-orange-600 dark:text-white dark:hover:bg-orange-800 me-2 mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-bag w-6 h-6 me-2 -ms-1"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />{" "}
                    </svg>
                    Connect with Opera Wallet
                  </button>
                </div>
                <div>
                  <h1 className="text-2xl text-start font-bold">Men's shoe</h1>
                  <p className="text-md text-start font-normal">
                    প্রোডাক্ট কোড :G1YL9WN4
                  </p>
                  <div className="flex justify-between px-5">
                    <h1 className="text-2xl font-normal text-orange-600">
                      150 টাকা
                    </h1>
                    <p className="text-md font-normal text-orange-600">
                      120 টাকা
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-5 bg-gray-100 py-3">
                  <div className="mt-2">
                    <h1 className="text-orange-600 text-lg">ডেলিভারি সময়</h1>
                    <h1>3 দিন</h1>
                  </div>
                  <div className="mt-2">
                    <h1 className="text-orange-600 text-lg">ডেলিভারি চার্জ</h1>
                    <p className="text-sm">Chattogram 100 টাকা</p>
                    <p className="text-sm">Chattogram এর বাইরে 130 টাকা</p>
                  </div>
                  <div className="mt-2">
                    <h1 className="text-orange-600 text-lg">Review Dhekhun</h1>

                    <div class="flex items-center">
                      <svg
                        class="w-4 h-4 text-gray-500 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-gray-500 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-gray-500 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-gray-500 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-5">
                    <h1 className="text-2xl font-normal text-black">
                    মজুদ আছে
                    </h1>
                    <p className="text-md font-normal text-orange-600">
                    25 টি
                    </p>
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-5 bg-gray-100 py-3">
                  <div className="mt-2">
                    <h1 className="text-orange-600 text-lg">ai Product Somporkkea</h1>
                    <h1>Admin report korun</h1>
                  </div>
                  <div className="mt-2">
                    <h1 className="text-orange-600 text-lg">Refund Policy</h1>
                    <p className="text-sm">Dhekhun</p>
                  </div>
                  <div className="mt-2">
                    <h1 className="text-orange-600 text-lg">গ্যারেন্টি / ওয়ারেন্টি</h1>
                    <p>Not Available</p>
                  </div>
                </div>
                <div className="flex justify-between px-5">
                  <Link to = {`/order/${id}`}><button type="button" class="py-2.5 w-full me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-orange-600 rounded-md border hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:bg-orange-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">Buy Now</button></Link>
                
                <button type="button" class="py-2.5 w-full me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-sky-300 rounded-md border hover:bg-gray-100 hover:text-blue-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:bg-blue-500 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
          <h1 className="text-xl">প্রোডাক্টের বিবরণ</h1>
          <p>{service.details}</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
