"use client"

import { useState } from "react"
import { MatchCard } from "../components/MatchCard"
import { FullProfileView } from "../components/FullProfileView"

const matches = [
  {
    id: "1",
    name: "Alice",
    age: 28,
    location: "New York, NY",
    photo: "/alice.jpg",
    badges: ["Traveler", "Foodie", "Yoga"],
    bio: "Adventure seeker and coffee enthusiast. Let's explore the city together!",
    interests: ["Hiking", "Photography", "Cooking"],
    compatibility: 85,
    platforms: [
      { name: "Tinder", username: "alice_adventure", matchDate: "2023-05-15", interactionRate: 75 },
      { name: "Bumble", username: "alice28", matchDate: "2023-05-18", interactionRate: 80 },
    ],
  },
  {
    id: "2",
    name: "Bob",
    age: 32,
    location: "Los Angeles, CA",
    photo: "/bob.jpg",
    badges: ["Musician", "Dog Lover", "Tech Geek"],
    bio: "Software engineer by day, guitarist by night. Looking for someone to jam with!",
    interests: ["Coding", "Guitar", "Hiking"],
    compatibility: 78,
    platforms: [{ name: "Hinge", username: "bob_codes", matchDate: "2023-05-20", interactionRate: 70 }],
  },
  // Add more matches as needed
]

export default function MatchesPage() {
  const [selectedProfile, setSelectedProfile] = useState<(typeof matches)[0] | null>(null)

  const handleLike = (id: string) => {
    console.log(`Liked profile with id: ${id}`)
    // Implement like functionality
  }

  const handlePass = (id: string) => {
    console.log(`Passed profile with id: ${id}`)
    // Implement pass functionality
  }

  const handleViewProfile = (id: string) => {
    const profile = matches.find((match) => match.id === id)
    if (profile) {
      setSelectedProfile(profile)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold glow-text">Your Matches</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            onLike={handleLike}
            onPass={handlePass}
            onViewProfile={handleViewProfile}
          />
        ))}
      </div>
      {selectedProfile && (
        <FullProfileView
          isOpen={!!selectedProfile}
          onClose={() => setSelectedProfile(null)}
          profile={selectedProfile}
        />
      )}
    </div>
  )
}

