import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, fallback }) => {
  // Check if user is authenticated using token
  const token = localStorage.getItem('adminToken');
  const isAuthenticated = !!token;
  const location = useLocation();
  
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }
  
  return children;
};

export default ProtectedRoute;