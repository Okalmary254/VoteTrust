
// src/components/landing-page.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { useTheme } from "@/context/theme-context"
import { Moon, Sun } from "lucide-react"

export default function LandingPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="container py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icons.shieldCheck className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">VoteTrust</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Docs</Button>
            <Button onClick={toggleTheme} variant="ghost" size="icon">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <section className="flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Secure. Transparent. Decentralized Voting for Institutions.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
            VoteTrust leverages the Internet Computer Protocol to provide tamper-proof voting with complete transparency and voter privacy.
          </p>
          <div className="flex space-x-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 py-12">
          <Card>
            <CardHeader>
              <Icons.lock className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-4" />
              <CardTitle>Tamper-proof Voting</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Votes are recorded on the blockchain, making them immutable and verifiable by anyone.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Icons.barChart className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
              <CardTitle>Real-Time Results</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                View live results as votes are cast, with cryptographic proofs of accuracy.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Icons.user className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mb-4" />
              <CardTitle>Voter Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Zero-knowledge proofs ensure voter anonymity while preventing double voting.
              </CardDescription>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Icons.shieldCheck className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="text-lg font-medium text-gray-900 dark:text-white">VoteTrust</span>
          </div>
          <div className="flex space-x-6">
            <Button variant="link" className="text-gray-600 dark:text-gray-300">
              About
            </Button>
            <Button variant="link" className="text-gray-600 dark:text-gray-300">
              Documentation
            </Button>
            <Button variant="link" className="text-gray-600 dark:text-gray-300">
              GitHub
            </Button>
            <Button variant="link" className="text-gray-600 dark:text-gray-300">
              Contact
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}