
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../components/ui/Icons';

export default function Login({ setUserRole }) {
  const [authMethod, setAuthMethod] = useState('internet-identity');
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('voter');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      setUserRole(role);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <Icons.shieldCheck className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-2xl font-semibold mt-4">Welcome to VoteTrust</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Sign in to access your voting dashboard
          </p>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setAuthMethod('internet-identity')}
              className={`py-3 px-4 rounded-lg flex flex-col items-center border-2 ${authMethod === 'internet-identity' ? 'border-indigo-600 dark:border-indigo-400' : 'border-gray-200 dark:border-gray-700'}`}
            >
              <Icons.blockchain className="h-6 w-6 mb-2" />
              <span>Internet Identity</span>
            </button>
            <button
              onClick={() => setAuthMethod('manual')}
              className={`py-3 px-4 rounded-lg flex flex-col items-center border-2 ${authMethod === 'manual' ? 'border-indigo-600 dark:border-indigo-400' : 'border-gray-200 dark:border-gray-700'}`}
            >
              <Icons.mail className="h-6 w-6 mb-2" />
              <span>Email/Password</span>
            </button>
          </div>
        </div>

        {authMethod === 'internet-identity' ? (
          <button
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                setUserRole(role);
                navigate('/dashboard');
              }, 1500);
            }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <Icons.spinner className="animate-spin h-5 w-5 mr-2" />
            ) : (
              <Icons.blockchain className="h-5 w-5 mr-2" />
            )}
            Sign in with Internet Identity
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700"
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-1">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700"
              >
                <option value="voter">Voter</option>
                <option value="admin">Admin</option>
                <option value="auditor">Auditor</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading && <Icons.spinner className="animate-spin h-5 w-5 mr-2" />}
              Sign In
            </button>
          </form>
        )}

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <button className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Register here
          </button>
        </div>
      </div>
    </div>
  );
}