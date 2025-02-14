import { AppError, handleError } from "@/lib/errorHandler"
import * as Sentry from "@sentry/nextjs"

jest.mock("@sentry/nextjs")

describe("errorHandler", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test("AppError constructor sets properties correctly", () => {
    const error = new AppError("Test error", 400, true)
    expect(error.message).toBe("Test error")
    expect(error.statusCode).toBe(400)
    expect(error.isOperational).toBe(true)
  })

  test("handleError logs operational errors", () => {
    const error = new AppError("Operational error", 400)
    handleError(error)
    expect(console.error).toHaveBeenCalledWith("Operational error:", error)
    expect(Sentry.captureException).not.toHaveBeenCalled()
  })

  test("handleError captures non-operational errors with Sentry", () => {
    const error = new Error("Unhandled error")
    handleError(error)
    expect(console.error).toHaveBeenCalledWith("Unhandled error:", error)
    expect(Sentry.captureException).toHaveBeenCalledWith(error)
  })
})

