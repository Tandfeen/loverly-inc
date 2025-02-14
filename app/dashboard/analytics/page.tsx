import { Suspense } from "react"
import dynamic from "next/dynamic"
import LoadingSpinner from "@/components/LoadingSpinner"
import ErrorBoundary from "@/components/ErrorBoundary"

const DynamicAnalyticsContent = dynamic(() => import("./AnalyticsContent"), {
  loading: () => <LoadingSpinner />,
})

export default function AnalyticsPage() {
  console.log("Rendering AnalyticsPage")
  return (
    <ErrorBoundary fallback={<div>Something went wrong in the Analytics page.</div>}>
      <Suspense fallback={<LoadingSpinner />}>
        <DynamicAnalyticsContent />
      </Suspense>
    </ErrorBoundary>
  )
}

