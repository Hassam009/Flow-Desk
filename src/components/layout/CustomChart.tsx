"use client"

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from "recharts"

const chartData = [
  {
    name: "Jan",
    total: 4000,
  },
  {
    name: "Feb",
    total: 3000,
  },
  {
    name: "Mar",
    total: 2000,
  },
  {
    name: "Apr",
    total: 2780,
  },
  {
    name: "May",
    total: 1890,
  },
  {
    name: "Jun",
    total: 2390,
  },
  {
    name: "Jul",
    total: 3490,
  },
]

export default function CustomChart() {
  return (
    <div className="rounded-lg border p-4 shadow-sm bg-white dark:bg-gray-900">
      <h3 className="text-lg font-semibold mb-4">Monthly Sales</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} />
          <YAxis stroke="#888888" fontSize={12} />
          <Tooltip />
          <Bar dataKey="total" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
