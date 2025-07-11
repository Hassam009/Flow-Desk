// src/components/theme-provider.tsx
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

interface Props {
  children: React.ReactNode
  defaultTheme?: "light" | "dark" | "system"
  storageKey?: string
  attribute?:string
}

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme" }: Props) {
  return (
    <NextThemesProvider
      defaultTheme={defaultTheme}
      attribute="class"
      storageKey={storageKey}
    >
      {children}
    </NextThemesProvider>
  )
}
