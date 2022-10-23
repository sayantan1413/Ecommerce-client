import React, { useContext, useState } from "react";
import FormContext from "../../../Context/FormContext.js";
import CustomButton from "../Button/Button";
import {IoChevronBack} from "react-icons/io5"

import "./Form.css";

const SignUp = () => {
  const [signupInfo, setSignupinfo] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setSignupinfo({...signupInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    console.log(signupInfo)
  }
  
  const [form, setForm] = useContext(FormContext);
  const display = { display: "flex" };
  const hide = { display: "none" };
  
  return (
    <div className="signup-form" style={form ? display : hide}>
      <div className="signup">
      <div onClick={()=>{setForm(0)}}><IoChevronBack className="login-icon"/></div>
        <h1>SIGN UP</h1>
        <input 
        placeholder="Full Name"
        name="name"
        value={signupInfo.name} 
        onChange={handleChange} />
        <input 
        placeholder="Email" 
        name="email"
        value={signupInfo.email} 
        onChange={handleChange} />
        <input 
        placeholder="Password" 
        name="password"
        value={signupInfo.password} 
        onChange={handleChange} />
       <div onClick={handleSubmit}><CustomButton text={"SIGN UP"} /></div> 
      </div>
    </div>
  );
};

export default SignUp;
