"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { useI18n } from "@/lib/i18n/i18n-context"
import { LanguageSelector } from "@/components/language-selector"
import { CurrencySelector } from "@/components/currency-selector"
import AdvancedLogo from "@/components/advanced-logo"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useI18n()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-primary/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center">
            <AdvancedLogo size="sm" variant="default" className="cursor-pointer" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {["destinations", "host", "experiences", "about", "contact"].map((item) => (
              <motion.a
                key={item}
                href={item === "host" ? "#become-host" : `#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors relative group text-sm font-medium"
                whileHover={{ y: -1 }}
              >
                {item === "host" ? "Become a Host" : item === "experiences" ? "Experiences" : t(`nav.${item}`)}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <CurrencySelector />
              <ThemeToggle />
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-4 py-2"
                onClick={() => (window.location.href = "/dashboard")}
              >
                {t("nav.login")}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
              {["destinations", "host", "experiences", "about", "contact"].map((item) => (
                <a
                  key={item}
                  href={item === "host" ? "#become-host" : `#${item.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item === "host" ? "Become a Host" : item === "experiences" ? "Experiences" : t(`nav.${item}`)}
                </a>
              ))}
              <div className="flex items-center space-x-2 py-2">
                <CurrencySelector />
              </div>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-primary to-accent text-white"
                onClick={() => {
                  setIsMenuOpen(false)
                  window.location.href = "/dashboard"
                }}
              >
                {t("nav.login")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
