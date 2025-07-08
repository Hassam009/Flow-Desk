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
    title: string
    value: string
    description: string
    icon: keyof typeof icons
  }
  
  export default function CustomCard({
    title,
    value,
    description,
    icon,
  }: CustomCardProps) {
    const Icon = icons[icon]
  
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    )
  }
  