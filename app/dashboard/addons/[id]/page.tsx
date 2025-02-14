"use client"
import { useParams } from "next/navigation"
import { availableAddons } from "@/lib/addons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function AddonPage() {
  const { id } = useParams()
  const addon = availableAddons.find((a) => a.id === id)

  if (!addon) {
    return <div>Addon not found</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{addon.name}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Installed</span>
            <Switch checked={addon.isInstalled} />
          </div>
          <div className="flex items-center justify-between">
            <span>Active</span>
            <Switch checked={addon.isActive} />
          </div>
          <Button className="w-full">{addon.isInstalled ? "Uninstall" : "Install"}</Button>
        </CardContent>
      </Card>
    </div>
  )
}

