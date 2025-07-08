import { Button } from "@/components/ui/button"
import CustomCard from "../layout/CustomCard"
import { CustomDataTable } from "@/components/layout/CustomDataTable"
import { columns, data } from "@/components/layout/PaymentData"
import CustomChart from "../layout/CustomChart"

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-8 px-4 md:px-8 py-8">
        {/* Header: Title + Download Button */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            {/* Dashboard Tabs */}
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-1 rounded-md bg-gray-200 text-gray-900 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500">Overview</button>
              <button className="px-4 py-1 rounded-md text-gray-500 hover:bg-gray-100 font-medium">Analytics</button>
              <button className="px-4 py-1 rounded-md text-gray-500 hover:bg-gray-100 font-medium">Reports</button>
              <button className="px-4 py-1 rounded-md text-gray-500 hover:bg-gray-100 font-medium">Notifications</button>
            </div>
          </div>
          <Button className="px-6 py-2" variant="default">
            Download
          </Button>
        </div>

        {/* Cards Row */}
        <div className="flex flex-row gap-4 mt-4 w-full">
          <div className="flex-1 min-w-0 max-w-[250px]"><CustomCard title="Total Revenue" value="$45,231.89" description="+20.1% from last month" icon="dollar" /></div>
          <div className="flex-1 min-w-0 max-w-[250px]"><CustomCard title="Subscriptions" value="+2350" description="+180.1% from last month" icon="users" /></div>
          <div className="flex-1 min-w-0 max-w-[250px]"><CustomCard title="Sales" value="+12,234" description="+19% from last month" icon="credit" /></div>
          <div className="flex-1 min-w-0 max-w-[250px]"><CustomCard title="Active Now" value="+573" description="+201 since last hour" icon="activity" /></div>
        </div>

        {/* Chart and Data Table Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 w-full">
          <div className="min-w-0 w-full flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <div className="flex-1 min-w-0">
              <CustomChart />
            </div>
          </div>
          <div className="min-w-0 w-full flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Recent Sales</h3>
            <div className="flex-1 min-w-0">
              <CustomDataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}