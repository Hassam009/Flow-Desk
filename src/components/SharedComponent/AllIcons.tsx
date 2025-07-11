import {
  Users2,
  UserRound,
  CreditCard,
  LayoutDashboard,
  CheckSquare,
  PanelsTopLeft,
  MessageSquare,
  Lock,
  ShieldCheck,
  Bug,
} from "lucide-react";
import { JSX } from "react";

interface IconProps {
  name?: string;
  role?: string;
}

const AllIcons = ({ name, role }: IconProps) => {
  const iconMap: Record<string, JSX.Element> = {
    dashboard: <LayoutDashboard className="w-4 h-4 mr-2 text-muted-foreground" />,
    tasks: <CheckSquare className="w-4 h-4 mr-2 text-muted-foreground" />,
    apps: <PanelsTopLeft className="w-4 h-4 mr-2 text-muted-foreground" />,
    chats: <MessageSquare className="w-4 h-4 mr-2 text-muted-foreground" />,
    users: <UserRound className="w-4 h-4 mr-2 text-muted-foreground" />,
    login: <Lock className="w-4 h-4 mr-2 text-muted-foreground" />,
  };

  // Map for role icons
  const roleIconMap: Record<string, JSX.Element> = {
    admin: <ShieldCheck className="w-4 h-4 mr-2 text-muted-foreground" />,
    manager: <Users2 className="w-4 h-4 mr-2 text-muted-foreground" />,
    cashier: <CreditCard className="w-4 h-4 mr-2 text-muted-foreground" />,
    superadmin: <UserRound className="w-4 h-4 mr-2 text-muted-foreground" />,
  };

  if (role) {
    const key = role.toLowerCase();
    return roleIconMap[key] || <Bug className="w-4 h-4 mr-2 text-muted-foreground" />;
  }

  if (name) {
    const key = name.toLowerCase();
    return iconMap[key] || null;
  }

  return null;
};

export default AllIcons;
