import type React from "react"
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardHeader } from "@/components/dashboard-header"

export function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar>
        <SidebarContent>
          <DashboardNav />
        </SidebarContent>
      </Sidebar>
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-secondary/10">{children}</main>
      </div>
    </div>
  )
}

