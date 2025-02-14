"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, Send } from "lucide-react"

export function DatingCoach() {
  const [question, setQuestion] = useState("")
  const [advice, setAdvice] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to your AI service
    // For now, we'll just set a mock response
    setAdvice(`Here's some advice about "${question}": ...`)
    setQuestion("")
  }

  return (
    <Card className="glassmorphism">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Zap className="mr-2 h-5 w-5 text-yellow-400" />
          AI Dating Coach
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Ask for dating advice..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button type="submit">
            <Send className="mr-2 h-4 w-4" />
            Get Advice
          </Button>
        </form>
        {advice && (
          <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
            <p className="font-semibold">AI Coach says:</p>
            <p>{advice}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

