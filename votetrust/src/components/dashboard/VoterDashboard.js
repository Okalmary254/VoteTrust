import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../ui/Icons';

export default function VoterDashboard() {
  const elections = [
    {
      id: '1',
      title: 'Board Member Election',
      description: 'Vote for the new board members for the upcoming term',
      status: 'active',
      deadline: '2023-11-15',
    },
    {
      id: '2',
      title: 'Budget Approval',
      description: 'Approve the annual budget for fiscal year 2024',
      status: 'upcoming',
      deadline: '2023-11-30',
    },
    {
      id: '3',
      title: 'Policy Amendment',
      description: 'Vote on proposed changes to the organization\'s bylaws',
      status: 'completed',
      deadline: '2023-10-15',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Welcome back, John</h1>
        <Link
          to="/voting-history"
          className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
        >
          <Icons.history className="h-5 w-5 mr-1" />
          Voting History
        </Link>
      </div>

      <h2 className="text-xl font-semibold mb-6">Available Elections</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {elections.map((election) => (
          <div key={election.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{election.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{election.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  election.status === 'active'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : election.status === 'upcoming'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                }`}>
                  {election.status}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Deadline: {election.deadline}
                </span>
              </div>
              
              <Link
                to={`/vote/${election.id}`}
                className={`w-full block text-center py-2 px-4 rounded-lg ${
                  election.status === 'active'
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                {election.status === 'active' ? (
                  <>
                    <Icons.vote className="inline h-4 w-4 mr-2" />
                    Vote Now
                  </>
                ) : election.status === 'upcoming' ? (
                  'Coming Soon'
                ) : (
                  'Election Ended'
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}