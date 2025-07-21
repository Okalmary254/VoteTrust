
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../ui/Icons';

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'dashboard', icon: <Icons.dashboard className="h-5 w-5 mr-3" />, label: 'Dashboard' },
    { id: 'create', icon: <Icons.plusCircle className="h-5 w-5 mr-3" />, label: 'Create Election' },
    { id: 'voters', icon: <Icons.users className="h-5 w-5 mr-3" />, label: 'Manage Voters' },
    { id: 'results', icon: <Icons.barChart className="h-5 w-5 mr-3" />, label: 'View Results' },
    { id: 'settings', icon: <Icons.settings className="h-5 w-5 mr-3" />, label: 'Settings' },
  ];

  return (
    <div className="hidden md:block w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <Icons.shieldCheck className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
          <span className="font-semibold">VoteTrust Admin</span>
        </div>
      </div>
      <nav className="p-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center px-4 py-3 rounded-lg mb-1 ${
              activeTab === tab.id
                ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}