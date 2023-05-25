import React from "react";
import Login from "./LoginForm";
import Register from "./Register";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="register-form">
        <Register />
      </div>
      <div className="login-form">
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;

