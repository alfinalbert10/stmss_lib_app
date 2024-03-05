import React from 'react';
import { NavLink } from 'react-router-dom';
import './dashbord.css'
import { useLocation } from "react-router-dom";
import HomeAd from './HomeAd';
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className='sidebars' style={{height:'611px',width: '300px', border:'2px solid white', marginTop:'2px', marginLeft:'2px'}}>
      <NavLink className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <span className="fs-4">Dashbord</span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <button className='dashbord-button'><NavLink id='nav-link' aria-current="page" to="/home">
            Home
          </NavLink></button>
        </li><br></br>
        <li className="nav-item">
          <button className='dashbord-button'><NavLink id='nav-link' to="/books">
            Books
          </NavLink></button>
        </li><br></br>
        <li className="nav-item">
          <button className='dashbord-button'><NavLink id='nav-link' to="/issue">
            Issue
          </NavLink></button>
        </li><br></br>
        <li className="nav-item">
          <button className='dashbord-button'><NavLink id='nav-link' to="/return">
            Return
          </NavLink></button>
        </li><br></br>
        <li className="nav-item">
         <button className='dashbord-button'><NavLink id='nav-link' to="/members">
            Members
          </NavLink></button> 
        </li><br></br>
        <li className="nav-item">
          <button className='dashbord-button'><NavLink id='nav-link' to="/log">
            Log
          </NavLink></button>
        </li>
      </ul>
      <div>
        {location.pathname === "/home" && <HomeAd />}
        {/* {location.pathname === "/books" && <Books />} */}
        {/* ... other routes */}
      </div>
    </div>
  );
};

export default Sidebar;
