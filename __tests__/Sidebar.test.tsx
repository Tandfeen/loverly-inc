import { render, screen } from "@testing-library/react"
import Sidebar from "../app/dashboard/components/Sidebar"
import { jest } from "@jest/globals" // Added import for jest

jest.mock("next/navigation", () => ({
  usePathname: () => "/dashboard",
}))

describe("Sidebar", () => {
  it("renders without crashing", () => {
    render(<Sidebar open={true} setOpen={() => {}} />)
    expect(screen.getByText("DateMate")).toBeInTheDocument()
  })

  it("displays all navigation items", () => {
    render(<Sidebar open={true} setOpen={() => {}} />)
    expect(screen.getByText("Dashboard")).toBeInTheDocument()
    expect(screen.getByText("Analytics")).toBeInTheDocument()
    expect(screen.getByText("Messages")).toBeInTheDocument()
    expect(screen.getByText("Matches")).toBeInTheDocument()
    expect(screen.getByText("Date Planner")).toBeInTheDocument()
    expect(screen.getByText("Settings")).toBeInTheDocument()
  })
})

