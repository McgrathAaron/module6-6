"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-all duration-500",
        "hover:scale-105 active:scale-95",
        theme === "light"
          ? "bg-gradient-to-br from-sky-100 to-blue-100 text-slate-700"
          : "bg-gradient-to-br from-slate-800 to-slate-900 text-yellow-300",
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-500 hover:opacity-100" />
      <div className="relative transition-all duration-500">
        {theme === "light" ? (
          <Moon className="h-8 w-8 transition-all duration-500" />
        ) : (
          <Sun className="h-8 w-8 transition-all duration-500" />
        )}
      </div>
      <div
        className={cn(
          "absolute inset-0 rounded-full opacity-0 transition-opacity duration-500",
          theme === "light" ? "bg-blue-500/10" : "bg-yellow-500/10",
          "animate-pulse",
        )}
      />
    </button>
  )
}
