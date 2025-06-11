"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart3,
  Users,
  Calendar,
  MapPin,
  Settings,
  Bell,
  CreditCard,
  User,
  LogOut,
  X,
  Home,
  Briefcase,
  Star,
  MessageSquare,
  FileText,
  TrendingUp,
  Globe,
  Camera,
  Heart,
  Shield,
  ChevronDown,
} from "lucide-react"

interface SidebarProps {
  userRole: "admin" | "tourist" | "guide"
  activeSection: string
  onSectionChange: (section: string) => void
  isCollapsed: boolean
  onToggleCollapse: () => void
}

const menuItems = {
  admin: [
    { id: "overview", label: "Overview", icon: Home, badge: null },
    { id: "bookings", label: "Bookings", icon: Calendar, badge: "12" },
    { id: "users", label: "Users", icon: Users, badge: null },
    { id: "analytics", label: "Analytics", icon: BarChart3, badge: null },
    { id: "tours", label: "Tours", icon: MapPin, badge: null },
    { id: "revenue", label: "Revenue", icon: TrendingUp, badge: null },
    { id: "reviews", label: "Reviews", icon: Star, badge: "3" },
    { id: "messages", label: "Messages", icon: MessageSquare, badge: "5" },
    { id: "reports", label: "Reports", icon: FileText, badge: null },
    { id: "settings", label: "Settings", icon: Settings, badge: null },
  ],
  tourist: [
    { id: "dashboard", label: "Dashboard", icon: Home, badge: null },
    { id: "trips", label: "My Trips", icon: Calendar, badge: "2" },
    { id: "bookings", label: "Bookings", icon: Briefcase, badge: null },
    { id: "payments", label: "Payments", icon: CreditCard, badge: null },
    { id: "recommendations", label: "Discover", icon: Globe, badge: "New" },
    { id: "gallery", label: "My Gallery", icon: Camera, badge: null },
    { id: "favorites", label: "Favorites", icon: Heart, badge: "8" },
    { id: "reviews", label: "Reviews", icon: Star, badge: null },
    { id: "messages", label: "Messages", icon: MessageSquare, badge: "2" },
    { id: "profile", label: "Profile", icon: User, badge: null },
  ],
  guide: [
    { id: "dashboard", label: "Dashboard", icon: Home, badge: null },
    { id: "tours", label: "My Tours", icon: MapPin, badge: "3" },
    { id: "schedule", label: "Schedule", icon: Calendar, badge: null },
    { id: "clients", label: "Clients", icon: Users, badge: null },
    { id: "earnings", label: "Earnings", icon: TrendingUp, badge: null },
    { id: "reviews", label: "Reviews", icon: Star, badge: "12" },
    { id: "messages", label: "Messages", icon: MessageSquare, badge: "4" },
    { id: "resources", label: "Resources", icon: FileText, badge: null },
    { id: "profile", label: "Profile", icon: User, badge: null },
  ],
}

const userProfiles = {
  admin: {
    name: "Sarah Johnson",
    role: "Administrator",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    email: "sarah@huletfish.com",
  },
  tourist: {
    name: "Michael Chen",
    role: "Explorer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    email: "michael@email.com",
  },
  guide: {
    name: "Dawit Tadesse",
    role: "Local Guide",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    email: "dawit@huletfish.com",
  },
}

export default function Sidebar({
  userRole,
  activeSection,
  onSectionChange,
  isCollapsed,
  onToggleCollapse,
}: SidebarProps) {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const currentUser = userProfiles[userRole]
  const items = menuItems[userRole]

  return (
    <>
      {/* Mobile Overlay */}
      {!isCollapsed && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={onToggleCollapse} />
      )}

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{
          width: isCollapsed ? 80 : 280,
          x: isCollapsed ? -280 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-50 lg:relative lg:translate-x-0 ${
          isCollapsed ? "lg:w-20" : "lg:w-80"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <motion.div
                animate={{ opacity: isCollapsed ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">HF</span>
                </div>
                {!isCollapsed && (
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      Hulet Fish
                    </h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{userRole} Dashboard</p>
                  </div>
                )}
              </motion.div>

              <Button variant="ghost" size="sm" onClick={onToggleCollapse} className="lg:hidden">
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* User Profile */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Button
                variant="ghost"
                className="w-full p-3 justify-start hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                  <AvatarFallback>
                    {currentUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {!isCollapsed && (
                  <div className="ml-3 flex-1 text-left">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{currentUser.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{currentUser.role}</p>
                  </div>
                )}
                {!isCollapsed && <ChevronDown className="w-4 h-4 text-gray-400" />}
              </Button>

              {/* User Menu Dropdown */}
              <AnimatePresence>
                {showUserMenu && !isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10"
                  >
                    <div className="p-2">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <User className="w-4 h-4 mr-2" />
                        Profile Settings
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <Bell className="w-4 h-4 mr-2" />
                        Notifications
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <Shield className="w-4 h-4 mr-2" />
                        Privacy
                      </Button>
                      <div className="border-t border-gray-200 dark:border-gray-700 my-2" />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-red-600 hover:text-red-700"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {items.map((item) => (
              <motion.div key={item.id} whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={`w-full justify-start h-12 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => onSectionChange(item.id)}
                >
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && (
                    <>
                      <span className="ml-3 flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <Badge
                          variant={activeSection === item.id ? "secondary" : "default"}
                          className={`ml-2 ${
                            activeSection === item.id
                              ? "bg-white/20 text-white"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
                          }`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </Button>
              </motion.div>
            ))}
          </nav>

          {/* Footer */}
          {!isCollapsed && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Need Help?</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Contact support</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  )
}
