"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { format } from "date-fns"

const rawData = [
  { date: "2025-02-15", users: 40 },
  { date: "2025-02-16", users: 40 },
  { date: "2025-02-17", users: 40 },
  { date: "2025-02-18", users: 40 },
  { date: "2025-02-19", users: 41 },
  { date: "2025-02-20", users: 42 },
  { date: "2025-02-21", users: 42 },
  { date: "2025-02-22", users: 42 },
  { date: "2025-02-23", users: 42 },
  { date: "2025-02-24", users: 42 },
  { date: "2025-02-25", users: 44 },
  { date: "2025-02-26", users: 46 },
  { date: "2025-02-27", users: 46 },
  { date: "2025-02-28", users: 47 },
  { date: "2025-03-01", users: 47 },
  { date: "2025-03-02", users: 50 },
  { date: "2025-03-03", users: 54 },
  { date: "2025-03-04", users: 59 },
  { date: "2025-03-05", users: 60 },
  { date: "2025-03-06", users: 62 },
  { date: "2025-03-07", users: 64 },
  { date: "2025-03-08", users: 68 },
  { date: "2025-03-09", users: 71 },
  { date: "2025-03-10", users: 73 },
  { date: "2025-03-11", users: 75 },
  { date: "2025-03-12", users: 76 },
  { date: "2025-03-13", users: 78 },
  { date: "2025-03-14", users: 78 },
  { date: "2025-03-15", users: 78 },
  { date: "2025-03-16", users: 80 },
  { date: "2025-03-17", users: 81 },
  { date: "2025-03-18", users: 83 },
  { date: "2025-03-19", users: 85 },
  { date: "2025-03-20", users: 86 },
  { date: "2025-03-21", users: 88 },
  { date: "2025-03-22", users: 89 },
  { date: "2025-03-23", users: 90 },
  { date: "2025-03-24", users: 91 },
  { date: "2025-03-25", users: 92 },
  { date: "2025-03-26", users: 94 },
  { date: "2025-03-27", users: 95 },
  { date: "2025-03-28", users: 96 },
  { date: "2025-03-29", users: 98 },
  { date: "2025-03-30", users: 102 },
  { date: "2025-03-31", users: 102 },
  { date: "2025-04-01", users: 102 },
  { date: "2025-04-02", users: 102 },
  { date: "2025-04-03", users: 102 },
  { date: "2025-04-04", users: 102 },
  { date: "2025-04-05", users: 102 },
  { date: "2025-04-06", users: 102 },
  { date: "2025-04-07", users: 102 },
  { date: "2025-04-08", users: 105 },
  { date: "2025-04-09", users: 105 },
  { date: "2025-04-10", users: 105 },
  { date: "2025-04-11", users: 105 },
  { date: "2025-04-12", users: 109 },
  { date: "2025-04-13", users: 110 },
  { date: "2025-04-14", users: 113 },
  { date: "2025-04-15", users: 113 },
  { date: "2025-04-16", users: 115 },
  { date: "2025-04-17", users: 116 },
  { date: "2025-04-18", users: 117 },
  { date: "2025-04-19", users: 117 },
  { date: "2025-04-20", users: 118 },
  { date: "2025-04-21", users: 120 },
  { date: "2025-04-22", users: 124 },
  { date: "2025-04-23", users: 127 },
  { date: "2025-04-24", users: 131 },
  { date: "2025-04-25", users: 134 },
  { date: "2025-04-26", users: 134 },
  { date: "2025-04-27", users: 136 },
  { date: "2025-04-28", users: 139 },
  { date: "2025-04-29", users: 140 },
  { date: "2025-04-30", users: 144 },
  { date: "2025-05-01", users: 145 },
  { date: "2025-05-02", users: 147 },
]



const generateDateRangeData = (startDate: Date, endDate: Date) => {
  const result = []
  const map = new Map(rawData.map((item) => [item.date, item.users]))
  let lastAvailableValue = 0

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const formattedDate = d.toISOString().split("T")[0]
    if (map.has(formattedDate)) {
      lastAvailableValue = map.get(formattedDate)!
    }
    result.push({ date: formattedDate, users: lastAvailableValue })
  }

  return result
}


export function UserCountGraph() {
  const today = new Date()

   const tenDaysAgo = new Date()
  tenDaysAgo.setDate(today.getDate() - 10)

   const [startDate, setStartDate] = useState<Date>(tenDaysAgo)
  const [endDate, setEndDate] = useState<Date>(today)

  const filteredData = useMemo(() => generateDateRangeData(startDate, endDate), [startDate, endDate])

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-[400px]">
        <div className="flex gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date || tenDaysAgo)}
              maxDate={endDate}
            dateFormat="dd-MMM" // Custom format: 21-Feb
              className="border rounded p-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date || today)}
              minDate={startDate}
              maxDate={today}
            dateFormat="dd-MMM" // Custom format: 21-Feb
              className="border rounded p-2 w-full"
            />
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value: string) =>
              format(new Date(value), "dd-MMM") // Format XAxis date as 21-Feb
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
