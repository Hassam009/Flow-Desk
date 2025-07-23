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
  Users,
  ShieldCheck,
  User,
  CheckCircle,
  XCircle,
  Mail,
  PauseCircle,
  Ban,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import RoleIcon from "../components/SharedComponent/AllIcons";
import UserData from "../Data/UserData.json";
import {
  StatusBadge,
  StatusType,
} from "../components/SharedComponent/StatusBade";
import { FilterBar } from "@/components/SharedComponent/FilterBar";
import { useFilter } from "@/context/FilterContext";

export default function UserPage() {
  const Roles = ["Manager", "Admin", "Cashier", "Superadmin"];
  const { filters, setFilter, resetUserFilters } = useFilter();

  const filteredUsers = UserData.filter((user) => {
    const userMatch = filters.Userstatus
      ? user.UserStatus.toLowerCase() === filters.Userstatus.toLowerCase()
      : true;
    const roleMatch = filters.role
      ? user.role.toLowerCase() === filters.role.toLowerCase()
      : true;
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
          <Button className="text-white hover:opacity-90 bg-primary-custom">
            Create
            <Plus className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 w-full">
        <FilterBar
          placeholder="Filter users..."
          onClear={resetUserFilters}
          filterConfigs={[
            {
              key: "Userstatus",
              label: "Status",
              onSelect: (val) => setFilter("Userstatus", val),
              items: [
                { label: "Active", icon: <CheckCircle className="w-4 h-4 text-green-500" /> },
                { label: "Suspended", icon: <Ban className="w-4 h-4 text-red-500" /> },
                { label: "Inactive", icon: <PauseCircle className="w-4 h-4 text-gray-400" /> },
                { label: "Invited", icon: <Mail className="w-4 h-4 text-blue-500" /> },
              ],
            },
            {
              key: "role",
              label: "Role",
              onSelect: (val) => setFilter("role", val),
              items: [
                { label: "Manager", icon: <Users className="w-4 h-4 text-purple-500" /> },
                { label: "Admin", icon: <ShieldCheck className="w-4 h-4 text-blue-500" /> },
                { label: "Cashier", icon: <User className="w-4 h-4 text-gray-700" /> },
                { label: "Superadmin", icon: <ShieldCheck className="w-4 h-4 text-orange-500" /> },
              ],
            },
          ]}
        />
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
