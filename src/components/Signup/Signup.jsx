import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("nitik");
  const [email, setEmail] = useState("nitik@nitik.com");
  const [password, setPassword] = useState("nitik");
  const fetchLogin = () => {
    console.log(email, password);
    if (name && email && password) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/user/signup`, {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then(() => {
          navigate("/user/login");
        });
    }
  };
  return (
    <div style={{ maxWidth: "500px", margin: "30px auto" }}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Email
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="form-control rounded-0"
          id="description"
          rows="5"
        />
      </div>
      <button className="btn btn-primary" onClick={fetchLogin}>
        Submit
      </button>
    </div>
  );
};

export default Signup;
