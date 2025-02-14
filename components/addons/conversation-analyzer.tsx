"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

export default function ConversationAnalyzer() {
  const [conversation, setConversation] = useState("")
  const [analysis, setAnalysis] = useState<null | { sentiment: number; engagement: number }>(null)

  const analyzeConversation = async () => {
    // Here you would typically make an API call to your sentiment analysis service
    // For now, we'll just set mock results
    setAnalysis({
      sentiment: Math.random() * 100,
      engagement: Math.random() * 100,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversation Analyzer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Paste your conversation here..."
          value={conversation}
          onChange={(e) => setConversation(e.target.value)}
        />
        <Button onClick={analyzeConversation}>Analyze</Button>
        {analysis && (
          <div className="space-y-2">
            <div>
              <div className="flex justify-between">
                <span>Sentiment:</span>
                <span>{analysis.sentiment.toFixed(2)}%</span>
              </div>
              <Progress value={analysis.sentiment} />
            </div>
            <div>
              <div className="flex justify-between">
                <span>Engagement:</span>
                <span>{analysis.engagement.toFixed(2)}%</span>
              </div>
              <Progress value={analysis.engagement} />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

