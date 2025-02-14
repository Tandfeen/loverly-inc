"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import type { MessageData } from "@/types/analytics"

interface LineChartProps {
  data: MessageData[]
}

export default function LineChartComponent({ data }: LineChartProps) {
  console.log("Rendering LineChart with data:", data)
  if (!data || data.length === 0) {
    return <div>No data available for Line Chart</div>
  }
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sent" stroke="#8884d8" />
        <Line type="monotone" dataKey="received" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

