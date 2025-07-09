

export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }
  
  
  import { ColumnDef } from "@tanstack/react-table"
  
  export const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <div className="capitalize text-black">{row.getValue("status")}</div>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
        return <div className="text-right font-medium text">{formatted}</div>
      },
    },
  ]
  