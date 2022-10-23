import React from 'react';
import SignUp from "./Components/Form/SignUp.js";
import Login from "./Components/Form/Login.js";
import Info from "./Components/Info/Info.js";
import FormProvider from "./Context/FormProvider";

const SignInForm = () => {
  return (
    <FormProvider>
    <div className="SignInForm">
      <Login />
      <div className="info-div">
        <Info text={"Have an  account ?"} value={0} />
        <Info text={"Do not have an account?"} value={1} />
      </div>
      <SignUp />
    </div>
  </FormProvider>
  )
}

export default SignInForm