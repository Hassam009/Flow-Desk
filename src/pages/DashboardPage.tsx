import { Button } from "@/components/ui/button"
import CustomCard from "../components/SharedComponent/CustomCard"
import { RecentSalesCard } from "@/components/SharedComponent/CustomDataTable"
import CustomChart from "../components/SharedComponent/CustomChart"
import CardData from "../Data/CardData.json"
import TableData from "../Data/TableData.json"
import { Payment } from "@/components/SharedComponent/PaymentData"

export default function DashboardPage() {
  
const typedTableData = TableData as unknown as Payment[]
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <div className="w-full mx-auto flex flex-col gap-8 px-4 lg:pl-[0rem] lg:pr-2 py-8 max-w-screen-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-1 rounded-md bg-gray-200 text-gray-900 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500">Overview</button>
              <button className="px-4 py-1 rounded-md text-gray-500 hover:bg-gray-100 font-medium">Analytics</button>
              <button className="px-4 py-1 rounded-md text-gray-500 hover:bg-gray-100 font-medium">Reports</button>
              <button className="px-4 py-1 rounded-md text-gray-500 hover:bg-gray-100 font-medium">Notifications</button>
            </div>
          </div>
          <Button className="px-6 py-2 hover:bg-blue-700 text-white"  style={{ backgroundColor: "oklch(0.208 0.042 265.755)" }}>
            Download
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-3 mt-4 w-full">
      {CardData.map((card, index) => (
        <CustomCard
          key={index}
          title={card.title}
          value={card.value}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>


       
        <div className="flex flex-col lg:flex-row gap-4 mt-4 w-full">
          <div className="flex-[0_0_58%] min-w-0 flex flex-col">
            <div className="flex-1 min-w-0">
              <CustomChart />
            </div>
          </div>
          <div className="flex-[0_0_41%] min-w-0 flex flex-col">
    <RecentSalesCard data={ typedTableData} />
  </div>
        </div>
      </div>
    </div>
  )
}