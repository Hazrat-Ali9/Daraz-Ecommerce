import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderDetails from "./OrderDetails";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    if (user && user.email) {
      // Check if user object and its email property are not null
      fetch(`http://localhost:7000/order/user/${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);

  console.log(user?.email); // Use optional chaining to avoid errors if user is null or undefined
  const email = user?.email; // Use optional chaining to avoid errors if user is null or undefined
  const rest = orders.filter((order) => order.email === email);
  return (
    <div>
            <h1>My Orders {rest.length}</h1>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>


                            <th scope="col" class="px-6 py-3">
                                email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Pay Now
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cancel Order
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderDetails
                                key={order._id}
                                order={order}
                            ></OrderDetails>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
  );
};

export default MyOrder;
