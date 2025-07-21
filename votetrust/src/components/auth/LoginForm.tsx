
// src/components/auth/login-form.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"
import { useTheme } from "@/context/theme-context"

export function LoginForm() {
  const { theme } = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [authMethod, setAuthMethod] = useState("internet-identity")

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    // Authentication logic here
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.shieldCheck className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome to VoteTrust
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Sign in to access your voting dashboard
        </p>
      </div>
      
      <div className="grid gap-6">
        <RadioGroup 
          defaultValue="internet-identity" 
          className="grid grid-cols-2 gap-4"
          onValueChange={(value) => setAuthMethod(value)}
        >
          <div>
            <RadioGroupItem value="internet-identity" id="internet-identity" className="peer sr-only" />
            <Label
              htmlFor="internet-identity"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Icons.blockchain className="mb-3 h-6 w-6" />
              Internet Identity
            </Label>
          </div>
          <div>
            <RadioGroupItem value="manual" id="manual" className="peer sr-only" />
            <Label
              htmlFor="manual"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Icons.mail className="mb-3 h-6 w-6" />
              Email/Password
            </Label>
          </div>
        </RadioGroup>

        {authMethod === "internet-identity" ? (
          <Button variant="outline" type="button" disabled={isLoading}>
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.blockchain className="mr-2 h-4 w-4" />
            )}
            Sign in with Internet Identity
          </Button>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <Label>Role</Label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isLoading}
              >
                <option value="voter">Voter</option>
                <option value="admin">Admin</option>
                <option value="auditor">Auditor</option>
              </select>
            </div>
            <Button className="w-full" disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In
            </Button>
          </form>
        )}
      </div>

      <Separator className="my-4" />

      <div className="flex justify-center text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?{" "}
        <Button variant="link" className="px-1 text-sm">
          Register here
        </Button>
      </div>
    </div>
  )
}