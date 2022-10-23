import React, { useContext, useEffect, useState } from "react";
import FormContext from "../../../Context/FormContext.js";
import CustomButton from "../Button/Button";
import { AiOutlineUserAdd } from "react-icons/ai";

import "./Form.css";

const Login = () => {
  const [form, setForm] = useContext(FormContext);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  })

  const display = { display: "flex", animationDuration: "0.4s" };
  const hide = { display: "none" };

  const handleChange = (event) => {
    setLoginInfo({...loginInfo, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginInfo)
  }

  useEffect(() => {
    document.getElementsByClassName("login-form")[0].style.animationDuration =
      "0s";
  }, []);

  return (
    <div className="login-form " style={form ? hide : display}>
      <div className="login">
        <div
          onClick={() => {
            setForm(1);
          }}
        >
          <AiOutlineUserAdd className="signup-icon" />
        </div>
        <h1>LOG IN</h1>
        <input 
        placeholder="Email" 
        name="email"
        value={loginInfo.email} 
        onChange={handleChange} />
        <input placeholder="Password"
        name="password"
        value={loginInfo.password} 
        onChange={handleChange} />
        <a className="forgot">
          <u>Forgot Password</u>
        </a>
        <div onClick={handleSubmit} className='btn'><CustomButton text={"LOG IN"} /></div>
      </div>
    </div>
  );
};

export default Login;
