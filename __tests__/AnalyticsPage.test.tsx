import { render, screen } from "@testing-library/react"
import AnalyticsPage from "../app/dashboard/analytics/page"
import { jest } from "@jest/globals" // Added import for jest

jest.mock("next/navigation", () => ({
  usePathname: () => "/dashboard/analytics",
}))

describe("AnalyticsPage", () => {
  it("renders without crashing", () => {
    render(<AnalyticsPage />)
    expect(screen.getByText("Analytics")).toBeInTheDocument()
  })

  it("displays all tabs", () => {
    render(<AnalyticsPage />)
    expect(screen.getByText("Overview")).toBeInTheDocument()
    expect(screen.getByText("Matches")).toBeInTheDocument()
    expect(screen.getByText("Engagement")).toBeInTheDocument()
  })

  it("shows correct statistics in overview", () => {
    render(<AnalyticsPage />)
    expect(screen.getByText("Total Matches")).toBeInTheDocument()
    expect(screen.getByText("1,234")).toBeInTheDocument()
    expect(screen.getByText("Response Rate")).toBeInTheDocument()
    expect(screen.getByText("68%")).toBeInTheDocument()
  })
})

