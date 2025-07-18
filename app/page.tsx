import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, Briefcase, Target } from "lucide-react"
import { UserCountGraph } from "@/components/user-count-graph"

export default function Home() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">240</div>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Postings</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9500</div>
            <p className="text-xs text-muted-foreground">+17% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Placements</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <p className="text-xs text-muted-foreground">Data coming soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impact Score</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <p className="text-xs text-muted-foreground">Data coming soon</p>
          </CardContent>
        </Card>
      </div>
      {/* Onboarding Progress Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">User Onboarding Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-bold text-red-500">62</div>
              <p className="text-sm text-muted-foreground">Pending (No steps completed)</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-500">64</div>
              <p className="text-sm text-muted-foreground">Completed General Info</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-500">06</div>
              <p className="text-sm text-muted-foreground">+ Skills</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500">13</div>
              <p className="text-sm text-muted-foreground">+ Work History</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-500">02</div>
              <p className="text-sm text-muted-foreground">+ Certification</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-500">05</div>
              <p className="text-sm text-muted-foreground">+ Education</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">87</div>
              <p className="text-sm text-muted-foreground">Completed All Steps (Ideal Job)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <UserCountGraph />
    </div>
  )
}
