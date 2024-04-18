import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const MyRole = () => {
  const [user] = useAuthState(auth);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      if (user && user.email) {
        try {
          const response = await fetch(
            `http://localhost:7000/user/${user.email}`
          );
          if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data)) {
              setRoles(data);
            } else {
              console.error("Data received is not an array:", data);
            }
          } else {
            console.error("Failed to fetch roles:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching roles:", error);
        }
      }
    };
  
    fetchRoles();
  }, [user]);
  
  console.log(user?.email);
  const email = user?.email;
  const userRoles = roles.filter((role) => role.email === email);
  
  return (
    <div>
      <h1>My Roles: {userRoles.length}</h1>
      <ul>
        {userRoles.map((role, index) => (
          <li key={index}>
            Role: {role.role}, Status: {role.status}
          </li>
        ))}
      </ul>
      <Link to="/vendor"><button className="btn btn-outline btn-secondary">Apply For Product</button></Link>
    </div>
  );
};

export default MyRole;
