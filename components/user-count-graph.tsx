"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { format } from "date-fns"
import rawData from "@/components/rawData" 


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
