import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({onAddUser}) => {
  // state for controlled input fields
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
    };
    console.log(user);
    // notify()
    // make post request
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    } )
        .then(res => res.json())
        .then( (res) => onAddUser(res))
        setUserName("") && setEmail("" ) && setPassword ("")
    
  };

  return (
    <div class="login-form">
      <form onSubmit={handleSubmit}>
        <h2 class="title">create account</h2>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Name</span>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div class="input-box">
            <span class="details">Password</span>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="button">SignUp</button>
        </div>
      </form>
      <div className="go-home">
        <a href="/">
          <button className="home-btn">back</button>
        </a>
      </div>
    </div>
  );
};

export default Login;