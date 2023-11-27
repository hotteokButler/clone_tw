import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div id="main-wrapper">
      <h1>Layout</h1>
      <Outlet/>
    </div>
  );
}

export default Layout;