import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import { Icons } from '../ui/Icons';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [elections, setElections] = useState([
    {
      id: '1',
      title: 'Board Member Election',
      status: 'active',
      startDate: '2023-11-01',
      endDate: '2023-11-15',
      voters: 250,
    },
    {
      id: '2',
      title: 'Budget Approval',
      status: 'upcoming',
      startDate: '2023-11-20',
      endDate: '2023-11-30',
      voters: 320,
    },
    {
      id: '3',
      title: 'Policy Amendment',
      status: 'completed',
      startDate: '2023-10-01',
      endDate: '2023-10-15',
      voters: 180,
    },
  ]);

  const stats = [
    { title: 'Total Voters', value: '1,243', icon: <Icons.users className="h-6 w-6" /> },
    { title: 'Ongoing Elections', value: '4', icon: <Icons.vote className="h-6 w-6" /> },
    { title: 'Average Turnout', value: '72%', icon: <Icons.barChart className="h-6 w-6" /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Link
              to="/create-election"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <Icons.plus className="h-4 w-4 mr-2" />
              New Election
            </Link>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                      <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                    </div>
                    <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Recent Elections</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Start Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          End Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Voters
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {elections.map((election) => (
                        <tr key={election.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                            {election.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              election.status === 'active'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : election.status === 'upcoming'
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                            }`}>
                              {election.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {election.startDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {election.endDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {election.voters}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'create' && (
          <CreateElection setElections={setElections} />
        )}
      </div>
    </div>
  );
}

function CreateElection({ setElections }) {
  const [options, setOptions] = useState(['']);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    accessMode: 'whitelist'
  });

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newElection = {
      id: Date.now().toString(),
      title: formData.title,
      status: 'upcoming',
      startDate: formData.startTime,
      endDate: formData.endTime,
      voters: 0
    };
    setElections(prev => [...prev, newElection]);
    // Reset form
    setFormData({
      title: '',
      description: '',
      startTime: '',
      endTime: '',
      accessMode: 'whitelist'
    });
    setOptions(['']);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Create New Election</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Election Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 min-h-[100px]"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="startTime" className="block text-sm font-medium mb-1">
              Start Time
            </label>
            <input
              id="startTime"
              type="datetime-local"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700"
              value={formData.startTime}
              onChange={(e) => setFormData({...formData, startTime: e.target.value})}
              required
            />
          </div>

          <div>
            <label htmlFor="endTime" className="block text-sm font-medium mb-1">
              End Time
            </label>
            <input
              id="endTime"
              type="datetime-local"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700"
              value={formData.endTime}
              onChange={(e) => setFormData({...formData, endTime: e.target.value})}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Voting Options</label>
          {options.map((option, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
                required
              />
              {options.length > 1 && (
                <button
                  type="button"
                  className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                  onClick={() => removeOption(index)}
                >
                  <Icons.trash className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
            onClick={addOption}
          >
            <Icons.plus className="h-4 w-4 mr-1" />
            Add Option
          </button>
        </div>

        <div>
          <label htmlFor="accessMode" className="block text-sm font-medium mb-1">
            Voter Access Mode
          </label>
          <select
            id="accessMode"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700"
            value={formData.accessMode}
            onChange={(e) => setFormData({...formData, accessMode: e.target.value})}
          >
            <option value="open">Open to all</option>
            <option value="whitelist">Whitelist only</option>
            <option value="token">Token-based access</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg flex items-center"
          >
            <Icons.rocket className="h-4 w-4 mr-2" />
            Launch Election
          </button>
        </div>
      </form>
    </div>
  );
}