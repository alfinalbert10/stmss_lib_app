
import React from 'react';
import Nav from "./Navs";
import Dashbord from "./dashbord";
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <div >
    
      <Nav />
      <Dashbord />
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

// import React, { useState } from 'react';
// import Nav from "./Navs";
// import Dashbord from "./dashbord";
// import { Outlet, useNavigate } from "react-router-dom";
// import Login from './Login.js';

// function Layout() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     navigate('/home'); 
//   };

//   if (!isLoggedIn) {
//     return <Login onLoginSuccess={handleLoginSuccess} />;
//   }

//   return (
//     <div>
//       <Nav />
//       <Dashbord />
//       <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Layout;
