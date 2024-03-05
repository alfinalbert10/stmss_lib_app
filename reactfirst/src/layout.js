// Layout.js
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