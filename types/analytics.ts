export interface AnalyticsData {
    overview: {
      totalMatches: number
      activeConversations: number
      upcomingDates: number
      matchRate: number
    }
    matchesData: MatchData[]
    messageData: MessageData[]
    appUsageData: AppUsageData[]
  }
  
  export interface MatchData {
    date: string
    count: number
  }
  
  export interface MessageData {
    date: string
    sent: number
    received: number
  }
  
  export interface AppUsageData {
    name: string
    usage: number
  }
  
  