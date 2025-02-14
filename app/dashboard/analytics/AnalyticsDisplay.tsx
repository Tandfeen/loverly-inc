"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dynamic from "next/dynamic"
import type { AnalyticsData } from "@/types/analytics"
import ErrorBoundary from "@/components/ErrorBoundary"

const DynamicBarChart = dynamic(() => import("./charts/BarChart"), {
  loading: () => <div>Loading chart...</div>,
  ssr: false,
})
const DynamicLineChart = dynamic(() => import("./charts/LineChart"), {
  loading: () => <div>Loading chart...</div>,
  ssr: false,
})
const DynamicPieChart = dynamic(() => import("./charts/PieChart"), {
  loading: () => <div>Loading chart...</div>,
  ssr: false,
})

export default function AnalyticsDisplay({ data }: { data: AnalyticsData }) {
  console.log("Rendering AnalyticsDisplay with data:", data)
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Matches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.totalMatches}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.activeConversations}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Dates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.upcomingDates}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Match Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.matchRate}%</div>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="matches" className="space-y-4">
        <TabsList>
          <TabsTrigger value="matches">Matches</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="appUsage">App Usage</TabsTrigger>
        </TabsList>
        <TabsContent value="matches">
          <Card>
            <CardHeader>
              <CardTitle>Matches Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ErrorBoundary fallback={<div>Error loading Matches chart</div>}>
                <DynamicBarChart data={data.matchesData} />
              </ErrorBoundary>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Message Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ErrorBoundary fallback={<div>Error loading Messages chart</div>}>
                <DynamicLineChart data={data.messageData} />
              </ErrorBoundary>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appUsage">
          <Card>
            <CardHeader>
              <CardTitle>App Usage Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ErrorBoundary fallback={<div>Error loading App Usage chart</div>}>
                <DynamicPieChart data={data.appUsageData} />
              </ErrorBoundary>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

