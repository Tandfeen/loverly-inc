"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Zap, CalendarIcon, MapPin, Clock } from "lucide-react"

export default function DatePlannerPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold glow-text">Date Planner</h1>
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Dates</TabsTrigger>
          <TabsTrigger value="plan">Plan a Date</TabsTrigger>
          <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle>Upcoming Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Example upcoming date */}
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold">Coffee with Alice</p>
                      <p className="text-sm text-muted-foreground">Saturday, 2:00 PM</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
                {/* Add more upcoming dates here */}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="plan">
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle>Plan a New Date</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Calendar />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" />
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Enter location" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Any special plans or reminders?" />
                </div>
                <Button>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Schedule Date
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="suggestions">
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                AI-Powered Date Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Example AI suggestion */}
                <div className="p-4 bg-secondary/30 rounded-lg space-y-2">
                  <h3 className="font-semibold">Sunset Picnic at the Park</h3>
                  <p className="text-sm text-muted-foreground">
                    Based on Alice's interests in outdoor activities and your shared love for food.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />2 hours
                    </span>
                    <span className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      Central Park
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    Use This Idea
                  </Button>
                </div>
                {/* Add more AI suggestions here */}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

