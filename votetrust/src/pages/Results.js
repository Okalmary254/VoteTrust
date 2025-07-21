
import React from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Icons } from '../components/ui/Icons';

export default function Results() {
  const { electionId } = useParams();
  
  const election = {
    id: electionId,
    title: 'Board Member Election Results',
    description: 'Final results for the 2023 Board Member Election',
    results: [
      { name: 'Alice Johnson', votes: 1245, color: '#4f46e5' },
      { name: 'Bob Smith', votes: 843, color: '#10b981' },
      { name: 'Carol Williams', votes: 721, color: '#f59e0b' },
      { name: 'David Brown', votes: 532, color: '#ef4444' },
    ],
    totalVoters: 3500,
    turnout: '80.4%',
    auditHash: '0x89d2...4f3c',
  };

  const handleDownload = (format) => {
    // Download logic would go here
    console.log(`Downloading results as ${format}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">{election.title}</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => handleDownload('csv')}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center"
          >
            <Icons.download className="h-4 w-4 mr-2" />
            CSV
          </button>
          <button
            onClick={() => handleDownload('pdf')}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center"
          >
            <Icons.download className="h-4 w-4 mr-2" />
            PDF
          </button>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-8">{election.description}</p>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Vote Distribution</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={election.results}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="votes" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Total Voters</h3>
          <p className="text-2xl font-semibold">{election.totalVoters}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Turnout</h3>
          <p className="text-2xl font-semibold">{election.turnout}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Audit Hash</h3>
          <p className="font-mono text-sm truncate mb-2">{election.auditHash}</p>
          <button className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center text-sm">
            <Icons.externalLink className="h-4 w-4 mr-1" />
            Verify on blockchain
          </button>
        </div>
      </div>
    </div>
  );
}