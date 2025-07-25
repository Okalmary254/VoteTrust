
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Vote from './pages/Vote';
import Results from './pages/Results';
import AdminDashboard from './components/dashboard/AdminDashboard';
import VoterDashboard from './components/dashboard/VoterDashboard';

function App() {
  return (
    <div className="bg-blue-500 text-white p-4">
      Test Tailwind - this should be blue with white text
    </div>
  );
}

function App() {
  const [userRole, setUserRole] = useState(null); // 'admin', 'voter', or 'auditor'

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUserRole={setUserRole} />} />
            <Route 
              path="/dashboard" 
              element={
                userRole === 'admin' ? 
                  <AdminDashboard /> : 
                  <VoterDashboard />
              } 
            />
            <Route path="/vote/:electionId" element={<Vote />} />
            <Route path="/results/:electionId" element={<Results />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;