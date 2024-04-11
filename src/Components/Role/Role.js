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
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const postProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/product", {
        name: productName,
        description: productDescription,
      });
      const { productId } = response.data;
      await axios.put(`http://localhost:7000/product/${productId}`, {
        category,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting product:", error);
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
        navigate("/myRole");
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitting(false);
      });
  };
  return (
    <div>
      
      <div class="min-h-screen flex justify-center items-center">
        <div class="lg:w-2/5 md:w-1/2 w-2/3">
          <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 class="text-center h-10 w-full bg-orange-600 text-lg text-white font-bold font-sans">
              ভেন্ডর আবেদন ফর্ম
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
                id="username"
                placeholder="আপনার নাম লিখুন"
              />
            </div>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="আপনার নাম"
              >
                প্রতিষ্ঠান এর নাম
              </label>
              <input
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="username"
                id="username"
                placeholder="প্রতিষ্ঠান এর নাম লিখুন"
              />
            </div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                আপনার জেলা সিলেক্ট করুন
              </option>
              <option>গাজীপুর</option>
              <option>গোপালগঞ্জ</option>
              <option>টাঙ্গাইল</option>
              <option>ঢাকা</option>
              <option>নরসিংদী</option>
              <option>নারায়ণগঞ্জ</option>
              <option>ফরিদপুর</option>
              <option>মাদারিপুর</option>
              <option>মানিকগঞ্জ</option>
              <option>মুন্সিগঞ্জ</option>
              <option>রাজবাড়ী</option>
              <option>শরিয়তপুর</option>
              <option>কিশোরগঞ্জ</option>
              <option>কুমিল্লা</option>
              <option>ব্রাহ্মণবাড়িয়া</option>
              <option>চাঁদপুর</option>
              <option>লক্ষ্মীপুর</option>
              <option>নোয়াখালী</option>
              <option>ফেনী</option>
              <option>খাগড়াছড়ি</option>
              <option>রাঙ্গামাটি</option>
              <option>বান্দরবান</option>
              <option>চট্টগ্রাম</option>
              <option>কক্সবাজার</option>
              <option>চাঁপাইনবাবগঞ্জ</option>
              <option>জয়পুরহাট</option>
              <option>নওগাঁ</option>
              <option>নাটোর</option>
              <option>পাবনা</option>
              <option>বগুড়া</option>
              <option>রাজশাহী</option>
              <option>সিরাজগঞ্জ</option>
              <option>খুলনা</option>
              <option>চুয়াডাঙ্গা</option>
              <option>ঝিনাইদহ</option>
              <option>নড়াইল</option>
              <option>বাগেরহাট</option>
              <option>কুষ্টিয়া</option>
              <option>মাগুরা</option>
              <option>মেহেরপুর</option>
              <option>যশোর</option>
              <option>সাতক্ষীরা</option>
              <option>বরিশাল</option>
              <option>পটুয়াখালী</option>
              <option>ভোলা</option>
              <option>পিরোজপুর</option>
              <option>বরগুনা</option>
              <option>ঝালকাঠি</option>
              <option>সিলেট</option>
              <option>মৌলভীবাজার</option>
              <option>হবিগঞ্জ</option>
              <option>সুনামগঞ্জ</option>
              <option>কুড়িগ্রাম</option>
              <option>গাইবান্ধা</option>
              <option>ঠাকুরগাঁও</option>
              <option>দিনাজপুর</option>
              <option>নীলফামারী</option>
              <option>পঞ্চগড়</option>
              <option>রংপুর</option>
              <option>লালমনিরহাট</option>
              <option>ময়মনসিংহ</option>
              <option>জামালপুর</option>
              <option>নেত্রকোনা</option>
              <option>শেরপুর</option>
            </select>
            <div>
              <label
                class="text-gray-800 font-semibold block my-3 text-md"
                for="প্রতিষ্ঠান এর ঠিকানা"
              >
                প্রতিষ্ঠান এর ঠিকানা
              </label>
              <input
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="প্রতিষ্ঠান এর ঠিকানা"
              />
            </div>
            <select className="select w-full max-w-xs">
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
                কয়েকটি প্রডাক্ট এর নাম
              </label>
              <textarea
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                placeholder="উদাহরন প্রোডাক্ট ১, প্রোডাক্ট ২"
              ></textarea>
              <input />
            </div>
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
                আপনার ছবি
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
                আপনার এন আই ডি
              </label>
            <input
              class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              id="default_size"
              type="file"
            />
            </div>
            <div class="flex justify-start">
              <label class="block text-gray-500 font-bold my-4 flex items-center">
                <input
                  class="leading-loose text-pink-600 top-0"
                  type="checkbox"
                />
                <span class="ml-2 text-sm py-2 text-gray-600 text-left">
          
                  <a
                    href="#"
                    class="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"
                  >
                    আমি এতদ্বারা ঘোষনা করছি যে, উপরের সমস্থ তথ্য সঠিক এবং  
                  </a><span class="font-semibold text-orange-600 mx-2">সেল্ফ ভেন্ডরশিপ নীতিমালার</span>
                 <sapn className="text-black">সাথে একমত পোষন করলাম !!!</sapn>
                </span>
              </label>
            </div>
            <button
              type="submit"
              class="w-full mt-6 bg-orange-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              আবেদন করুন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Role;
