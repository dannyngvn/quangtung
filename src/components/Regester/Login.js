import React, { useState } from "react";
import Register from "./Register";
import Login from "./LoginForm";
import "./Login.css";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("register");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="login-page">
      <div className={`tab ${activeTab === "register" ? "active" : ""}`} onClick={() => handleTabClick("register")}>
        REGISTER
      </div>
      <div className={`tab ${activeTab === "login" ? "active" : ""}`} onClick={() => handleTabClick("login")}>
        LOGIN
      </div>
      <div className="form-container">
        {activeTab === "register" ? <Register /> : <Login />}
      </div>
    </div>
  );
};

export default LoginPage;



