// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import Channel from './pages/Channel';
import Login from './pages/Login';
import Register from './pages/Register';
import WatchHistory from './pages/WatchHistory';
import UploadVideo from './pages/UploadVideo';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <Toaster position="top-right" />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="video/:videoId" element={<VideoDetail />} />
              <Route path="channel/:username" element={<Channel />} />
              <Route
                path="history"
                element={
                  <ProtectedRoute>
                    <WatchHistory />
                  </ProtectedRoute>
                }
              />
              <Route
                path="upload"
                element={
                  <ProtectedRoute>
                    <UploadVideo />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;