import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "../ui/sidebar";
import { Home, List, AppWindow } from "lucide-react";

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
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <List className="mr-2 h-4 w-4" />
                  Tasks
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <AppWindow className="mr-2 h-4 w-4" />
                  Apps
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}