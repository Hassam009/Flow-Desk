import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  // SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "../ui/sidebar";
import { Home, List, AppWindow } from "lucide-react";
import { Link } from "react-router-dom";

export default function CustomSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="w-60 min-w-[240px] max-w-[260px] bg-white border-r h-full shadow-sm rounded-r-xl"
    >
      <div className="p-4 border-b flex flex-col">
        <span className="font-bold text-lg">MyApp</span>
        {/* <span className="text-xs text-gray-400">Vite + ShadcnUI</span> */}
      </div>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>General</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link to="/" className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link to="/tasks" className="flex items-center">
                    <List className="mr-2 h-4 w-4" />
                    Tasks
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link to="/AppPage" className="flex items-center">
                    <AppWindow className="mr-2 h-4 w-4" />
                    Apps
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}