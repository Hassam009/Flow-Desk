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

export default function CustomChart() {
  return (
    <div className="rounded-lg border p-4 shadow-sm bg-white h-[400px]">
      <h3 className="text-lg font-semibold mb-4 text-black">Monthly Sales</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ChartData}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} />
          <YAxis stroke="#888888" fontSize={12} />
          <Tooltip />
          <Bar dataKey="total"  fill="oklch(0.208 0.042 265.755)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
