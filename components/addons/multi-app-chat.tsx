"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MultiAppChat() {
  const [selectedApp, setSelectedApp] = useState("")
  const [message, setMessage] = useState("")
  const [chats, setChats] = useState<{ app: string; message: string }[]>([])

  const sendMessage = () => {
    if (selectedApp && message) {
      setChats([...chats, { app: selectedApp, message }])
      setMessage("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Multi-App Chat</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select onValueChange={setSelectedApp}>
          <SelectTrigger>
            <SelectValue placeholder="Select app" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tinder">Tinder</SelectItem>
            <SelectItem value="bumble">Bumble</SelectItem>
            <SelectItem value="hinge">Hinge</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex space-x-2">
          <Input placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button onClick={sendMessage}>Send</Button>
        </div>
        <div className="space-y-2">
          {chats.map((chat, index) => (
            <div key={index} className="flex space-x-2">
              <span className="font-bold">{chat.app}:</span>
              <span>{chat.message}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

