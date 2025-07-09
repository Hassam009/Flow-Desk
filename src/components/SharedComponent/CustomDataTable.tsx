
"use client"

import { Payment } from "./PaymentData"

interface RecentSalesCardProps {
  data: Payment[]
}

function getInitials(email: string) {
  const [name] = email.split("@")
  const parts = name.split(".")
  if (parts.length >= 2) {
    return parts[0][0].toUpperCase() + parts[1][0].toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

function getName(email: string) {
  const names: Record<string, string> = {
    "olivia.martin@email.com": "Olivia Martin",
    "jackson.lee@email.com": "Jackson Lee",
    "isabella.nguyen@email.com": "Isabella Nguyen",
    "will@email.com": "William Kim",
    "sofia.davis@email.com": "Sofia Davis",
    "ken99@example.com": "Ken Adams",
  }
  return names[email] || email.split("@")[0]
}

export function RecentSalesCard({ data }: RecentSalesCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md w-full h-[400px]">
      <h3 className="text-lg font-semibold mb-1">Recent Sales</h3>
      <p className="text-sm text-muted-foreground mb-4">You made {data.length} sales this month.</p>
      <ul className="flex flex-col gap-6">
        {data.map((sale) => (
          <li key={sale.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600 text-base">
                {getInitials(sale.email)}
              </div>
              <div>
                <div className="font-medium text-gray-900">{getName(sale.email)}</div>
                <div className="text-xs text-gray-500">{sale.email}</div>
              </div>
            </div>
            <div className="font-bold text-black-700 text-base">{sale.amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
