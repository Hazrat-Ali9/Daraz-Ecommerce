import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Role = () => {
  const [user] = useAuthState(auth);
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [category, setCategory] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const postProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/product', {
        name: productName,
        description: productDescription,
      });
      const { productId } = response.data;
      await axios.put(`http://localhost:7000/product/${productId}`, { category });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting product:', error);
    }
  };

  const onSubmit = (data, event) => {
    setSubmitting(true);
    const formData = {
      userName: data.userName,
      email: user?.email || "", // Use user's email if available
      role: data.role,
      status: "pending", // Set status to pending when submitting the application
    };
  
    const url = `http://localhost:7000/role`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSubmitting(false);
        navigate('/myRole');
      
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitting(false);
      });
  };
  return (
    <div>
       <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950 p-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm rounded-3xl bg-gradient-to-b from-sky-300 to-purple-500 p-px dark:from-gray-800 dark:to-transparent"
      >
        <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-gray-900">
          <h1 className="text-2xl font-bold">Apply For Role</h1>
          <div className="mt-8 space-y-8">
            <div className="space-y-6">
              <input
                className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                placeholder="Your Name"
                type="text"
                name="userName"
                {...register("userName", {})}
              />
              <input
                className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                placeholder="Your Email"
                type="email"
                name="email"
                defaultValue={user?.email || ""}
                readOnly
                {...register("email", {})}
              />
              <input
                className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                placeholder="Role"
                type="text"
                name="role"
                {...register("role", {})}
              />
            </div>
            <button
              className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Apply Now"}
            </button>
          </div>
        </div>
      </form>
    </div>
    <div>
    {!submitted ? (
        <form onSubmit={postProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <textarea
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Product submitted for admin approval.</p>
      )}
    </div>
    </div>
   
  );
};

export default Role;
