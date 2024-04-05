import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
          const response = await axios.post("http://localhost:9000/login", {
            username,
            password,
          });
          const { success, message, role } = response.data;
          if (success) {
            setMessage(message);
            if (role === 'admin') {
              navigate('/admin');
            } else if (role === 'vendor') {
              navigate('/vendor');
            } else {
              navigate('/user');
            }
          } else {
            setMessage(message);
          }
        } catch (error) {
          console.error(error);
          setMessage("Login failed");
        }
      };
  return (
    <div>
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
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
