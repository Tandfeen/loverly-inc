import { fetchWithRetry, fetchAnalyticsData } from "./api"
import axios from "axios"
import { AppError } from "./errorHandler"

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

describe("API functions", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe("fetchWithRetry", () => {
    it("should return data on successful request", async () => {
      const mockData = { success: true }
      mockedAxios.get.mockResolvedValueOnce({ data: mockData })

      const result = await fetchWithRetry("/test")
      expect(result).toEqual(mockData)
      expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    })

    it("should retry on failure and succeed", async () => {
      const mockData = { success: true }
      mockedAxios.get
        .mockRejectedValueOnce(new Error("Network error"))
        .mockRejectedValueOnce(new Error("Network error"))
        .mockResolvedValueOnce({ data: mockData })

      const result = await fetchWithRetry("/test")
      expect(result).toEqual(mockData)
      expect(mockedAxios.get).toHaveBeenCalledTimes(3)
    })

    it("should throw an error after max retries", async () => {
      mockedAxios.get.mockRejectedValue(new Error("Network error"))

      await expect(fetchWithRetry("/test")).rejects.toThrow("Network error")
      expect(mockedAxios.get).toHaveBeenCalledTimes(3)
    })
  })

  describe("fetchAnalyticsData", () => {
    it("should return analytics data on successful request", async () => {
      const mockData = { totalMatches: 100, activeConversations: 50 }
      mockedAxios.get.mockResolvedValueOnce({ data: mockData })

      const result = await fetchAnalyticsData()
      expect(result).toEqual(mockData)
      expect(mockedAxios.get).toHaveBeenCalledWith("/analytics")
    })

    it("should throw an AppError on failed request", async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error("API error"))

      await expect(fetchAnalyticsData()).rejects.toThrow(AppError)
      await expect(fetchAnalyticsData()).rejects.toThrow("Failed to fetch analytics data")
    })
  })
})

