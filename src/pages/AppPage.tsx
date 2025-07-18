import { logos } from "../components/SharedComponent/Logos";
import AppData from "../Data/AppPageData.json";
import CustomCard from "@/components/SharedComponent/CustomCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";

  export default function AppPage() {
    const getLogo = (name: string) => {
      const key = Object.keys(logos).find(
        (k) => k.toLowerCase() === name.toLowerCase()
      );
      return key ? logos[key] : (
        <div className="text-xs text-gray-400 font-mono">No Icon</div>
      );
    };
  
    return (
      <div className="w-full p-12 pt-8  lg:pl-[1rem] bg-white dark:bg-zinc-800">
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1">App Integrations</h1>
          <p className="text-muted-foreground text-sm mb-4">
            Here&apos;s a list of your apps for the integration!
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <Input
              placeholder="Filter apps..."
              className="w-full sm:w-1/3"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline"  className="w-full sm:w-auto bg-white border border-gray-300 text-gray-900 hover:bg-gray-100">
                  All Apps
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Apps</DropdownMenuItem>
                <DropdownMenuItem>Connected</DropdownMenuItem>
                <DropdownMenuItem>Not Connected</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
  
        {/* SECTION 2: Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  bg-white dark:bg-zinc-800">
          {AppData?.map((card, index) => (
            <CustomCard key={index}>
              <div className="pt-0 pb-2 pl-0 pr-0 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gray-100 rounded-full p-1 flex items-center justify-center">
                    {getLogo(card.name)}
                  </div>
                  <button
                    className={`border text-xs font-medium px-3 py-1 rounded-full ml-2 shadow-sm bg-white ${
                      card.status === "Connected"
                        ? "border-green-200 text-green-700 bg-green-50"
                        : "border-gray-200 text-gray-700"
                    }`}
                  >
                    {card.status === "Connected" ? "Connected" : "Connect"}
                  </button>
                </div>
                <div className="flex-1 flex flex-col justify-start">
                  <h3 className="text-sm font-semibold text-left mb-1">
                    {card.name}
                  </h3>
                  <p className="text-xs text-muted-foreground text-left leading-snug">
                    {card.description}
                  </p>
                </div>
              </div>
            </CustomCard>
          ))}
        </div>
      </div>
    );
  }
  