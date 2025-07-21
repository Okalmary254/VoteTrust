
// src/components/results/results-page.tsx
"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export function ResultsPage({ electionId }: { electionId: string }) {
  // Mock data - in a real app, this would come from the blockchain
  const election = {
    id: electionId,
    title: "Board Member Election Results",
    description: "Final results for the 2023 Board Member Election",
    results: [
      { name: "Alice Johnson", votes: 1245, color: "#4f46e5" },
      { name: "Bob Smith", votes: 843, color: "#10b981" },
      { name: "Carol Williams", votes: 721, color: "#f59e0b" },
      { name: "David Brown", votes: 532, color: "#ef4444" },
    ],
    totalVoters: 3500,
    turnout: "80.4%",
    auditHash: "0x89d2...4f3c",
  }

  const handleDownload = (format: "pdf" | "csv") => {
    // Download logic would go here
    console.log(`Downloading results as ${format}`)
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{election.title}</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleDownload("csv")}>
            <Icons.download className="h-4 w-4 mr-2" />
            CSV
          </Button>
          <Button variant="outline" onClick={() => handleDownload("pdf")}>
            <Icons.download className="h-4 w-4 mr-2" />
            PDF
          </Button>
        </div>
      </div>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{election.description}</p>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Vote Distribution</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Total Voters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{election.totalVoters}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Turnout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{election.turnout}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Audit Hash</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm font-mono truncate">{election.auditHash}</div>
              <Button variant="link" size="sm" className="mt-2 pl-0">
                <Icons.externalLink className="h-4 w-4 mr-2" />
                Verify on blockchain
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}