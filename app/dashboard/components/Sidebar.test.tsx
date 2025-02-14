import { render, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { usePathname } from "next/navigation"
import { jest } from "@jest/globals"

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}))

describe("Sidebar", () => {
  beforeEach(() => {
    ;(usePathname as jest.Mock).mockReturnValue("/dashboard")
  })

  it("renders correctly", () => {
    render(<Sidebar open={true} setOpen={() => {}} addons={[]} />)

    expect(screen.getByText("DateMate")).toBeInTheDocument()
    expect(screen.getByText("Dashboard")).toBeInTheDocument()
    expect(screen.getByText("Analytics")).toBeInTheDocument()
    expect(screen.getByText("Messages")).toBeInTheDocument()
    expect(screen.getByText("Matches")).toBeInTheDocument()
    expect(screen.getByText("Date Planner")).toBeInTheDocument()
    expect(screen.getByText("Settings")).toBeInTheDocument()
    expect(screen.getByText("Logout")).toBeInTheDocument()
  })

  it("highlights the active page", () => {
    render(<Sidebar open={true} setOpen={() => {}} addons={[]} />)

    const dashboardLink = screen.getByText("Dashboard").closest("a")
    expect(dashboardLink).toHaveClass("bg-primary")
  })

  it("renders addon links", () => {
    const mockAddons = [
      { id: "addon1", name: "Addon 1", category: "feature" },
      { id: "addon2", name: "Addon 2", category: "ai" },
    ]

    render(<Sidebar open={true} setOpen={() => {}} addons={mockAddons} />)

    expect(screen.getByText("Addon 1")).toBeInTheDocument()
    expect(screen.getByText("Addon 2")).toBeInTheDocument()
  })
})

