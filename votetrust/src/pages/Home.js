
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Icons } from '../components/ui/Icons';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Secure. Transparent. Decentralized Voting for Institutions.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            VoteTrust leverages the Internet Computer Protocol to provide tamper-proof voting with complete transparency and voter privacy.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/login" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/about" 
              className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 py-12">
          {[
            {
              icon: <Icons.lock className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-4" />,
              title: "Tamper-proof Voting",
              description: "Votes are recorded on the blockchain, making them immutable and verifiable by anyone."
            },
            {
              icon: <Icons.barChart className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />,
              title: "Real-Time Results",
              description: "View live results as votes are cast, with cryptographic proofs of accuracy."
            },
            {
              icon: <Icons.user className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-4" />,
              title: "Voter Privacy",
              description: "Zero-knowledge proofs ensure voter anonymity while preventing double voting."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}