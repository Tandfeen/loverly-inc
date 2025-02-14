import { render } from "@testing-library/react"
import ErrorBoundary from "@/components/ErrorBoundary"

describe("ErrorBoundary", () => {
  const ErrorComponent = () => {
    throw new Error("Test error")
  }

  const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {})

  afterEach(() => {
    consoleErrorSpy.mockClear()
  })

  test("renders children when there's no error", () => {
    const { getByText } = render(
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <div>Child component</div>
      </ErrorBoundary>,
    )

    expect(getByText("Child component")).toBeInTheDocument()
  })

  test("renders fallback when there's an error", () => {
    const { getByText } = render(
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <ErrorComponent />
      </ErrorBoundary>,
    )

    expect(getByText("Error occurred")).toBeInTheDocument()
  })
})

