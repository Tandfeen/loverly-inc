"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useTheme } from "next-themes"

const data = [
  { name: "Jan", matches: 4000, messages: 2400, dates: 2400 },
  { name: "Feb", matches: 3000, messages: 1398, dates: 2210 },
  { name: "Mar", matches: 2000, messages: 9800, dates: 2290 },
  { name: "Apr", matches: 2780, messages: 3908, dates: 2000 },
  { name: "May", matches: 1890, messages: 4800, dates: 2181 },
  { name: "Jun", matches: 2390, messages: 3800, dates: 2500 },
  { name: "Jul", matches: 3490, messages: 4300, dates: 2100 },
]

export function AdvancedChart() {
  const [activeData, setActiveData] = useState("matches")
  const { theme } = useTheme()

  const isDark = theme === "dark"

  return (
    <Card className="glassmorphism">
      <CardHeader>
        <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
          <span className="glow-text">Dating Activity Overview</span>
          <div className="flex flex-wrap gap-2">
            {["matches", "messages", "dates"].map((item) => (
              <button
                key={item}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activeData === item ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
                onClick={() => setActiveData(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#ffffff20" : "#00000020"} />
            <XAxis dataKey="name" stroke={isDark ? "#ffffff60" : "#00000060"} />
            <YAxis stroke={isDark ? "#ffffff60" : "#00000060"} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
                border: "none",
                borderRadius: "4px",
                color: isDark ? "#ffffff" : "#000000",
              }}
            />
            <Line
              type="monotone"
              dataKey={activeData}
              stroke="url(#colorGradient)"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

