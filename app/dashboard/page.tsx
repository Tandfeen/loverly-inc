"use client"

import { useState, useEffect } from "react"
import { AdvancedChart } from "./components/AdvancedChart"
import { RecentActivity } from "./components/RecentActivity"
import { AppList } from "./components/AppList"
import { DatingCoach } from "./components/DatingCoach"
import { DashboardCard } from "./components/DashboardCard"
import { getActiveAddons } from "@/lib/addons"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Users, MessageSquare, Calendar, TrendingUp } from "lucide-react"
import { fetchWithRetry } from "@/lib/api"
import { AppError, handleError } from "@/lib/errorHandler"
import ErrorBoundary from "@/components/ErrorBoundary"
import LoadingSpinner from "@/components/LoadingSpinner"
import ErrorMessage from "@/components/ErrorMessage"

export default function DashboardPage() {
  const [activeAddons, setActiveAddons] = useState(getActiveAddons())
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await fetchWithRetry("/dashboard-data")
        setDashboardData(data)
      } catch (err) {
        if (err instanceof AppError) {
          setError(err)
        } else {
          setError(new Error("An unexpected error occurred"))
        }
        handleError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveAddons(getActiveAddons())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  return (
    <ErrorBoundary fallback={<ErrorMessage message="Something went wrong in the dashboard. Please try again later." />}>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
          <h1 className="text-3xl font-bold glow-text">Dashboard</h1>
          <Button className="glow-bg">AI Insights</Button>
        </div>
        <AppList />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Total Matches"
            value={dashboardData.totalMatches}
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
            change={dashboardData.matchesChange}
          />
          <DashboardCard
            title="Active Conversations"
            value={dashboardData.activeConversations}
            icon={<MessageSquare className="h-4 w-4 text-muted-foreground" />}
            change={dashboardData.conversationsChange}
          />
          <DashboardCard
            title="Upcoming Dates"
            value={dashboardData.upcomingDates}
            icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
            change={dashboardData.datesChange}
          />
          <DashboardCard
            title="Match Rate"
            value={`${dashboardData.matchRate}%`}
            icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
            change={dashboardData.matchRateChange}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AdvancedChart />
          </div>
          <DatingCoach />
        </div>
        <RecentActivity />
        {activeAddons.map((addon) => {
          const AddonComponent = dynamic(() => import(`@/components/addons/${addon.id}`), {
            loading: () => <LoadingSpinner />,
          })
          return (
            <ErrorBoundary
              key={addon.id}
              fallback={<ErrorMessage message={`Error loading ${addon.name}. Please try again later.`} />}
            >
              <AddonComponent />
            </ErrorBoundary>
          )
        })}
      </div>
    </ErrorBoundary>
  )
}

