import React, { useState } from "react";
import './Addmem.css';
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const AddTh = () => {



  const [errors, setErrors] = useState({});
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [classname, setClassname] = useState('')
 
  const navigate = useNavigate();

  const validateName = (name) => {
    const regex = /\d/;
    if (regex.test(name)) return "Name must not contain numbers.";
    return null;
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    return null;
  };
  
  const validatePassword = (password) => {
    if (password.length < 8) return "Password must be at least 8 characters long.";
    return null;
  };
  
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setErrors({ ...errors, name: validateName(newName) });
  };
  
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setErrors({ ...errors, email: validateEmail(newEmail) });
  };
  
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setErrors({ ...errors, password: validatePassword(newPassword) });
  };
  

  const handleSubmit = (event)=>{
    event.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
  
    if (nameError || emailError || passwordError) {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError
      });
      return; // Stop the submission since there are errors
    }
    
    axios.post('https://sunday-library.onrender.com/admin/teachers',
    { 
      id: id,
      name: name, 
     email: email,
     classname: classname,
     password: password
    })
    .then(res => {
      
      navigate("/teachers"); 
  })
  .catch(er => alert(er.response.data.msg));
}


    return ( 
        <div>
             <div>

  
<div id="main">
<h2 style={{marginTop:'20px',marginLeft:'450px'}}>ADD NEW TEACHER</h2>
<div id="add-book-form" className="add-book-container" style={{
        backgroundColor:'#E0E4EE'
      }} >
  <form className="add-book-form" onSubmit={handleSubmit}>


  <div className="form-group">
      <label htmlFor="id" >Id:</label>
      <input
        type="text"
        id="id"
        required
        placeholder="Enter the Id"
        onChange={e =>setId(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label htmlFor="name" >Name:</label>
      <input
        type="text"
        id="name"
        required
        placeholder="Enter the name"
        onChange={handleNameChange}
      />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
    </div>
    <div className="form-group">
      <label htmlFor="email" >Email:</label>
      <input
        type="email"
        id="email"
        required
        placeholder="Enter email address"
        onChange={handleEmailChange} 
      />
       {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
    </div>
    
    <div className="form-group">
      <label htmlFor="class" className="form-label">Class:</label>
      <input
        type="text"
        id="class"
        required
        placeholder="Enter Class"
        onChange={e =>setClassname(e.target.value)}
      />
      
    </div>
    <div className="form-group">
      <label htmlFor="pass" >Password:</label>
      <input
        type="text"
        id="pass"
        required
        placeholder="Enter the Password"
        onChange={handlePasswordChange}
      />
       {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
    </div>
    <button type="submit" className="submit-btn">
    Add
    </button>
  </form>

</div>
</div>
</div>
        </div>
     );
}
 
export default AddTh;
