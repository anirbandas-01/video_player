import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Login from './pages/Login';
import Register from './pages/Register';
import UploadVideo from './pages/UploadVideo';
import VideoPlayer from './pages/VideoPlayer';
import { useAuth } from './context/AuthContext';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

// Public Route (redirect if logged in)
const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/" />;
};

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-white min-h-screen">
      <Routes>
        {/* Public Routes */}
        <Route 
          path='/login' 
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route 
          path='/register' 
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        
        {/* Main Layout Routes */}
        <Route 
          path='/' 
          element={
            <>
              <Navbar toggleSidebar={toggleSidebar} />
              <Sidebar isOpen={sidebarOpen} />
              <MainContent sidebarOpen={sidebarOpen} />
            </>
          }
        />
        {/* Upload Video - Protected */}
        <Route 
          path='/upload' 
          element={
            <ProtectedRoute>
              <UploadVideo />
            </ProtectedRoute>
          }
        />

        {/* Video Player Page - Coming Soon */}
        <Route 
          path='/video/:videoId' 
          element={ 
            <VideoPlayer />
            /* <>
              <Navbar toggleSidebar={toggleSidebar} />
              <Sidebar isOpen={sidebarOpen} />
              <div className={`pt-14 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-20'}`}>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Video Player Page</h1>
                  <p className="text-gray-600 mt-2">Video player will be implemented here</p>
                </div>
              </div>
            </> */
          }
        />
        
        {/* Add more routes as needed */}
        <Route 
          path='/channel/:username' 
          element={
            <ProtectedRoute>
              <>
                <Navbar toggleSidebar={toggleSidebar} />
                <Sidebar isOpen={sidebarOpen} />
                <div className={`pt-14 transition-all duration-300 ${sidebarOpen ? 'ml-60' : 'ml-20'}`}>
                  <div className="p-6">
                    <h1 className="text-2xl font-bold">Channel Page</h1>
                    <p className="text-gray-600 mt-2">Channel content will be displayed here</p>
                  </div>
                </div>
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;













/* import React, { useState } from 'react';
import { Routes, Route, Navigate} from "react-router-dom"
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

export default App; */