"use client"

import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Dating App Manager</h1>
      <Link href="/dashboard" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded">
        Go to Dashboard
      </Link>
    </main>
  )
}

