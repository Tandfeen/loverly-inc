import { render, screen } from "@testing-library/react"
import ChatGPTAssistant from "../components/addons/chatgpt-assistant"
import ConversationAnalyzer from "../components/addons/conversation-analyzer"
import DatePlanner from "../components/addons/date-planner"
import ImageAnalyzer from "../components/addons/image-analyzer"
import MatchPredictor from "../components/addons/match-predictor"
import MultiAppChat from "../components/addons/multi-app-chat"

describe("Addon Components", () => {
  test("ChatGPT Assistant renders correctly", () => {
    render(<ChatGPTAssistant />)
    expect(screen.getByText("ChatGPT Assistant")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Ask for dating advice...")).toBeInTheDocument()
    expect(screen.getByText("Get AI Advice")).toBeInTheDocument()
  })

  test("Conversation Analyzer renders correctly", () => {
    render(<ConversationAnalyzer />)
    expect(screen.getByText("Conversation Analyzer")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Paste your conversation here...")).toBeInTheDocument()
    expect(screen.getByText("Analyze")).toBeInTheDocument()
  })

  test("Date Planner renders correctly", () => {
    render(<DatePlanner />)
    expect(screen.getByText("AI Date Planner")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter your date preferences...")).toBeInTheDocument()
    expect(screen.getByText("Generate Date Plan")).toBeInTheDocument()
  })

  test("Image Analyzer renders correctly", () => {
    render(<ImageAnalyzer />)
    expect(screen.getByText("Profile Image Analyzer")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter image URL...")).toBeInTheDocument()
    expect(screen.getByText("Analyze Image")).toBeInTheDocument()
  })

  test("Match Predictor renders correctly", () => {
    render(<MatchPredictor />)
    expect(screen.getByText("Match Predictor")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter profile URL...")).toBeInTheDocument()
    expect(screen.getByText("Predict Match")).toBeInTheDocument()
  })

  test("Multi-App Chat renders correctly", () => {
    render(<MultiAppChat />)
    expect(screen.getByText("Multi-App Chat")).toBeInTheDocument()
    expect(screen.getByText("Select app")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Type your message...")).toBeInTheDocument()
    expect(screen.getByText("Send")).toBeInTheDocument()
  })
})

