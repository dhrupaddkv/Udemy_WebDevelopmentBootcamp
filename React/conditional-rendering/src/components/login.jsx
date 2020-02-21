import React from "react";
import CustomInput from "./input";
function Login() {
  return (
    <form className="form">
      <CustomInput type="text" placeholder="UserName" />
      <CustomInput type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
