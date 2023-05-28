import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './Login.css';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <div className="login-page">
      {/* <div
        className={`tab ${activeTab === "login" ? "active" : ""}`}
        onClick={() => handleTabClick("login")}
      >
        LOGIN
      </div> */}
      <div className="form-container">
        {activeTab === 'login' && <LoginForm />}
      </div>
    </div>
  );
};

export default LoginPage;
