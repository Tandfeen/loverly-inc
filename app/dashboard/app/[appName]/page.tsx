"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "../../components/Overview"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AppManagementPage({ params }: { params: { appName: string } }) {
  const appName = params.appName.charAt(0).toUpperCase() + params.appName.slice(1)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{appName} Management</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="matches">Matches</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="backdrop-blur-lg bg-card/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">324</div>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-lg bg-card/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-lg bg-card/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">203</div>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-lg bg-card/50 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Match Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5%</div>
              </CardContent>
            </Card>
          </div>
          <Overview />
        </TabsContent>
        <TabsContent value="matches">
          <Card className="backdrop-blur-lg bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle>Recent Matches</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add a list or grid of recent matches here */}
              <p>Display recent matches for {appName} here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="messages">
          <Card className="backdrop-blur-lg bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add a list of recent messages or conversations here */}
              <p>Display recent messages and conversations for {appName} here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card className="backdrop-blur-lg bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle>{appName} Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Profile Visibility</span>
                <Button variant="outline">Edit</Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Notification Preferences</span>
                <Button variant="outline">Manage</Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Account Sync</span>
                <Button variant="outline">Sync Now</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

