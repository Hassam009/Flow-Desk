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
  return (
    <div className="w-full mx-auto flex flex-col gap-0 px-4 lg:pl-[0rem] lg:pr-2 py-8 max-w-screen-2xl">
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
          <DropdownMenuContent
            align="start"
            className="bg-white border rounded-md shadow-md"
          >
            <DropdownMenuItem onClick={() => console.log("Todo selected")}>
            <Clock className="w-4 h-4 text-gray-500" />  Todo
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => console.log("In Progress selected")}
            >
            <Clock9 className="w-4 h-4 text-blue-500" />  In Progress
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Done selected")}>
            <CheckCircle className="w-4 h-4 text-green-500" />  Done
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Canceled selected")}>
            <XCircle className="w-4 h-4 text-red-500" />   Canceled
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Priority
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="bg-white border rounded-md shadow-md"
          >
            <DropdownMenuItem onClick={() => console.log("High selected")}>
            <ArrowUp className="w-4 h-4" />    High
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Medium selected")}>
            <ArrowRight className="w-4 h-4" />    Medium
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Low selected")}>
            <ArrowDown className="w-4 h-4" />    Low
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" className="ml-auto">
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      <div className="rounded-lg border bg-white">
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
            {TaskData.map((task) => (
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
                    {task.priority==="Low"?(
                        <ArrowDown className="w-4 h-4" />
                    ):task.priority==="Medium" ?(
                        <ArrowRight className="w-4 h-4" />
                    ): task.priority==="High"? (
                        <ArrowUp className="w-4 h-4" />
                    ):null}
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
                    <DropdownMenuContent align="end">
                    </DropdownMenuContent>
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
