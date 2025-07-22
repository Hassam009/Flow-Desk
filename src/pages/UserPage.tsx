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
  User,
  Users,
  ShieldCheck,
  Ban,
  CheckCircle,
  XCircle,
  Clock,
  Mail,
  PauseCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import RoleIcon from "../components/SharedComponent/AllIcons";
import UserData from "../Data/UserData.json";
import {
  StatusBadge,
  StatusType,
} from "../components/SharedComponent/StatusBade";
import { useFilter } from "@/context/FilterContext";
export default function TaskPage() {
  const Roles=["Manager", "Admin", "Cashier", "Superadmin"];
  const { UserstatusFilter, roleFilter, setUserStatusFilter, setRoleFilter } = useFilter();
  const filteredUsers = UserData.filter((user) => {
    const userMatch = UserstatusFilter
      ? user.UserStatus.toLowerCase() === UserstatusFilter.toLowerCase()
      : true;
    const roleMatch = roleFilter ? user.role.toLowerCase() === roleFilter.toLowerCase() : true;
    return userMatch && roleMatch;
  });
  return (
    <div className="w-full flex flex-col gap-0 px-4 py-8 bg-white dark:bg-zinc-800 min-h-screen ">
      <div className="w-full flex items-center justify-between mb-2">
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
       
            className="text-white hover:opacity-90 bg-primary-custom"
          >
            Create
            <Plus className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4 bg-white dark:bg-zinc-800">
        <Input placeholder="Filter users..." className="max-w-xs" />

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
            {["Active", "Suspended", "Inactive", "Invited"].map((status) => (
              <DropdownMenuItem
                key={status}
                onClick={() => setUserStatusFilter(status)}
              >
                {status === "Active" && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
                {status === "Suspended" && (
                  <Ban className="w-4 h-4 text-red-500" />
                )}
                {status === "Inactive" && (
                  <PauseCircle className="w-4 h-4 text-gray-400" />
                )}
                {status === "Invited" && (
                  <Mail className="w-4 h-4 text-blue-500" />
                )}
                {status}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Role
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="bg-white border rounded-md shadow-md"
          >
            {Roles.map((role) => (
              <DropdownMenuItem key={role} onClick={() => setRoleFilter(role)}>
                {role === "Manager" && (
                  <Users className="w-4 h-4 text-purple-500" />
                )}
                {role === "Admin" && (
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                )}
                {role === "Cashier" && (
                  <User className="w-4 h-4 text-gray-700" />
                )}
                {role === "Superadmin" && (
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                )}
                {role}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button
      
          variant="outline"
          onClick={() => {
            setUserStatusFilter(null);
            setRoleFilter(null);
          }}
        >
          Clear Filters
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
            {filteredUsers.map((user, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{user.username}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <StatusBadge
                    status={
                      (user.UserStatus.charAt(0).toUpperCase() +
                        user.UserStatus.slice(1)) as StatusType
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
