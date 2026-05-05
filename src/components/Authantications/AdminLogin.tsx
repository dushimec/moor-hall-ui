import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAdminLoggedIn') === 'true';
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would make an API call here
      // For demo, let's assume admin credentials are:
      // email: admin@moorhall.com
      // password: admin123
      if (email === 'admin@moorhall.com' && password === 'admin123') {
        // Successful login - store auth state
        localStorage.setItem('isAdminLoggedIn', 'true');
        localStorage.setItem('adminToken', 'jwt-token-' + Date.now());
        localStorage.setItem('adminUser', JSON.stringify({
          name: 'Admin User',
          email: 'admin@moorhall.com',
          role: 'admin'
        }));
        
        // Redirect to dashboard
        navigate('/admin/dashboard');
      } else {
        setError('Invalid email or password');
        setLoading(false);
      }
    }, 1000);
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
                className="h-4 w-4 text-[#BF2201] focus:ring-[#BF2201] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-[#BF2201] hover:text-[#BF2201]/80">
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
      </div>
    </div>
  );
};

export default AdminLogin;
