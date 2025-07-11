"use client"
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from "recharts"
import ChartData from "../../Data/ChartData.json"
import { useTheme } from "next-themes"

export default function CustomChart() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  return (
      <div className="rounded-lg border p-4 shadow-sm bg-white dark:bg-zinc-800 h-[400px]">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Monthly Sales
        </h3>
  
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ChartData}>
            <XAxis
              dataKey="name"
              stroke={isDark ? "#aaaaaa" : "#888888"}
              fontSize={12}
            />
            <YAxis
              stroke={isDark ? "#aaaaaa" : "#888888"}
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#27272a" : "#ffffff",
                borderColor: isDark ? "#444" : "#ccc",
              }}
              labelStyle={{
                color: isDark ? "#f4f4f5" : "#111",
              }}
            />
            <Bar
              dataKey="total"
              fill={isDark
                ? "oklch(0.929 0.013 255.508)"
                : "oklch(0.208 0.042 265.755)"
              }
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
  )
}
