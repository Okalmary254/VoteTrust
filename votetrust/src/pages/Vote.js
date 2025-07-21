
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Icons } from '../components/ui/Icons';

export default function Vote() {
  const { electionId } = useParams();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const election = {
    id: electionId,
    title: 'Board Member Election',
    description: 'Please vote for one of the following candidates to serve on the board for the next term.',
    options: [
      { id: '1', name: 'Alice Johnson', description: 'Current CFO, running for Chairperson' },
      { id: '2', name: 'Bob Smith', description: 'External candidate, industry expert' },
      { id: '3', name: 'Carol Williams', description: 'Current board member seeking re-election' },
      { id: '4', name: 'David Brown', description: 'Community representative nominee' },
    ]
  };

  const handleVoteSubmit = () => {
    // In a real app, this would submit to the blockchain
    setTimeout(() => {
      setShowConfirmation(false);
      setShowSuccess(true);
    }, 1500);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{election.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{election.description}</p>
          
          <div className="space-y-4 mb-8">
            {election.options.map((option) => (
              <div 
                key={option.id} 
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedOption === option.id 
                    ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
                onClick={() => setSelectedOption(option.id)}
              >
                <div className="flex items-center">
                  <div className={`h-5 w-5 rounded-full border flex items-center justify-center mr-4 ${
                    selectedOption === option.id 
                      ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {selectedOption === option.id && (
                      <Icons.check className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{option.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{option.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowConfirmation(true)}
            disabled={!selectedOption}
            className={`w-full py-3 px-4 rounded-lg flex items-center justify-center ${
              selectedOption
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            <Icons.vote className="h-5 w-5 mr-2" />
            Submit Vote
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <Icons.alertCircle className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-xl font-semibold">Confirm Your Vote</h2>
            </div>
            <p className="mb-6">
              You are about to vote for: <strong>{
                election.options.find(o => o.id === selectedOption)?.name
              }</strong>. This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleVoteSubmit}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center"
              >
                <Icons.vote className="h-4 w-4 mr-2" />
                Confirm Vote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4">
              <Icons.checkCircle className="h-6 w-6 text-green-500 mr-2" />
              <h2 className="text-xl font-semibold">Vote Submitted Successfully</h2>
            </div>
            <p className="mb-6">
              Your vote has been recorded on the blockchain. Transaction ID: 0x7d3...4f2
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleSuccessClose}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}