"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function ImageAnalyzer() {
  const [imageUrl, setImageUrl] = useState("")
  const [analysis, setAnalysis] = useState<null | { attractiveness: number; quality: number }>(null)

  const analyzeImage = async () => {
    // Here you would typically make an API call to your image analysis service
    // For now, we'll just set mock results
    setAnalysis({
      attractiveness: Math.random() * 100,
      quality: Math.random() * 100,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Image Analyzer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="url"
          placeholder="Enter image URL..."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Button onClick={analyzeImage}>Analyze Image</Button>
        {analysis && (
          <div className="space-y-2">
            <div>
              <div className="flex justify-between">
                <span>Attractiveness:</span>
                <span>{analysis.attractiveness.toFixed(2)}%</span>
              </div>
              <Progress value={analysis.attractiveness} />
            </div>
            <div>
              <div className="flex justify-between">
                <span>Image Quality:</span>
                <span>{analysis.quality.toFixed(2)}%</span>
              </div>
              <Progress value={analysis.quality} />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

