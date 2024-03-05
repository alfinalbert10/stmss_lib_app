import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="adminlogin" className="login-label">
           ADMIN LOGIN
          </label>
           <label htmlFor="username" className="login-label">
            Username:
          </label> 
           <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          /> 
          <br />
          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <br />
          <button type="submit" className="login-button"><NavLink className="nav-link" to="/home">
      Login
    </NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;