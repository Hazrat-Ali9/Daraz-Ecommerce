//Register
import axios from 'axios';
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:9000/register", {
        email,
        username,
        password,
      });
      console.log(response.data);
      setMessage("Registration successful");
    } catch (error) {
      console.error(error);
      setMessage("Registration failed");
    }
  };
  return (
    <div>
        <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <button onClick={handleRegister}>Register</button>
       <p>{message}</p>
    </div>
  );
};

export default Register;
