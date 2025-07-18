import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
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
import { Badge } from "../components/ui/badge";
import {
  MoreHorizontal,
  Plus,
  Download,
  Filter,
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
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import TaskData from "../Data/TaskData.json";
import { FilterBar } from "@/components/SharedComponent/FilterBar";

export default function TaskPage() {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);

  const filteredTasks = TaskData.filter((task) => {
    const statusMatch = statusFilter ? task.status === statusFilter : true;
    const priorityMatch = priorityFilter
      ? task.priority === priorityFilter
      : true;
    return statusMatch && priorityMatch;
  });

  return (
    <div className="w-full mx-auto flex flex-wrap flex-col gap-0 px-4 py-8 max-w-screen-2xl bg-white dark:bg-zinc-800 min-h-screen">
      <PageHeader
        title="Tasks"
        subtitle="Here's a list of your tasks for this month!"
        // onCreate={handleCreateTask}
        // onImport={handleImportTasks}
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 w-full">
<FilterBar
  placeholder="Filter tasks..."
  onClear={() => {
    setStatusFilter(null)
    setPriorityFilter(null)
  }}
  filterConfigs={[
    {
      label: "Status",
      onSelect: setStatusFilter,
      items: [
        { label: "Todo", icon: <Clock className="w-4 h-4 text-gray-500" /> },
        { label: "In Progress", icon: <Clock9 className="w-4 h-4 text-blue-500" /> },
        { label: "Done", icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
        { label: "Canceled", icon: <XCircle className="w-4 h-4 text-red-500" /> },
      ],
    },
    {
      label: "Priority",
      onSelect: setPriorityFilter,
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
                    {task.status === "In Progress" ? (
                      <Clock9 className="w-4 h-4 text-blue-500" />
                    ) : task.status === "Todo" ? (
                      <Clock className="w-4 h-4 text-gray-500" />
                    ) : task.status === "Canceled" ? (
                      <XCircle className="w-4 h-4 text-red-500" />
                    ) : task.status === "Done" ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : task.status === "Backlog" ? (
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <Clock className="w-4 h-4 text-muted-foreground" />
                    )}
                    {task.status}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {task.priority === "Low" && (
                      <ArrowDown className="w-4 h-4" />
                    )}
                    {task.priority === "Medium" && (
                      <ArrowRight className="w-4 h-4" />
                    )}
                    {task.priority === "High" && (
                      <ArrowUp className="w-4 h-4" />
                    )}
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
