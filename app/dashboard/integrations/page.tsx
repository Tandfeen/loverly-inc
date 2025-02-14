"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const initialIntegrations = [
  { id: "tinder", name: "Tinder", apiKey: "", isConnected: false },
  { id: "bumble", name: "Bumble", apiKey: "", isConnected: false },
  { id: "hinge", name: "Hinge", apiKey: "", isConnected: false },
  { id: "okcupid", name: "OkCupid", apiKey: "", isConnected: false },
  { id: "coffee-meets-bagel", name: "Coffee Meets Bagel", apiKey: "", isConnected: false },
]

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState(initialIntegrations)

  const handleApiKeyChange = (id: string, apiKey: string) => {
    setIntegrations(
      integrations.map((integration) => (integration.id === id ? { ...integration, apiKey } : integration)),
    )
  }

  const handleConnect = (id: string) => {
    setIntegrations(
      integrations.map((integration) => (integration.id === id ? { ...integration, isConnected: true } : integration)),
    )
    // Here you would typically make an API call to connect the app
    console.log(`Connecting to ${id} with API key: ${integrations.find((i) => i.id === id)?.apiKey}`)
  }

  const handleDisconnect = (id: string) => {
    setIntegrations(
      integrations.map((integration) =>
        integration.id === id ? { ...integration, isConnected: false, apiKey: "" } : integration,
      ),
    )
    // Here you would typically make an API call to disconnect the app
    console.log(`Disconnecting from ${id}`)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">App Integrations</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <Card key={integration.id}>
            <CardHeader>
              <CardTitle>{integration.name}</CardTitle>
              <CardDescription>Manage your {integration.name} integration</CardDescription>
            </CardHeader>
            <CardContent>
              {integration.isConnected ? (
                <>
                  <p className="mb-4">Connected</p>
                  <Button onClick={() => handleDisconnect(integration.id)} variant="destructive">
                    Disconnect
                  </Button>
                </>
              ) : (
                <>
                  <Label htmlFor={`${integration.id}-api-key`}>API Key</Label>
                  <Input
                    id={`${integration.id}-api-key`}
                    value={integration.apiKey}
                    onChange={(e) => handleApiKeyChange(integration.id, e.target.value)}
                    className="mb-4"
                  />
                  <Button onClick={() => handleConnect(integration.id)} disabled={!integration.apiKey}>
                    Connect
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

