import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import './Register.css';

const RegisterPage = () => {
  const [activeTab, setActiveTab] = useState('register');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <div className="register-page">
      {/* <div
        className={`tab ${activeTab === "register" ? "active" : ""}`}
        onClick={() => handleTabClick("register")}
      >
        REGISTER
      </div> */}

      <div className="form-container">
        {activeTab === 'register' && <RegisterForm />}
      </div>
    </div>
  );
};

export default RegisterPage;
