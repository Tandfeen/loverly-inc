"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function MatchPredictor() {
  const [profileUrl, setProfileUrl] = useState("")
  const [prediction, setPrediction] = useState<null | number>(null)

  const predictMatch = async () => {
    // Here you would typically make an API call to your AI service
    // For now, we'll just set a mock result
    setPrediction(Math.random() * 100)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Match Predictor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="url"
          placeholder="Enter profile URL..."
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
        />
        <Button onClick={predictMatch}>Predict Match</Button>
        {prediction !== null && (
          <div>
            <div className="flex justify-between">
              <span>Match Probability:</span>
              <span>{prediction.toFixed(2)}%</span>
            </div>
            <Progress value={prediction} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

