import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiService } from '../../services/api';
import { LoginCredentials } from '../../types/index';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordError, setForgotPasswordError] = useState('');
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState('');
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Prepare login data
      const loginData: LoginCredentials = {
        email,
        password
      };
      
      // Call actual API
      const response = await apiService.login(loginData);
      
      // Successful login - store auth state
      // API response format: { data: { admin: {...}, token: '...' } }
      const { admin, token } = response.data.data;
      
      localStorage.setItem('isAdminLoggedIn', 'true');
      localStorage.setItem('adminToken', token);
      
      localStorage.setItem('adminUser', JSON.stringify({
        id: admin.id,
        name: admin.fullName,
        email: admin.email,
        role: admin.role
      }));
      
      // If remember me is checked, extend token expiration (handled by backend via refresh token)
      // For now, we'll just note that remember me is selected
      if (rememberMe) {
        // In a real app, you might adjust token storage strategy here
        console.log('Remember me enabled');
      }
      
      // Redirect to dashboard
      navigate('/admin/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid email or password');
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotPasswordError('');
    setForgotPasswordSuccess('');
    setForgotPasswordLoading(true);
    
    try {
      // Call forgot password API
      await apiService.forgotPassword({ email });
      
      setForgotPasswordSuccess('Password reset instructions sent to your email');
      setForgotPasswordLoading(false);
    } catch (err: any) {
      setForgotPasswordError(err.response?.data?.message || 'Failed to send reset instructions');
      setForgotPasswordLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-center text-[#BF2201]">
            Admin Login
          </h2>
          <p className="text-gray-600">
            Sign in to access the admin panel
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-4">
            {error}
          </div>
        )}
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 shadow-sm focus:outline-none focus:ring-[#BF2201] focus:border-[#BF2201] sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 shadow-sm focus:outline-none focus:ring-[#BF2201] focus:border-[#BF2201] sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
           <div className="flex items-center justify-between">
             <div className="flex items-center">
               <input
                 id="remember-me"
                 type="checkbox"
                 checked={rememberMe}
                 onChange={(e) => setRememberMe(e.target.checked)}
                 className="h-4 w-4 text-[#BF2201] focus:ring-[#BF2201] border-gray-300 rounded"
               />
               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                 Remember me
               </label>
             </div>
             
             <div className="text-sm">
               <a href="#" className="font-medium text-[#BF2201] hover:text-[#BF2201]/80" onClick={(e) => {
                 e.preventDefault();
                 setShowForgotPassword(true);
               }}>
                 Forgot password?
               </a>
             </div>
           </div>
          
           <div>
             <button
               type="submit"
               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#BF2201] hover:bg-[#BF2201]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BF2201] disabled:opacity-50 transition-all"
               disabled={loading}
             >
               {loading ? 'Signing in...' : 'Sign in'}
             </button>
           </div>
           
           <div className="text-center">
             <p className="text-sm text-gray-500">
               Don't have an admin account?{' '}
               <Link
                 to="/admin/register"
                 className="font-medium text-[#BF2201] hover:text-[#BF2201]/80"
               >
                 Register here
               </Link>
             </p>
           </div>
          </form>
          
          {/* Forgot Password Form */}
          {showForgotPassword && (
            <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-center text-[#BF2201] mb-4">
                Forgot Password
              </h3>
              <p className="text-center text-sm text-gray-600 mb-4">
                Enter your email address to receive password reset instructions
              </p>
              
              {forgotPasswordError && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                  {forgotPasswordError}
                </div>
              )}
              
              {forgotPasswordSuccess && (
                <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 mb-4">
                  {forgotPasswordSuccess}
                </div>
              )}
              
              <form className="space-y-4" onSubmit={handleForgotPassword}>
                <div>
                  <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>
                  <input
                    id="forgot-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 shadow-sm focus:outline-none focus:ring-[#BF2201] focus:border-[#BF2201] sm:text-sm"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="text-sm font-medium text-[#BF2201] hover:text-[#BF2201]/80"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#BF2201] hover:bg-[#BF2201]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BF2201] disabled:opacity-50 transition-all"
                    disabled={forgotPasswordLoading}
                  >
                    {forgotPasswordLoading ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
 };

export default AdminLogin;
