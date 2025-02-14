import axios, { type AxiosError } from "axios"
import { AppError } from "./errorHandler"
import type { AnalyticsData } from "@/types/analytics"

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
})

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error("API Error:", error)
    if (error.response) {
      // Handle different HTTP error codes
      if (error.response.status === 401) {
        throw new AppError("Unauthorized", 401)
      } else if (error.response.status === 404) {
        throw new AppError("Not Found", 404)
      } else if (error.response.status >= 500) {
        throw new AppError("Server Error", error.response.status)
      }
      throw new AppError(error.response.data as string, error.response.status)
    }
    throw new AppError(error.message)
  },
)

export const fetchWithRetry = async <T>(url: string, retries = 3)
: Promise<T> =>
{
  try {
    console.log(`Fetching ${url}, retries left: ${retries}`)
    const response = await api.get<T>(url)
    return response.data
  } catch (error) {
    console.error(`Error fetching ${url}:`, error)
    if (retries > 0) {
      console.log(`Retrying ${url}...`)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return fetchWithRetry(url, retries - 1)
    }
    throw error
  }
}

export const fetchAnalyticsData = async (): Promise<AnalyticsData> => {
  try {
    console.log("Fetching analytics data...")
    const response = await api.get<AnalyticsData>("/analytics")
    console.log("Analytics data fetched successfully")
    return response.data
  } catch (error) {
    console.error("Error fetching analytics data:", error)
    throw new AppError("Failed to fetch analytics data")
  }
}

export default api

