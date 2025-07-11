import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
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

export default function TaskPage() {
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);

  const filteredTasks = TaskData.filter((task) => {
    const statusMatch = statusFilter ? task.status === statusFilter : true;
    const priorityMatch = priorityFilter ? task.priority === priorityFilter : true;
    return statusMatch && priorityMatch;
  });

  return (
    <div className="w-full mx-auto flex flex-col gap-0 px-4 py-8 max-w-screen-2xl bg-white dark:bg-zinc-800 min-h-screen">
      
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-3xl font-bold">Tasks</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Here's a list of your tasks for this month!
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" /> Import
          </Button>
          <Button
            style={{ backgroundColor: "oklch(0.208 0.042 265.755)" }}
            className="text-white hover:opacity-90"
          >
            Create
            <Plus className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </div>

      
      <div className="flex items-center gap-2 mb-4">
        <Input placeholder="Filter tasks..." className="max-w-xs" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Status
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start"  className="bg-white border border-gray-200 shadow-md">
            {["Todo", "In Progress", "Done", "Canceled"].map((status) => (
              <DropdownMenuItem key={status} onClick={() => setStatusFilter(status)}>
                {status === "Todo" && <Clock className="w-4 h-4 text-gray-500" />}
                {status === "In Progress" && <Clock9 className="w-4 h-4 text-blue-500" />}
                {status === "Done" && <CheckCircle className="w-4 h-4 text-green-500" />}
                {status === "Canceled" && <XCircle className="w-4 h-4 text-red-500" />}
                {status}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Priority
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-md">
            {["High", "Medium", "Low"].map((priority) => (
              <DropdownMenuItem key={priority} onClick={() => setPriorityFilter(priority)}>
                {priority === "High" && <ArrowUp className="w-4 h-4" />}
                {priority === "Medium" && <ArrowRight className="w-4 h-4" />}
                {priority === "Low" && <ArrowDown className="w-4 h-4" />}
                {priority}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" className="ml-auto">
          <Filter className="w-4 h-4" />
        </Button>
      </div>

    
      <div className="flex-1 flex flex-col">
        <div className="rounded-lg border bg-white dark:bg-zinc-800 flex-1">
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
                      {task.priority === "Low" && <ArrowDown className="w-4 h-4" />}
                      {task.priority === "Medium" && <ArrowRight className="w-4 h-4" />}
                      {task.priority === "High" && <ArrowUp className="w-4 h-4" />}
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
    </div>
  );
}
