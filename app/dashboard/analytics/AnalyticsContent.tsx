"use client"

import { useState, useEffect } from "react"
import { fetchAnalyticsData } from "@/lib/api"
import AnalyticsDisplay from "./AnalyticsDisplay"
import ErrorMessage from "@/components/ErrorMessage"
import LoadingSpinner from "@/components/LoadingSpinner"
import type { AnalyticsData } from "@/types/analytics"

export default function AnalyticsContent() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        console.log("Fetching analytics data...")
        const analyticsData = await fetchAnalyticsData()
        console.log("Analytics data fetched successfully:", analyticsData)
        setData(analyticsData)
      } catch (err) {
        console.error("Error fetching analytics data:", err)
        setError(err instanceof Error ? err : new Error("An unknown error occurred"))
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={`Error loading analytics: ${error.message}`} />
  }

  if (!data) {
    return <ErrorMessage message="No analytics data available" />
  }

  return <AnalyticsDisplay data={data} />
}

