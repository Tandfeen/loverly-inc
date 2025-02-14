"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import type React from "react" // Added import for React

interface DashboardCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  change: number
}

export function DashboardCard({ title, value, icon, change }: DashboardCardProps) {
  return (
    <Card className="glassmorphism">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          <ArrowUpRight className={`inline h-4 w-4 ${change >= 0 ? "text-green-500" : "text-red-500"}`} />
          <span className={change >= 0 ? "text-green-500" : "text-red-500"}>{Math.abs(change)}%</span> from last period
        </p>
      </CardContent>
    </Card>
  )
}

