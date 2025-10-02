"use client"


import type React from "react"

import { useState, useEffect } from "react"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useI18n } from "@/lib/i18n/i18n-context"

interface AdvancedLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "minimal" | "animated" | "interactive"
  showText?: boolean
  className?: string
}

export default function AdvancedLogo({
  size = "md",
  variant = "default",
  showText = false,
  className = "",
}: AdvancedLogoProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()
  const { language } = useI18n()
  const controls = useAnimation()

  // Mouse tracking for advanced interactions
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-50, 50], [5, -5])
  const rotateY = useTransform(mouseX, [-50, 50], [-5, 5])

  // Size configurations - reduced sizes
  const sizeConfig = {
    sm: { width: 80, height: 40, textSize: "text-xs" },
    md: { width: 120, height: 60, textSize: "text-sm" },
    lg: { width: 160, height: 80, textSize: "text-base" },
    xl: { width: 200, height: 100, textSize: "text-lg" },
  }

  const currentSize = sizeConfig[size]

  // Simplified loading animation
  useEffect(() => {
    setIsLoaded(true)
    controls.start({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    })
  }, [controls])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (variant === "interactive") {
      const rect = event.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set((event.clientX - centerX) * 0.5)
      mouseY.set((event.clientY - centerY) * 0.5)
    }
  }

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={variant === "interactive" ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
    >
      {/* Subtle Glow Effect - Only on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, transparent 70%)`,
            filter: "blur(8px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Main Logo Container */}
      <motion.div
        className="relative z-10 flex items-center space-x-2"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        {/* Logo Image with Simplified Effects */}
        <motion.div
          className="relative"
          whileHover={{ rotateY: variant === "interactive" ? 3 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Simplified Background */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-700/30"
            animate={{
              borderColor: isHovered
                ? "rgba(220, 38, 38, 0.3)"
                : theme === "dark"
                  ? "rgba(107, 114, 128, 0.3)"
                  : "rgba(255, 255, 255, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Logo Image */}
          <Image
            src="/images/hulet-fish-logo.png"
            alt="Hulet Fish Tourism Logo"
            width={currentSize.width}
            height={currentSize.height}
            className="relative z-10 object-contain p-2 rounded-xl"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
              background: "transparent",
            }}
            priority
            onLoad={() => setIsLoaded(true)}
          />

          {/* Simple Loading State */}
          {!isLoaded && <div className="absolute inset-0 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse" />}
        </motion.div>

        {/* Optional Text */}
        {showText && (
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <motion.h1
              className={`font-bold text-gray-900 dark:text-white ${currentSize.textSize}`}
              whileHover={{ scale: 1.02 }}
            >
              Hulet Fish
            </motion.h1>
            <motion.p
              className="text-xs text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {language === "am" ? "ቱሪዝም" : language === "or" ? "Turizimii" : "Tourism"}
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
