"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { Addon } from "@/types"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, BarChart2, Settings, MessageCircle, UserCheck, Calendar, LogOut, X, PlusCircle } from "lucide-react"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  addons: Addon[]
}

const baseNavItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: BarChart2, label: "Analytics", href: "/dashboard/analytics" },
  { icon: MessageCircle, label: "Messages", href: "/dashboard/messages" },
  { icon: UserCheck, label: "Matches", href: "/dashboard/matches" },
  { icon: Calendar, label: "Date Planner", href: "/dashboard/date-planner" },
]

export function Sidebar({ open, setOpen, addons }: SidebarProps) {
  const pathname = usePathname()

  const navItems = [
    ...baseNavItems,
    ...addons.map((addon) => ({
      icon: PlusCircle,
      label: addon.name,
      href: `/dashboard/addons/${addon.id}`,
    })),
  ]

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`bg-background/50 backdrop-blur-lg border-r border-border/50 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between px-4">
          <span className="text-2xl font-bold">DateMate</span>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="px-4 mt-auto">
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-2 text-muted-foreground hover:text-accent-foreground transition-colors duration-200"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
          <button className="flex items-center space-x-2 text-muted-foreground hover:text-accent-foreground transition-colors duration-200 mt-4">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}

