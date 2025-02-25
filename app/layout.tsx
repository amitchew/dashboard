import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Dashboard } from "@/components/dashboard"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Impact Careers Dashboard",
  description: "Create AN impact TM",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <Dashboard>{children}</Dashboard>
        </SidebarProvider>
      </body>
    </html>
  )
}

