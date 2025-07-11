import { Badge } from "@/components/ui/badge";

export type StatusType = "Active" | "Suspended" | "Inactive" | "Invited" | "Bug";


interface Props {
  status: StatusType;
}

export const StatusBadge = ({ status }: Props) => {
  const map: Record<StatusType, string> = {
    Active: "bg-green-100 text-green-700 border border-green-500",
    Suspended: "bg-red-100 text-red-700 border border-red-500",
    Inactive: "bg-gray-200 text-gray-700 border border-gray-400",
    Invited: "bg-blue-100 text-blue-700 border border-blue-500",
    Bug: "bg-blue-100 text-blue-700 border border-blue-500",
  };

  return (
    <Badge className={`capitalize ${map[status] || ""}`}>
      {status}
    </Badge>
  );
};
export default StatusBadge;