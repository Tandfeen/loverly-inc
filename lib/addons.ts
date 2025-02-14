import type { Addon } from "@/types"

export const availableAddons: Addon[] = [
  {
    id: "tinder-integration",
    name: "Tinder Integration",
    description: "Connect and manage your Tinder account",
    category: "app",
    isInstalled: false,
    isActive: false,
    setupRequired: true,
  },
  {
    id: "bumble-integration",
    name: "Bumble Integration",
    description: "Connect and manage your Bumble account",
    category: "app",
    isInstalled: false,
    isActive: false,
    setupRequired: true,
  },
  {
    id: "hinge-integration",
    name: "Hinge Integration",
    description: "Connect and manage your Hinge account",
    category: "app",
    isInstalled: false,
    isActive: false,
    setupRequired: true,
  },
  {
    id: "okcupid-integration",
    name: "OkCupid Integration",
    description: "Connect and manage your OkCupid account",
    category: "app",
    isInstalled: false,
    isActive: false,
    setupRequired: true,
  },
  {
    id: "coffee-meets-bagel-integration",
    name: "Coffee Meets Bagel Integration",
    description: "Connect and manage your Coffee Meets Bagel account",
    category: "app",
    isInstalled: false,
    isActive: false,
    setupRequired: true,
  },
  {
    id: "chatgpt-assistant",
    name: "ChatGPT Assistant",
    description: "AI-powered chat assistance for your conversations",
    category: "ai",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "profile-optimizer",
    name: "Profile Optimizer",
    description: "AI-driven suggestions to improve your dating profile",
    category: "feature",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "conversation-analyzer",
    name: "Conversation Analyzer",
    description: "Analyze your conversations for sentiment and engagement",
    category: "feature",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "date-planner",
    name: "AI Date Planner",
    description: "Get AI-powered suggestions for date ideas",
    category: "feature",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "image-analyzer",
    name: "Profile Image Analyzer",
    description: "Get feedback on your profile images using AI",
    category: "feature",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "match-predictor",
    name: "Match Predictor",
    description: "AI-powered predictions for potential matches",
    category: "ai",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "multi-app-chat",
    name: "Multi-App Chat",
    description: "Manage conversations from multiple apps in one place",
    category: "feature",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "icebreaker-generator",
    name: "Icebreaker Generator",
    description: "Generate creative icebreakers for your matches",
    category: "feature",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "compatibility-calculator",
    name: "Compatibility Calculator",
    description: "Calculate compatibility scores with your matches",
    category: "feature",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "profile-visitor-tracker",
    name: "Profile Visitor Tracker",
    description: "Track who's viewed your profile across different apps",
    category: "feature",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "message-scheduler",
    name: "Message Scheduler",
    description: "Schedule messages to be sent at optimal times",
    category: "feature",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "dating-coach",
    name: "AI Dating Coach",
    description: "Get personalized dating advice from an AI coach",
    category: "ai",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "red-flag-detector",
    name: "Red Flag Detector",
    description: "AI-powered detection of potential red flags in conversations",
    category: "ai",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "personality-insights",
    name: "Personality Insights",
    description: "Gain insights into your matches' personalities based on their profiles and messages",
    category: "ai",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
  {
    id: "location-based-suggestions",
    name: "Location-based Suggestions",
    description: "Get date ideas and match suggestions based on your location",
    category: "feature",
    isInstalled: false,
    isActive: false,
    setupRequired: false,
  },
]

export function getInstalledAddons(): Addon[] {
  return availableAddons.filter((addon) => addon.isInstalled)
}

export function getActiveAddons(): Addon[] {
  return availableAddons.filter((addon) => addon.isActive)
}

export function toggleAddonInstallation(id: string): void {
  const addon = availableAddons.find((a) => a.id === id)
  if (addon) {
    addon.isInstalled = !addon.isInstalled
    if (!addon.isInstalled) {
      addon.isActive = false
    }
  }
}

export function toggleAddonActive(id: string): void {
  const addon = availableAddons.find((a) => a.id === id)
  if (addon && addon.isInstalled) {
    addon.isActive = !addon.isActive
  }
}

export function getAddonById(id: string): Addon | undefined {
  return availableAddons.find((addon) => addon.id === id)
}

