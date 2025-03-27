"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Smartphone, Activity } from "lucide-react";

export default function AnalyticsTables() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState("tables");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const deviceData = [
    { device: "iPhone 11 Pro Max", users: 8 },
    { device: "iPhone 12", users: 6 },
    { device: "iPad Pro (11-inch)", users: 4 },
    { device: "iPad Air (5th gen)", users: 3 },
    { device: "iPhone", users: 3 },
    { device: "iPhone 11", users: 3 },
    { device: "iPhone 12 Pro", users: 2 },
  ];

  const eventData = [
    { event: "user_engagement", count: 374 },
    { event: "screen_view", count: 170 },
    { event: "session_start", count: 98 },
    { event: "first_open", count: 45 },
    { event: "onboarding_step", count: 32 },
    { event: "account_creation_started", count: 28 },
    { event: "app_update", count: 15 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ffc658",
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Analytics Dashboard
      </h1>

      <Tabs
        defaultValue="tables"
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6 sm:mb-8">
          <TabsTrigger value="tables">Tables</TabsTrigger>
          <TabsTrigger value="charts">Charts</TabsTrigger>
        </TabsList>

        {/* TABLE VIEW */}
        <TabsContent value="tables">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Active Users by Device Table */}
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Smartphone className="h-5 w-5" />
                  Active Users by Device Model
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 overflow-auto">
                <div className="min-w-[300px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[60%]">Device model</TableHead>
                        <TableHead className="text-right">
                          Active users
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {deviceData.map((row) => (
                        <TableRow
                          key={row.device}
                          className="hover:bg-muted/50"
                        >
                          <TableCell className="font-medium">
                            {row.device}
                          </TableCell>
                          <TableCell className="text-right font-semibold text-blue-600 dark:text-blue-400">
                            {row.users}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableCaption>
                      Total active users:{" "}
                      {deviceData.reduce((sum, item) => sum + item.users, 0)}
                    </TableCaption>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Event Count Table */}
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Activity className="h-5 w-5" />
                  Event Count by Event Name
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 overflow-auto">
                <div className="min-w-[300px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[60%]">Event name</TableHead>
                        <TableHead className="text-right">
                          Event count
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {eventData.map((row) => (
                        <TableRow key={row.event} className="hover:bg-muted/50">
                          <TableCell className="font-medium">
                            {row.event}
                          </TableCell>
                          <TableCell className="text-right font-semibold text-purple-600 dark:text-purple-400">
                            {row.count}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableCaption>
                      Total events:{" "}
                      {eventData.reduce((sum, item) => sum + item.count, 0)}
                    </TableCaption>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* CHART VIEW */}
        <TabsContent value="charts">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Active Users Bar Chart */}
            <Card className="shadow-md">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Smartphone className="h-5 w-5" />
                  Active Users by Device Model
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={deviceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="device" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" fill="#3b82f6" name="Active Users" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Event Count Pie Chart */}
            <Card className="shadow-md">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Activity className="h-5 w-5" />
                  Event Count Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={eventData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                      nameKey="event"
                    >
                      {eventData.map((_, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    {isClient && <Legend layout="horizontal" />}
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
