
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Icons } from '../ui/Icons';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Icons.shieldCheck className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-2" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">VoteTrust</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            About
          </Link>
          <Link to="/docs" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Docs
          </Link>
          <ThemeToggle />
          <Link 
            to="/login" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}