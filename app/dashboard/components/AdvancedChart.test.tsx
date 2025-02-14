import { render, screen, fireEvent } from "@testing-library/react"
import { AdvancedChart } from "./AdvancedChart"
import { ThemeProvider } from "next-themes"

// Mock the recharts library
jest.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  LineChart: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Line: () => null,
  XAxis: () => null,
  YAxis: () => null,
  CartesianGrid: () => null,
  Tooltip: () => null,
}))

describe("AdvancedChart", () => {
  it("renders correctly and allows switching between data types", () => {
    render(
      <ThemeProvider>
        <AdvancedChart />
      </ThemeProvider>,
    )

    expect(screen.getByText("Dating Activity Overview")).toBeInTheDocument()
    expect(screen.getByText("Matches")).toBeInTheDocument()
    expect(screen.getByText("Messages")).toBeInTheDocument()
    expect(screen.getByText("Dates")).toBeInTheDocument()

    // Check if 'Matches' is initially active
    expect(screen.getByText("Matches")).toHaveClass("bg-primary")

    // Switch to 'Messages'
    fireEvent.click(screen.getByText("Messages"))
    expect(screen.getByText("Messages")).toHaveClass("bg-primary")

    // Switch to 'Dates'
    fireEvent.click(screen.getByText("Dates"))
    expect(screen.getByText("Dates")).toHaveClass("bg-primary")
  })
})

