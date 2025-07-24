
// src/components/voting/voting-page.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function VotingPage({ electionId }: { electionId: string }) {
  const [selectedOption, setSelectedOption] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const router = useRouter()

  // Mock data - in a real app, this would come from the blockchain
  const election = {
    id: electionId,
    title: "Board Member Election",
    description: "Please vote for one of the following candidates to serve on the board for the next term.",
    options: [
      { id: "1", name: "Alice Johnson", description: "Current CFO, running for Chairperson" },
      { id: "2", name: "Bob Smith", description: "External candidate, industry expert" },
      { id: "3", name: "Carol Williams", description: "Current board member seeking re-election" },
      { id: "4", name: "David Brown", description: "Community representative nominee" },
    ]
  }

  const handleVoteSubmit = () => {
    setIsSubmitting(true)
    // In a real app, this would submit to the blockchain
    setTimeout(() => {
      setIsSubmitting(false)
      setShowConfirmation(false)
      setShowSuccess(true)
    }, 2000)
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
    router.push("/voter-dashboard")
  }

  return (
    <div className="container py-8 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>{election.title}</CardTitle>
          <CardDescription>{election.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            value={selectedOption} 
            onValueChange={setSelectedOption}
            className="space-y-4"
          >
            {election.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-4">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id} className="flex flex-col">
                  <span className="font-medium">{option.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {option.description}
                  </span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button 
            onClick={() => setShowConfirmation(true)}
            disabled={!selectedOption}
          >
            <Icons.vote className="h-4 w-4 mr-2" />
            Submit Vote
          </Button>
        </CardFooter>
      </Card>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Your Vote</AlertDialogTitle>
            <AlertDialogDescription>
              You are about to vote for: <strong>{
                election.options.find(o => o.id === selectedOption)?.name
              }</strong>. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleVoteSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Icons.spinner className="h-4 w-4 mr-2 animate-spin" />
              ) : null}
              Confirm Vote
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Success Dialog */}
      <AlertDialog open={showSuccess} onOpenChange={handleSuccessClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center">
              <Icons.checkCircle className="h-6 w-6 text-emerald-600 mr-2" />
              Vote Submitted Successfully
            </AlertDialogTitle>
            <AlertDialogDescription>
              Your vote has been recorded on the blockchain. Transaction ID: 0x7d3...4f2
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleSuccessClose}>
              Return to Dashboard
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}