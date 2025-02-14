"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Zap, Send } from "lucide-react"

const conversations = [
  { id: 1, name: "Alice", lastMessage: "Hey, how's it going?", app: "Tinder", unread: 2 },
  { id: 2, name: "Bob", lastMessage: "Want to grab coffee sometime?", app: "Bumble", unread: 0 },
  { id: 3, name: "Charlie", lastMessage: "That's hilarious! 😂", app: "Hinge", unread: 1 },
  // Add more conversations as needed
]

const messages = [
  { id: 1, sender: "Alice", content: "Hey, how's it going?", timestamp: "2:30 PM" },
  {
    id: 2,
    sender: "You",
    content: "Hi Alice! I'm doing well, thanks for asking. How about you?",
    timestamp: "2:32 PM",
  },
  {
    id: 3,
    sender: "Alice",
    content: "I'm great! Just finished a yoga class. Do you practice yoga?",
    timestamp: "2:35 PM",
  },
  // Add more messages as needed
]

export default function MessageCenterPage() {
  const [activeConversation, setActiveConversation] = useState(conversations[0])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold glow-text">Message Center</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              {conversations.map((convo) => (
                <div
                  key={convo.id}
                  className={`flex items-center space-x-4 p-2 hover:bg-secondary/30 rounded-lg cursor-pointer ${
                    activeConversation.id === convo.id ? "bg-secondary/50" : ""
                  }`}
                  onClick={() => setActiveConversation(convo)}
                >
                  <Avatar>
                    <AvatarImage src={`/${convo.name.toLowerCase()}.jpg`} alt={convo.name} />
                    <AvatarFallback>{convo.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-semibold">{convo.name}</p>
                      <Badge variant="outline">{convo.app}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{convo.lastMessage}</p>
                  </div>
                  {convo.unread > 0 && <Badge>{convo.unread}</Badge>}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Chat with {activeConversation.name}</span>
              <Badge variant="outline">{activeConversation.app}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] mb-4">
              {messages.map((message) => (
                <div key={message.id} className={`mb-4 ${message.sender === "You" ? "text-right" : ""}`}>
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      message.sender === "You" ? "bg-primary text-primary-foreground" : "bg-secondary"
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
            <div className="flex space-x-2">
              <Input placeholder="Type your message..." />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="glassmorphism">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="mr-2 h-5 w-5 text-yellow-400" />
            AI-Powered Conversation Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="icebreakers">
            <TabsList>
              <TabsTrigger value="icebreakers">Icebreakers</TabsTrigger>
              <TabsTrigger value="flirty">Flirty</TabsTrigger>
              <TabsTrigger value="deep">Deep Conversations</TabsTrigger>
            </TabsList>
            <TabsContent value="icebreakers" className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => console.log("Suggestion clicked")}
              >
                "If you could have dinner with any historical figure, who would it be and why?"
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => console.log("Suggestion clicked")}
              >
                "What's the most adventurous thing you've ever done?"
              </Button>
            </TabsContent>
            <TabsContent value="flirty" className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => console.log("Suggestion clicked")}
              >
                "I must say, your smile is quite captivating. What's your secret?"
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => console.log("Suggestion clicked")}
              >
                "If we were to go on a spontaneous date right now, where would you want to go?"
              </Button>
            </TabsContent>
            <TabsContent value="deep" className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => console.log("Suggestion clicked")}
              >
                "What's a belief you held strongly in the past that has changed over time?"
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => console.log("Suggestion clicked")}
              >
                "If you could instantly become an expert in one subject, what would it be and why?"
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

