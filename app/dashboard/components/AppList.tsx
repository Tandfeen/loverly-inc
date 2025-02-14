"use client"

import Image from "next/image"
import Link from "next/link"

const apps = [
  { name: "Tinder", logo: "/tinder-logo.png", color: "from-orange-400 to-pink-500" },
  { name: "Bumble", logo: "/bumble-logo.png", color: "from-yellow-300 to-yellow-500" },
  { name: "Hinge", logo: "/hinge-logo.png", color: "from-pink-400 to-rose-500" },
  { name: "OkCupid", logo: "/okcupid-logo.png", color: "from-blue-400 to-purple-500" },
  { name: "Coffee Meets Bagel", logo: "/cmb-logo.png", color: "from-red-400 to-red-600" },
]

export function AppList() {
  return (
    <div className="horizontal-scroll py-4 -mx-6 px-6">
      {apps.map((app) => (
        <Link href={`/dashboard/app/${app.name.toLowerCase()}`} key={app.name} className="mr-4 last:mr-0">
          <div
            className={`bg-gradient-to-r ${app.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4 w-72`}
          >
            <Image
              src={app.logo || "/placeholder.svg"}
              alt={`${app.name} logo`}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h3 className="text-2xl font-bold text-white">{app.name}</h3>
              <p className="text-white/80">Click to manage</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

