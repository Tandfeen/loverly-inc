"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const DiagnosticsPage = () => {
  const [performance, setPerformance] = useState<PerformanceEntry[]>([])
  const [memory, setMemory] = useState<any>(null)

  useEffect(() => {
    // Collect initial performance data
    collectPerformanceData()
  }, [])

  const collectPerformanceData = () => {
    const perfData = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
    setPerformance([
      { name: "DNS", value: perfData.domainLookupEnd - perfData.domainLookupStart },
      { name: "TCP", value: perfData.connectEnd - perfData.connectStart },
      { name: "Request", value: perfData.responseStart - perfData.requestStart },
      { name: "Response", value: perfData.responseEnd - perfData.responseStart },
      { name: "DOM Processing", value: perfData.domComplete - perfData.domInteractive },
      { name: "Load Event", value: perfData.loadEventEnd - perfData.loadEventStart },
    ])

    // @ts-ignore
    if (performance.memory) {
      // @ts-ignore
      setMemory(performance.memory)
    }
  }

  const runDiagnostics = () => {
    console.log("Running diagnostics...")
    // Here you would typically run more comprehensive tests
    // For now, we'll just recollect performance data
    collectPerformanceData()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Diagnostics & Performance</h1>
      <Button onClick={runDiagnostics}>Run Diagnostics</Button>
      <Card>
        <CardHeader>
          <CardTitle>Page Load Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      {memory && (
        <Card>
          <CardHeader>
            <CardTitle>Memory Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Used JS Heap Size: {Math.round(memory.usedJSHeapSize / (1024 * 1024))} MB</p>
            <p>Total JS Heap Size: {Math.round(memory.totalJSHeapSize / (1024 * 1024))} MB</p>
            <p>JS Heap Size Limit: {Math.round(memory.jsHeapSizeLimit / (1024 * 1024))} MB</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default DiagnosticsPage

