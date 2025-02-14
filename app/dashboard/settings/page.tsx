"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Account Settings</h2>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <div className="flex items-center space-x-2">
            <Switch id="email-notifications" />
            <Label htmlFor="email-notifications">Email Notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="push-notifications" />
            <Label htmlFor="push-notifications">Push Notifications</Label>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Connected Apps</h2>
          <div className="flex items-center justify-between">
            <span>Tinder</span>
            <Button variant="outline">Disconnect</Button>
          </div>
          <div className="flex items-center justify-between">
            <span>Bumble</span>
            <Button variant="outline">Disconnect</Button>
          </div>
          <div className="flex items-center justify-between">
            <span>Hinge</span>
            <Button variant="outline">Disconnect</Button>
          </div>
        </div>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}

