import { render, screen, fireEvent } from "@testing-library/react"
import DiagnosticsPage from "../app/dashboard/diagnostics/page"

describe("DiagnosticsPage", () => {
  it("renders without crashing", () => {
    render(<DiagnosticsPage />)
    expect(screen.getByText("Diagnostics & Performance")).toBeInTheDocument()
  })

  it("displays Run Diagnostics button", () => {
    render(<DiagnosticsPage />)
    expect(screen.getByText("Run Diagnostics")).toBeInTheDocument()
  })

  it("shows performance chart", () => {
    render(<DiagnosticsPage />)
    expect(screen.getByText("Page Load Performance")).toBeInTheDocument()
  })

  it("runs diagnostics when button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log")
    render(<DiagnosticsPage />)
    fireEvent.click(screen.getByText("Run Diagnostics"))
    expect(consoleSpy).toHaveBeenCalledWith("Running diagnostics...")
  })
})

