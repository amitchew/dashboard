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
  { date: "2025-03-01", users: 48 },
  { date: "2025-03-02", users: 49 },
  { date: "2025-03-03", users: 49 },
  { date: "2025-03-04", users: 52 },
  { date: "2025-03-05", users: 57 },
  { date: "2025-03-06", users: 60 },
  { date: "2025-03-07", users: 61 },
  { date: "2025-03-08", users: 64 },
  { date: "2025-03-09", users: 64 },
  { date: "2025-03-10", users: 68 },
  { date: "2025-03-11", users: 71 },
  { date: "2025-03-12", users: 74 },
  { date: "2025-03-13", users: 76 },
  { date: "2025-03-14", users: 77 },
  { date: "2025-03-15", users: 79 },
  { date: "2025-03-16", users: 79 },
  { date: "2025-03-17", users: 81 },
  { date: "2025-03-18", users: 82 },
  { date: "2025-03-19", users: 83 },
  { date: "2025-03-20", users: 85 },
  { date: "2025-03-21", users: 86 },
  { date: "2025-03-22", users: 87 },
  { date: "2025-03-23", users: 89 },
  { date: "2025-03-24", users: 90 },
  { date: "2025-03-25", users: 91 },
  { date: "2025-03-26", users: 92 },
  { date: "2025-03-27", users: 92 },


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
