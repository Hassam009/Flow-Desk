import { Button } from "@/components/ui/button"
import CustomCard from "../components/SharedComponent/CustomCard"
import { RecentSalesCard } from "@/components/SharedComponent/CustomDataTable"
import CustomChart from "../components/SharedComponent/CustomChart"
import CardData from "../Data/CardData.json"
import TableData from "../Data/TableData.json"
import { Payment } from "@/components/SharedComponent/PaymentData"
import { TabButton } from "@/components/SharedComponent/TabButton"

export default function DashboardPage() {
  
const typedTableData = TableData as unknown as Payment[]
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden bg-gray-50 bg-white dark:bg-zinc-800">
        <div className="w-full px-2 sm:px-4 lg:px-8 py-8 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-white dark:bg-zinc-800">Dashboard</h1>
            <div className="mt-4 flex flex-nowrap gap-1 overflow-x-auto">
            <TabButton active>Overview</TabButton>
            <TabButton>Analytics</TabButton>
            <TabButton>Reports</TabButton>
            <TabButton>Notifications</TabButton>
            </div>
          </div>
          <div className="flex justify-end w-full sm:w-auto">
            <Button className="px-6 py-2 hover:bg-blue-700 text-white w-full sm:w-auto bg-primary-custom">
              Download
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 mt-4 w-full">
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
          <div className="w-full lg:flex-[0_0_58%] min-w-0 flex flex-col">
            <div className="flex-1 min-w-0">
              <CustomChart />
            </div>
          </div>
          <div className="w-full lg:flex-[0_0_41%] min-w-0 flex flex-col bg-white dark:bg-zinc-800">
            <RecentSalesCard data={typedTableData} />
          </div>
        </div>
      </div>
    </div>
  )
}