"use client";

import { useTheme } from "@/app/(app)/component/theme-provider"

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  )
}

