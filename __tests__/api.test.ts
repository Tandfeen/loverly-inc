import { fetchWithRetry } from "@/lib/api"
import axios from "axios"
import jest from "jest"

jest.mock("axios")

describe("api utilities", () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  test("fetchWithRetry succeeds on first try", async () => {
    const mockData = { success: true }
    ;(axios.get as jest.Mock).mockResolvedValueOnce({ data: mockData })

    const result = await fetchWithRetry("/test")
    expect(result).toEqual(mockData)
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

  test("fetchWithRetry retries on failure", async () => {
    const mockData = { success: true }
    ;(axios.get as jest.Mock)
      .mockRejectedValueOnce(new Error("Network error"))
      .mockRejectedValueOnce(new Error("Network error"))
      .mockResolvedValueOnce({ data: mockData })

    const result = await fetchWithRetry("/test")
    expect(result).toEqual(mockData)
    expect(axios.get).toHaveBeenCalledTimes(3)
  })

  test("fetchWithRetry throws error after max retries", async () => {
    ;(axios.get as jest.Mock).mockRejectedValue(new Error("Network error"))

    await expect(fetchWithRetry("/test")).rejects.toThrow("Network error")
    expect(axios.get).toHaveBeenCalledTimes(3)
  })
})

