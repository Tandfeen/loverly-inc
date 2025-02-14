"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import type { MatchData } from "@/types/analytics"

interface BarChartProps {
  data: MatchData[]
}

export default function BarChartComponent({ data }: BarChartProps) {
  console.log("Rendering BarChart with data:", data)
  if (!data || data.length === 0) {
    return <div>No data available for Bar Chart</div>
  }
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

