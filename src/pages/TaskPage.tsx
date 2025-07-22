import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { PageHeader } from "@/components/SharedComponent/PageHeader";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../components/ui/table";
import {defaultLabels}  from "../context/FilterContext";
import { Badge } from "../components/ui/badge";
import {
  MoreHorizontal,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Clock,
  Clock9,
  XCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import TaskData from "../Data/TaskData.json";
import { FilterBar } from "@/components/SharedComponent/FilterBar";
import { useFilter } from "@/context/FilterContext";
import { JSX } from "react";
export default function TaskPage() {

  const { filters, resetAllFilters, setFilter } = useFilter();

  const filteredTasks = TaskData.filter((task) => {
    const statusMatch = filters.Taskstatus ? task.Taskstatus === filters.Taskstatus : true;
    const priorityMatch = filters.priority ? task.priority === filters.priority : true;
    return statusMatch && priorityMatch;
  });
  const statusIcons: Record<string, JSX.Element> = {
    "In Progress": <Clock9 className="w-4 h-4 text-blue-500" />,
    "Todo": <Clock className="w-4 h-4 text-gray-500" />,
    "Canceled": <XCircle className="w-4 h-4 text-red-500" />,
    "Done": <CheckCircle className="w-4 h-4 text-green-500" />,
    "Backlog": <AlertCircle className="w-4 h-4 text-yellow-500" />,
  }
  const priorityIcons: Record<string, JSX.Element> = {
    Low: <ArrowDown className="w-4 h-4" />,
    Medium: <ArrowRight className="w-4 h-4" />,
    High: <ArrowUp className="w-4 h-4" />,
  };
  return (
    <div className="w-full flex flex-wrap flex-col gap-0 px-4 py-8 bg-white dark:bg-zinc-800 min-h-screen">
      <PageHeader
        title="Tasks"
        subtitle="Here's a list of your tasks for this month!"
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 w-full">
<FilterBar
  placeholder="Filter tasks..."
  onClear={() => {
    resetAllFilters();
  }}
  filterConfigs={[
    {
      key: "Taskstatus",
      label: "Status", 
      onSelect: (val) => setFilter("Taskstatus", val),
      items: [
        { label: "Todo", icon: <Clock className="w-4 h-4 text-gray-500" /> },
        { label: "In Progress", icon: <Clock9 className="w-4 h-4 text-blue-500" /> },
        { label: "Done", icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
        { label: "Canceled", icon: <XCircle className="w-4 h-4 text-red-500" /> },
      ],
    },
    {
      key: "priority",
      label: "Priority",
      onSelect: (val) => setFilter("priority", val),
      items: [
        { label: "High", icon: <ArrowUp className="w-4 h-4" /> },
        { label: "Medium", icon: <ArrowRight className="w-4 h-4" /> },
        { label: "Low", icon: <ArrowDown className="w-4 h-4" /> },
      ],
    },
  ]}
/>
</div>


      <div className="w-full overflow-x-auto rounded-lg border bg-white dark:bg-zinc-800">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead>Task</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{task.id}</TableCell>
                <TableCell>
                  <Badge className="mr-2 bg-gray-100 text-gray-700 border border-gray-300">
                    {task.tag}
                  </Badge>
                  {task.title}
                </TableCell>
                <TableCell>
                <div className="flex items-center gap-1">
    {statusIcons[task.Taskstatus] ?? <Clock className="w-4 h-4 text-muted-foreground" />}
    {task.Taskstatus}
  </div>
                </TableCell>
                <TableCell>
                <div className="flex items-center gap-1">
    {priorityIcons[task.priority]}
    {task.priority}
  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end"></DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
