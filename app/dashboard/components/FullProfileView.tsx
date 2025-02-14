"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface FullProfileViewProps {
  isOpen: boolean
  onClose: () => void
  profile: {
    id: string
    name: string
    age: number
    location: string
    photo: string
    bio: string
    interests: string[]
    compatibility: number
    platforms: {
      name: string
      username: string
      matchDate: string
      interactionRate: number
    }[]
  }
}

const interactionData = [
  { name: "Mon", count: 4 },
  { name: "Tue", count: 3 },
  { name: "Wed", count: 7 },
  { name: "Thu", count: 2 },
  { name: "Fri", count: 5 },
  { name: "Sat", count: 8 },
  { name: "Sun", count: 6 },
]

export function FullProfileView({ isOpen, onClose, profile }: FullProfileViewProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{profile.name}'s Profile</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Profile Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={profile.photo} alt={profile.name} />
                    <AvatarFallback>{profile.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {profile.name}, {profile.age}
                    </h3>
                    <p className="text-muted-foreground">{profile.location}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Bio</h4>
                  <p>{profile.bio}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <Badge key={index}>{interest}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Compatibility</h4>
                  <div className="flex items-center">
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${profile.compatibility}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium">{profile.compatibility}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="platforms">
            <Card>
              <CardHeader>
                <CardTitle>Connected Platforms</CardTitle>
                <CardDescription>View {profile.name}'s profiles across different dating apps</CardDescription>
              </CardHeader>
              <CardContent>
                {profile.platforms.map((platform, index) => (
                  <div key={index} className="mb-4 p-4 border rounded-lg">
                    <h4 className="font-semibold">{platform.name}</h4>
                    <p className="text-sm text-muted-foreground">Username: {platform.username}</p>
                    <p className="text-sm text-muted-foreground">Matched on: {platform.matchDate}</p>
                    <p className="text-sm">Interaction Rate: {platform.interactionRate}%</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Interaction Analytics</CardTitle>
                <CardDescription>View your interaction patterns with {profile.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={interactionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Insights</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Highest interaction day: Saturday</li>
                    <li>Average daily interactions: 5</li>
                    <li>Conversation topics: Travel, Music, Food</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="mt-4 flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

