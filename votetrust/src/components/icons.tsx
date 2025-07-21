
// src/components/icons.tsx
"use client"

import { LucideProps } from "lucide-react"
import dynamic from "next/dynamic"

export const Icons = {
  shieldCheck: dynamic(() => import("lucide-react").then(mod => mod.ShieldCheck)),
  lock: dynamic(() => import("lucide-react").then(mod => mod.Lock)),
  user: dynamic(() => import("lucide-react").then(mod => mod.User)),
  users: dynamic(() => import("lucide-react").then(mod => mod.Users)),
  vote: dynamic(() => import("lucide-react").then(mod => mod.Vote)),
  barChart: dynamic(() => import("lucide-react").then(mod => mod.BarChart)),
  plusCircle: dynamic(() => import("lucide-react").then(mod => mod.PlusCircle)),
  settings: dynamic(() => import("lucide-react").then(mod => mod.Settings)),
  dashboard: dynamic(() => import("lucide-react").then(mod => mod.LayoutDashboard)),
  spinner: dynamic(() => import("lucide-react").then(mod => mod.Loader2)),
  mail: dynamic(() => import("lucide-react").then(mod => mod.Mail)),
  blockchain: dynamic(() => import("lucide-react").then(mod => mod.Link)),
  history: dynamic(() => import("lucide-react").then(mod => mod.History)),
  download: dynamic(() => import("lucide-react").then(mod => mod.Download)),
  externalLink: dynamic(() => import("lucide-react").then(mod => mod.ExternalLink)),
  checkCircle: dynamic(() => import("lucide-react").then(mod => mod.CheckCircle2)),
  trash: dynamic(() => import("lucide-react").then(mod => mod.Trash2)),
  plus: dynamic(() => import("lucide-react").then(mod => mod.Plus)),
  rocket: dynamic(() => import("lucide-react").then(mod => mod.Rocket)),
  // Add more icons as needed
}