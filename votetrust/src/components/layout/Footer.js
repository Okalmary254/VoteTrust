
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../ui/Icons';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Icons.shieldCheck className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-lg font-medium text-gray-900 dark:text-white">VoteTrust</span>
          </div>
          <div className="flex space-x-6">
            <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              About
            </Link>
            <Link to="/docs" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Documentation
            </Link>
            <Link to="/github" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              GitHub
            </Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}