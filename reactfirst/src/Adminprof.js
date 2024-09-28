import React, { useEffect, useState } from "react";
import './adminprof.css';

const AdminPro = () => {

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        role: '',
        roleId: '',
        email: '',
      });
    
      useEffect(() => {
        const storedProfile = localStorage.getItem('adminProfile');
        if (storedProfile) {
          setProfile(JSON.parse(storedProfile));
        }
      }, []);
     
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
          ...prevProfile,
          [name]: value,
        }));
      };

      const handleSave = () => {
        localStorage.setItem('adminProfile', JSON.stringify(profile));
        alert('Profile saved!');
      };

    return ( 
        <div >
           <div className="profile-container">
      <div className="profile-photo">
        
        <img src="http://www.tcvolharding.nl/wp-content/uploads/2017/02/demo.webmaster541295de29059-150x150.png" alt="Profile" />
      </div>
      <div className="profile-info">
        <input
          type="text"
          name="firstName"
          value={profile.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={profile.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="role"
          value={profile.role}
          onChange={handleChange}
          placeholder="Role"
        />
        <input
          type="text"
          name="roleId"
          value={profile.roleId}
          onChange={handleChange}
          placeholder="Role ID"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email"
        />
         <button id='but1' variant="primary" size="lg" onClick={handleSave}>Save Profile</button>
      </div>
    </div>
 

        </div>
     );
}
 
export default AdminPro;