import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './Login.css';
 import axios from 'axios';

const Login = () => {
 
  const [passworId, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  // const [isLoading, setIsLoading] = useState(true); 
   const navigate = useNavigate(); 

const handleForgotPassword = async (e) =>{
  try{
    const response = await axios.post('https://sunday-library.onrender.com/forgotpassword', {
      id:'admin'
    });
    
    
    if (response.status) {
      alert('Please check your email to reset your password.');
    } 
  } catch (error) {
    setErrorMessage('An error occurred. Please try again later.');
    console.error('Forgot Password Error:', error);
  }
};
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    setErrorMessage('');

    try {
  
      const response = await axios.post('https://sunday-library.onrender.com/admin/login', {
        password:passworId

    });
        
    const { data } = response;
  
    console.log(data)
      if (data.status) {
       
        navigate('/home'); 
        // setIsLoading(false);
       
      } else {
       
        setErrorMessage(data.error || 'Login failed. Please try again.');
        console.log(data)
      }

    } catch (error) {
     
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  // if (isLoading) {
  //   return (
  //     <div className="loading-container">
  //       <div className="loader"></div>  
  //     </div>
  //   );
  // }
  return (
    <div className="login-container">
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
        <h4 htmlFor="adminlogin" className="login-label">
           ADMIN LOGIN
          </h4>
          <br />
          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={passworId}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <br />
          
          <br />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-button">
      Login
  
          </button>
          <p className="forgot-password" onClick={handleForgotPassword}>
    Forgot Password?
  </p>
        </form>
      </div>
    </div>
  );
};

export default Login;