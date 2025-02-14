"use client"

import { useState, type ReactNode } from "react"
import { Sidebar } from "./components/Sidebar"
import Header from "./components/Header"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { getActiveAddons } from "@/lib/addons"

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const activeAddons = getActiveAddons()

  return (
    <div className="flex h-screen bg-gradient-to-br from-background to-background/80 overflow-hidden">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} addons={activeAddons} />
      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-transparent p-6">
          <div className="max-w-7xl mx-auto">
            <div className="glassmorphism rounded-3xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
              {children}
            </div>
          </div>
        </main>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

