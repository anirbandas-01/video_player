import React from 'react'
import Navbar from '../layout/Navbar.jsx';
import Sidebar from '../layout/Sidebar.jsx';


const Layout = () => {
  return (
    <div className='min-h-screen bg-dark text-white'>
      <Navbar />
      <div className='flex pt-16'>
        <Sidebar />
        <main className='flex-1 ml-64 p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout