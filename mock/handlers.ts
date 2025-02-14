import { rest } from "msw"

export const handlers = [
  rest.get("/api/dashboard-data", (req, res, ctx) => {
    return res(
      ctx.json({
        totalMatches: 324,
        activeConversations: 18,
        upcomingDates: 3,
        matchRate: 12.5,
        matchesChange: 5,
        conversationsChange: -2,
        datesChange: 1,
        matchRateChange: 0.5,
      }),
    )
  }),

  rest.get("/api/analytics", (req, res, ctx) => {
    return res(
      ctx.json({
        overview: {
          totalMatches: 1000,
          activeConversations: 50,
          upcomingDates: 10,
          matchRate: 15,
        },
        matchesData: [
          { date: "2023-06-01", count: 10 },
          { date: "2023-06-02", count: 15 },
          { date: "2023-06-03", count: 8 },
        ],
        messageData: [
          { date: "2023-06-01", sent: 50, received: 45 },
          { date: "2023-06-02", sent: 60, received: 55 },
          { date: "2023-06-03", sent: 45, received: 40 },
        ],
        appUsageData: [
          { name: "Tinder", usage: 45 },
          { name: "Bumble", usage: 30 },
          { name: "Hinge", usage: 25 },
        ],
      }),
    )
  }),
]

