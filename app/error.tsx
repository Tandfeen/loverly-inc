"use client"

import { useEffect } from "react"
import * as Sentry from "@sentry/nextjs"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error("Error:", error)
    Sentry.captureException(error)
  }, [error])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}

