"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
const data = [
  { date: "2025-02-19", users: 34 },
  { date: "2025-02-20", users: 34 },
  { date: "2025-02-21", users: 35 },
  { date: "2025-02-22", users: 37 },
  { date: "2025-02-23", users: 40 },
  { date: "2025-02-24", users: 43 },
  { date: "2025-02-25", users: 43 },
]

export function UserCountGraph() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value: string) =>
                new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
              }
            />
            <YAxis />
            <Tooltip
              labelFormatter={(value: string) =>
                new Date(value).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
              }
            />
            <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
