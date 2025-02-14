"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { availableAddons, toggleAddonInstallation, toggleAddonActive } from "@/lib/addons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AddonsPage() {
  const [addons, setAddons] = useState(availableAddons)

  const handleInstallToggle = (id: string) => {
    toggleAddonInstallation(id)
    setAddons([...addons])
  }

  const handleActiveToggle = (id: string) => {
    toggleAddonActive(id)
    setAddons([...addons])
  }

  const categories = ["All", "AI", "App", "Feature"]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Addons</h1>
      <Tabs defaultValue="All">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {addons
                .filter((addon) => category === "All" || addon.category === category.toLowerCase())
                .map((addon) => (
                  <Card key={addon.id}>
                    <CardHeader>
                      <CardTitle>{addon.name}</CardTitle>
                      <CardDescription>{addon.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <span>Installed</span>
                        <Switch checked={addon.isInstalled} onCheckedChange={() => handleInstallToggle(addon.id)} />
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span>Active</span>
                        <Switch
                          checked={addon.isActive}
                          onCheckedChange={() => handleActiveToggle(addon.id)}
                          disabled={!addon.isInstalled}
                        />
                      </div>
                      {addon.setupRequired && (
                        <Button className="w-full" disabled={!addon.isInstalled}>
                          Setup
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

