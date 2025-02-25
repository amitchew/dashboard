import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Bell, User } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
      <div className="flex items-center gap-4">
  <SidebarTrigger />
  <div>
    <h1 className="text-xl font-bold">Impact Careers</h1>
    <h1 className="text-lg font-bold text-[#4ac55e] flex items-center">
    Create AN impact <sup>™</sup>
    </h1>
  </div>
</div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">User profile</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

