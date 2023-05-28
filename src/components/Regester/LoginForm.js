import React, { useRef, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './LoginForm.css';

const Login = () => {
  const userRef = useRef();
  const pwdRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('id');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    try {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = existingUsers.find(u => u.id === user);

      if (existingUser && existingUser.password === pwd) {
        setErrMsg('');
        setSuccess(true);
        saveLoginState(user);
        setTimeout(
          () => {
            alert(
              'Chúc mừng bạn đã đăng nhập thành công, hãy tiếp tục mua sắm và tận hưởng'
            );
          },
          0,
          2
        );
        navigate('/products'); // Chuyển hướng đến trang "/products" sau khi đăng nhập thành công
        setTimeout(() => {
          window.location.reload(); // Reload lại trang sau khi chuyển hướng
        }, 0.2);
      } else {
        setErrMsg('Invalid username or password');
      }

      setUser('');
      setPwd('');
    } catch (err) {
      setErrMsg('Login Failed');
    }
  };

  const saveLoginState = username => {
    localStorage.setItem('id', username);
  };

  return (
    <>
      <div className="login-form-container">
        {success ? (
          <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
              <a href="#">Go to Home</a>
            </p>
          </section>
        ) : (
          <section>
            <p
              className={errMsg ? 'errmsg' : 'offscreen'}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={e => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                ref={pwdRef}
                onChange={e => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button>Sign In</button>
            </form>
            <p>
              Need an Account?
              <br />
              <span className="line">
                <NavLink to="/dang-ky">Sign Up</NavLink>
              </span>
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default Login;
