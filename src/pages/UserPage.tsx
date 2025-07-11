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
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import RoleIcon from "../components/SharedComponent/AllIcons"
import UserData from "../Data/UserData.json";
import {StatusBadge, StatusType} from "../components/SharedComponent/StatusBade"
export default function TaskPage() {
  return (
    <div className="w-full  lg:pl-[1rem] mx-auto flex flex-col gap-0 px-4 lg:pl-[0rem] lg:pr-2 py-8 max-w-screen-2xl bg-white dark:bg-zinc-800">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-3xl font-bold">User List</h1>
          <p className="text-muted-foreground text-sm mt-1">
          Manage your users and their roles here.
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

      <div className="flex items-center gap-2 mb-4 bg-white dark:bg-zinc-800">
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

      <div className="rounded-lg border bg-white dark:bg-zinc-800">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox />
              </TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contact No</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {UserData.map((user, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{user.username}</TableCell>
                <TableCell>
                  {user.name}
                </TableCell>
                <TableCell>
                    {user.email}
                </TableCell>
                <TableCell>
                    {user.phone}
                </TableCell>
                <TableCell>
                <StatusBadge
  status={
    (user.status.charAt(0).toUpperCase() + user.status.slice(1)) as StatusType
  }
/>

</TableCell>
<TableCell className="flex items-center gap-1">
  <RoleIcon role={user.role} />
  {user.role}
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
