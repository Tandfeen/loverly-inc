"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, X } from "lucide-react"

interface MatchCardProps {
  match: {
    id: string
    name: string
    age: number
    location: string
    photo: string
    badges: string[]
  }
  onLike: (id: string) => void
  onPass: (id: string) => void
  onViewProfile: (id: string) => void
}

export function MatchCard({ match, onLike, onPass, onViewProfile }: MatchCardProps) {
  return (
    <Card
      className="w-full max-w-sm mx-auto cursor-pointer transition-all duration-300 hover:shadow-lg"
      onClick={() => onViewProfile(match.id)}
    >
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={match.photo} alt={match.name} />
            <AvatarFallback>{match.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">
              {match.name}, {match.age}
            </h3>
            <p className="text-sm text-muted-foreground">{match.location}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {match.badges.map((badge, index) => (
            <Badge key={index} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              onPass(match.id)
            }}
          >
            <X className="mr-2 h-4 w-4" />
            Pass
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation()
              onLike(match.id)
            }}
          >
            <Heart className="mr-2 h-4 w-4" />
            Like
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

