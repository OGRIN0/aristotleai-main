import React from "react";
import './login.css'; 
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
     
        <h1>Login Here</h1>
        <div className="myform">
          <p className="para">Username</p>
          <input
            type="text"
            required=""
            className="uname"
            placeholder="Enter Username"
          />

          <p className="para">Password</p>
          <input
            type="password"
            required=""
            className="upswd"
            placeholder="Enter Password"
          />

          <input className="submit" type="submit" onClick={()=>{navigate('/home')}}value="Login" />
        </div>
      </div>
  
  );
}

export default Login;
