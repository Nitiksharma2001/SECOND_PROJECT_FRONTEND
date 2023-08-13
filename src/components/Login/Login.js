import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../context"

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate()
  const [email, setEmail] = useState("nitik@nitik.com");
  const [password, setPassword] = useState("nitik");
  const fetchLogin = () => {
    if (email && password) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/user/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data)
          localStorage.setItem("user", JSON.stringify(data))
          navigate('/')
        });
    }
  };
  return (
    <div style={{maxWidth:"500px", margin: "30px auto"} }>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Email</label>
          <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} className="form-control" id="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Password</label>
          <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} className="form-control rounded-0" id="description" rows="5"/>
        </div>
        <button className="btn btn-primary" onClick={fetchLogin}>Submit</button>
	  </div>
  );
};

export default Login;
