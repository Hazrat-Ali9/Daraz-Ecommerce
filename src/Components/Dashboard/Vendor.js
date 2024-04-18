import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Vendor = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingProducts,setPendingProducts] = useState()

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:7000/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.status === 201) {
        const newProduct = await response.json();
        alert('Product submitted successfully and pending approval.');
        // Add the newly created product to the pending products list
        setPendingProducts([...pendingProducts, newProduct]);
        reset(); // Reset form fields
      } else {
        alert('Failed to submit product.');
      }
    } catch (error) {
      console.error('Error submitting product:', error);
      alert('An error occurred. Please try again later.');
    }
    setIsSubmitting(false);
  };
  return (
    <div>
      <div class="min-h-screen flex justify-center items-center">
        <div class="lg:w-2/5 md:w-1/2 w-2/3">
          <form onSubmit={handleSubmit(onSubmit)} class="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 class="text-center h-10 w-full bg-orange-600 text-lg text-white font-bold font-sans">
              প্রোডাক্ট আবেদন ফর্ম
            </h1>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="আপনার নাম"
              >
                আপনার নাম
              </label>
              <input
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="username"
                {...register("name")}
                placeholder="আপনার নাম লিখুন"
              />
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="আপনার নাম"
              >
                প্রোডাক্ট নাম
              </label>
              <input
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="username"
                id="username"
                placeholder="আপনার নাম লিখুন"
              />
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="আপনার নাম"
              >
                Description
              </label>
              <textarea
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
          id="description"
          {...register('description')}
          placeholder="বিবরণ"
        ></textarea>
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="Price"
              >
                Price
              </label>
              <input
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="Price"
                {...register('price')}
                placeholder="Price"
              />
            </div>
            <select 
            className="select w-full max-w-xs"
            {...register('category')}>
              <option disabled selected>
                প্রোডাক্ট ক্যাটাগরি সিলেক্ট করুন
              </option>
              <option>থ্রি-পিস</option>
              <option>Mobile Accessories</option>
              <option>চশমা</option>
              <option>ঘড়ি</option>
              <option>স্মার্ট ফোন</option>
              <option>টি-শার্ট</option>
              <option>জুতা</option>
              <option>শাড়ি</option>
              <option>শার্ট</option>
              <option>ল্যাপটপ</option>
              <option>পেন্ট</option>
              <option>ইলেকট্রনিক্স</option>
              <option>কিডস</option>
              <option>ডেস্কটপ</option>
              <option> কসমেটিক্স</option>
              <option>গিফট</option>
            </select>

            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="কয়েকটি প্রডাক্ট এর নাম "
              >
                প্রোডাক্ট সেম্পল ছবি ১
              </label>
              <input
                class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                id="default_size"
                type="file"
              />
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="কয়েকটি প্রডাক্ট এর নাম "
              >
                প্রোডাক্ট সেম্পল ছবি ২
              </label>
              <input
                class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                id="default_size"
                type="file"
              />
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="কয়েকটি প্রডাক্ট এর নাম "
              >
                প্রোডাক্ট সেম্পল ছবি 3
              </label>
              <input
                class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                id="default_size"
                type="file"
              />
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="কয়েকটি প্রডাক্ট এর নাম "
              >
                প্রোডাক্ট সেম্পল ছবি 4
              </label>
              <input
                class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                id="default_size"
                type="file"
              />
            </div>

            <button type="submit"
              class="w-full mt-6 bg-orange-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'আবেদন করুন'}
        </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
