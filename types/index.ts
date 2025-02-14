import type React from "react"

export interface Addon {
  id: string
  name: string
  description: string
  category: "ai" | "api" | "app" | "feature" | "module"
  isInstalled: boolean
  isActive: boolean
  setupRequired: boolean
}

export interface AddonModule {
  id: string
  name: string
  component: React.ComponentType<any>
  settings?: React.ComponentType<any>
}

export interface AppIntegration {
  id: string
  name: string
  apiKey: string
  isConnected: boolean
}

