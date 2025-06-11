"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Sidebar from "./sidebar"
import Header from "./header"
import AdminOverview from "./admin/overview"
import UsersPage from "./admin/users"
import AnalyticsPage from "./admin/analytics"
import ToursPage from "./admin/tours"
import RevenuePage from "./admin/revenue"
import ReviewsPage from "./admin/reviews"
import MessagesPage from "./admin/messages"
import TouristDashboard from "./tourist/dashboard"
import TripsPage from "./tourist/trips"
import GuideDashboard from "./guide/dashboard"

interface DashboardLayoutProps {
  userRole: "admin" | "tourist" | "guide"
}

export default function DashboardLayout({ userRole }: DashboardLayoutProps) {
  const [activeSection, setActiveSection] = useState(userRole === "admin" ? "overview" : "dashboard")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const renderContent = () => {
    if (userRole === "admin") {
      switch (activeSection) {
        case "overview":
          return <AdminOverview />
        case "users":
          return <UsersPage />
        case "analytics":
          return <AnalyticsPage />
        case "tours":
          return <ToursPage />
        case "revenue":
          return <RevenuePage />
        case "reviews":
          return <ReviewsPage />
        case "messages":
          return <MessagesPage />
        default:
          return <AdminOverview />
      }
    }

    if (userRole === "tourist") {
      switch (activeSection) {
        case "dashboard":
          return <TouristDashboard />
        case "trips":
          return <TripsPage />
        default:
          return <TouristDashboard />
      }
    }

    if (userRole === "guide") {
      switch (activeSection) {
        case "dashboard":
          return <GuideDashboard />
        default:
          return <GuideDashboard />
      }
    }

    return <div>Content not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar
        userRole={userRole}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Header userRole={userRole} onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

        <main className="flex-1 p-6 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
