import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    // CardDescription,
  } from "@/components/ui/card"
  
  import {
    DollarSign,
    Users,
    CreditCard,
    Activity,
    LucideIcon,
  } from "lucide-react"
  
  const icons: Record<string, LucideIcon> = {
    dollar: DollarSign,
    users: Users,
    credit: CreditCard,
    activity: Activity,
  }
interface CustomCardProps {
  title?: string
  icon?: keyof typeof icons
  value?: string
  name?: string
  status?: string
  description?: string
  children?: React.ReactNode
}
  
  export default function CustomCard({
  title,
  icon,
  value,
  description,
  children,
}: CustomCardProps) {
  const Icon = icons[icon]
  
    return (
      <Card className="w-full bg-white rounded-xl shadow-md py-4 px-2 border border-gray-200  bg-white dark:bg-zinc-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        {children ? (
          children
        ) : (
          <>
            {value && <div className="text-2xl font-bold">{value}</div>}
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </>
        )}
      </CardContent>
    </Card>
    )
  }
  