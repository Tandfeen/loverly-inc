import { render, screen } from "@testing-library/react"
import { DashboardCard } from "./DashboardCard"
import { Users } from "lucide-react"

describe("DashboardCard", () => {
  it("renders correctly with positive change", () => {
    render(<DashboardCard title="Total Matches" value={100} icon={<Users data-testid="users-icon" />} change={5} />)

    expect(screen.getByText("Total Matches")).toBeInTheDocument()
    expect(screen.getByText("100")).toBeInTheDocument()
    expect(screen.getByTestId("users-icon")).toBeInTheDocument()
    expect(screen.getByText("5%")).toHaveClass("text-green-500")
  })

  it("renders correctly with negative change", () => {
    render(
      <DashboardCard title="Active Conversations" value={50} icon={<Users data-testid="users-icon" />} change={-3} />,
    )

    expect(screen.getByText("Active Conversations")).toBeInTheDocument()
    expect(screen.getByText("50")).toBeInTheDocument()
    expect(screen.getByTestId("users-icon")).toBeInTheDocument()
    expect(screen.getByText("3%")).toHaveClass("text-red-500")
  })
})

