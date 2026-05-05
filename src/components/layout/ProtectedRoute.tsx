import React from 'react';
import { Navigate, Location } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, fallback }) => {
  // Check if user is authenticated (simplified - in real app this would check JWT or session)
  const isAuthenticated = localStorage.getItem('isAdminLoggedIn') === 'true';
  
  // For demo purposes, you could also check for a token
  // const token = localStorage.getItem('adminToken');
  // const isAuthenticated = !!token;
  
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }
  
  return children;
};

export default ProtectedRoute;