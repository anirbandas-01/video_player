import React, { useState } from 'react';
import { Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Home} from 'lucide-react';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-white min-h-screen">
    

        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
        
            <Route path='/' 
              element={
               <>
                <Navbar toggleSidebar={toggleSidebar} />
                <Sidebar isOpen={sidebarOpen} />
                <MainContent sidebarOpen={sidebarOpen} />
                <Home />
                </>
              }
            />
      </Routes>
    </div>
  );
};

export default App;