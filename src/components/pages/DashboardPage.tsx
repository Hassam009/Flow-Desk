import { Button } from "@/components/ui/button"
import CustomCard from "../layout/CustomCard"
import { CustomDataTable } from "@/components/layout/CustomDataTable"
import { columns, data } from "@/components/layout/PaymentData"
import CustomChart from "../layout/CustomChart"

export default function DashboardPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col gap-6 p-6">
        {/* Header: Title + Download Button */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button className="px-6 py-2" variant="default">
            Download
          </Button>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <CustomCard
            title="Total Revenue"
            value="$45,231.89"
            description="+20.1% from last month"
            icon="dollar"
          />
          <CustomCard
            title="Subscriptions"
            value="+2350"
            description="+180.1% from last month"
            icon="users"
          />
          <CustomCard
            title="Sales"
            value="+12,234"
            description="+19% from last month"
            icon="credit"
          />
          <CustomCard
            title="Active Now"
            value="+573"
            description="+201 since last hour"
            icon="activity"
          />
        </div>

        {/* Chart and Data Table Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <CustomChart />
          </div>
          <div>
            <CustomDataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}